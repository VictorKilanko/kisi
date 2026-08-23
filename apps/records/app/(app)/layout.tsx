import { redirect } from "next/navigation";
import { hasSupabaseEnv } from "@/lib/supabase/env";
import { SetupNotice } from "@/components/SetupNotice";
import { getMyFarm } from "@/lib/data";
import { Nav } from "@/components/Nav";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!hasSupabaseEnv()) return <SetupNotice />;

  const farm = await getMyFarm();
  // Middleware already redirects signed-out users; this covers the rare case of
  // a signed-in user with no farm assigned yet.
  if (!farm) redirect("/login");

  return (
    <div className="flex min-h-screen flex-col">
      <Nav farmName={farm.name} />
      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-5">{children}</div>
    </div>
  );
}
