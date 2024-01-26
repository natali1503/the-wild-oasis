import { createClient } from "@supabase/supabase-js";
/* eslint-disable */
export const supabaseUrl = "https://qybsmspdkatuoaytxgbc.supabase.co";
const supabaseKey = `${process.env.REACT_APP_API_KEY}`;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
