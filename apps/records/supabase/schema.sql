-- ============================================================================
-- Kisi Farm Records — database schema
-- Run this once in the Supabase SQL editor (Dashboard -> SQL -> New query).
-- It creates the tables, the per-farm security rules, the new-user trigger,
-- and seeds Kisi Farm with its four batches (B-001..B-004).
-- Safe to re-run: it uses "if not exists" / "on conflict do nothing".
-- ============================================================================

-- ---------- Tables ----------------------------------------------------------

create table if not exists public.farms (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  location   text,
  created_at timestamptz not null default now()
);

-- One row per user, linking them to a farm. id = the Supabase auth user id.
create table if not exists public.profiles (
  id         uuid primary key references auth.users (id) on delete cascade,
  farm_id    uuid references public.farms (id) on delete set null,
  full_name  text,
  role       text not null default 'worker',   -- 'owner' | 'worker'
  created_at timestamptz not null default now()
);

create table if not exists public.batches (
  id            uuid primary key default gen_random_uuid(),
  farm_id       uuid not null references public.farms (id) on delete cascade,
  code          text not null,                 -- 'B-001'
  breed         text,
  source        text,
  arrival_date  date,
  arrival_count integer,
  current_count integer,
  status        text not null default 'active', -- active|incoming|parent_stock|retired|future
  notes         text,
  unique (farm_id, code)
);

create table if not exists public.daily_records (
  id              uuid primary key default gen_random_uuid(),
  farm_id         uuid not null references public.farms (id) on delete cascade,
  record_date     date not null,
  laying_birds    integer,
  water_ok        boolean,
  mortality       integer,
  mortality_cause text,
  sick            integer,
  treatment       text,
  vet_visit       boolean,
  eggs_cracked    integer,
  eggs_sold       integer,
  price_note      text,
  egg_revenue     numeric,
  cash_received   numeric,
  cash_at_hand    numeric,
  expenses        numeric,
  expense_detail  text,
  notes           text,
  created_by      uuid references auth.users (id),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  unique (farm_id, record_date)
);

-- One line per batch inside a day's record (count, age, eggs, feed).
create table if not exists public.batch_daily (
  id               uuid primary key default gen_random_uuid(),
  daily_record_id  uuid not null references public.daily_records (id) on delete cascade,
  farm_id          uuid not null references public.farms (id) on delete cascade,
  batch_id         uuid not null references public.batches (id) on delete cascade,
  batch_code       text not null,
  birds            integer,
  age_weeks        integer,
  eggs             integer,
  feed_kg          numeric,
  unique (daily_record_id, batch_id)
);

create table if not exists public.feed_purchases (
  id            uuid primary key default gen_random_uuid(),
  farm_id       uuid not null references public.farms (id) on delete cascade,
  purchase_date date not null,
  supplier      text,
  feed_type     text,
  bags          numeric,
  kg_per_bag    numeric,
  total_kg      numeric,
  unit_cost     numeric,
  total_cost    numeric,
  batch_code    text,                           -- 'B-001'..'B-004' or 'ALL'
  notes         text,
  created_at    timestamptz not null default now()
);

-- ---------- Security: each farm sees only its own rows ----------------------

-- The farm the current user belongs to.
create or replace function public.my_farm_id()
returns uuid
language sql
stable
security definer
set search_path = public
as $$ select farm_id from public.profiles where id = auth.uid() $$;

alter table public.farms          enable row level security;
alter table public.profiles       enable row level security;
alter table public.batches        enable row level security;
alter table public.daily_records  enable row level security;
alter table public.batch_daily    enable row level security;
alter table public.feed_purchases enable row level security;

-- profiles: a user can see and edit only their own profile row.
drop policy if exists profiles_self on public.profiles;
create policy profiles_self on public.profiles
  for all using (id = auth.uid()) with check (id = auth.uid());

-- farms: a user can see the farm they belong to.
drop policy if exists farms_mine on public.farms;
create policy farms_mine on public.farms
  for select using (id = public.my_farm_id());

-- Helper to build identical per-farm policies on the data tables.
do $$
declare t text;
begin
  foreach t in array array['batches','daily_records','batch_daily','feed_purchases']
  loop
    execute format('drop policy if exists %I_farm on public.%I;', t, t);
    execute format(
      'create policy %I_farm on public.%I for all
         using (farm_id = public.my_farm_id())
         with check (farm_id = public.my_farm_id());', t, t);
  end loop;
end $$;

-- ---------- New user -> attach to the pilot farm ----------------------------
-- For the Kisi pilot, every new sign-up joins the first (oldest) farm, which is
-- Kisi Farm seeded below. When you open the app to other farms, replace this
-- with an invite/onboarding flow that sets farm_id explicitly.

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare pilot uuid;
begin
  select id into pilot from public.farms order by created_at asc limit 1;
  insert into public.profiles (id, farm_id, full_name, role)
  values (new.id, pilot, coalesce(new.raw_user_meta_data->>'full_name', ''), 'owner')
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- Seed: Kisi Farm + its four batches ------------------------------

insert into public.farms (id, name, location)
values ('11111111-1111-1111-1111-111111111111', 'Kisi Farm', 'Southwestern Nigeria')
on conflict (id) do nothing;

insert into public.batches (farm_id, code, breed, source, arrival_date, arrival_count, current_count, status, notes)
values
  ('11111111-1111-1111-1111-111111111111','B-001','ISA Brown (Layers)','Local supplier','2025-05-15',152,133,'active','Original flock. Approaching end-of-lay late 2026.'),
  ('11111111-1111-1111-1111-111111111111','B-002','ISA Brown (Layers)','Local supplier','2026-04-15',80,60,'active','Began laying ~Jul 2026.'),
  ('11111111-1111-1111-1111-111111111111','B-003','ISA Brown (Layers)','Local supplier','2026-05-15',71,58,'active','Began laying ~Aug 2026.'),
  ('11111111-1111-1111-1111-111111111111','B-004','ISA Brown (Layers)','Local supplier','2026-08-16',100,100,'active','Arrived 16 Aug 2026 to reach the 400-bird target. Expected to begin laying ~Oct-Nov 2026.')
on conflict (farm_id, code) do nothing;
