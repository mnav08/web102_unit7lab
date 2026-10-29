import { createClient } from "@supabase/supabase-js";

const url = "https://eadrlkibstbbqmtfqpbr.supabase.co";
const supabaseKey = import.meta.env.VITE_API_KEY;

if (!supabaseKey) {
  throw new Error("Missing VITE_API_KEY environment variable.");
}

export const supabase = createClient(url, supabaseKey);
