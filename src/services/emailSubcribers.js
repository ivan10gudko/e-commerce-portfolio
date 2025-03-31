import supabase from "./supabase";

export default async function Subsribe(email) {
  const { data, error } = await supabase
    .from("EmailSubscribers")
    .insert({ 'email':email})
    .select('*');

  if (error) {
    console.error(error);
    return "error";
  }

  return "success";
}
