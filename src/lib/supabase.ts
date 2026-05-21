import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const getSupabase = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("❌ Supabase env variables missing!");
    throw new Error("Supabase configuration missing");
  }

  return createClient(supabaseUrl, supabaseAnonKey);
};