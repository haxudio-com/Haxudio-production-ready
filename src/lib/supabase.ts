import { createClient } from '@supabase/supabase-js';

// 1. Pehle env variables check karein, agar missing hon to direct strings (fallback) use karein
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://prdhbwvzkfzgqohblqys.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByZGhid3Z6a2Z6Z3FvaGJscXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwMjQ5ODksImV4cCI6MjA5NDYwMDk4OX0.kjPavcfnDWYbGiqKI64rdjPcCirXoS26edsSGaSUWL0';

// 2. Client ko function se baahar ek hi baar initialize karein (Best Practice)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 3. Aapka purana function taake baqi files jahan ye use ho raha hai wo disturb na hon
export const getSupabase = () => {
  if (!supabaseUrl || supabaseUrl.includes('YOUR_ACTUAL_SUPABASE_PROJECT_URL')) {
    console.warn("⚠️ Warning: Supabase is using fallback credentials!");
  }
  return supabase;
};