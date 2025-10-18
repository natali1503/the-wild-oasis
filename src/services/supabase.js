import { createClient } from "@supabase/supabase-js";
/* eslint-disable */
export const supabaseUrl = "https://bonczweuqwwvvgcdimju.supabase.co";
const supabaseKey = `${import.meta.env.VITE_REACT_APP_API_KEY}`;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
