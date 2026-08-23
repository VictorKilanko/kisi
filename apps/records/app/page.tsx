import { redirect } from "next/navigation";
import { hasSupabaseEnv } from "@/lib/supabase/env";
import { SetupNotice } from "@/components/SetupNotice";

export default function Home() {
  if (!hasSupabaseEnv()) return <SetupNotice />;
  redirect("/today");
}
