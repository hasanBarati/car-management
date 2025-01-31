import { supabase } from "@/config/supabaseClient";

export async function insertNotification(data) {
  const { error } = await supabase.from("reminder").insert([data]);
  if (error) throw new Error(error.message);
  return data;
}

export async function getNotifications() {

  const { data } = await supabase.from("reminder").select("*");
  return data;
}
export async function deleteNotification(id: number): Promise<void> {
  await supabase.from("reminder").delete().eq("id", id);
}
