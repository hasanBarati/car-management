import { supabase } from "@/config/supabaseClient";

export async function insertNotification (data)  {
    const { error } = await supabase.from("reminder").insert([data]);
    if (error) throw new Error(error.message);
    return data;
  };

  export async function getNotifications() {
    const { data} = await supabase.from("reminder").select("*");
    return data;
  }
  export async function deleteNotifications(id:number) {
    const { data} = await supabase.from("reminder").delete(id);
    return data;
  }