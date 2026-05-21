/// <reference types="vite/client" />
import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabaseInstance: SupabaseClient | null = null;

export const getSupabase = (): SupabaseClient => {
  if (!supabaseInstance) {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error(
        'Supabase URL and Anon Key must be provided in environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)'
      );
    }

    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseInstance;
};

/**
 * Supabase Setup Instructions:
 * 1. Create a project at supabase.com
 * 2. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment variables.
 * 3. Create a table: contact_submissions
 *    Columns:
 *    - id: uuid (primary key)
 *    - full_name: text
 *    - email: text
 *    - project_details: text
 *    - created_at: timestamptz (default now())
 */
