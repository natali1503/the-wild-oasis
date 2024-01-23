import { createClient } from "@supabase/supabase-js";
/* eslint-disable */
export const supabaseUrl = "https://qybsmspdkatuoaytxgbc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5YnNtc3Bka2F0dW9heXR4Z2JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MDU3ODAsImV4cCI6MjAxMjQ4MTc4MH0.sHUqQA6UTQNPluF4-9cFUDABZFs1CgpG2fxhue-e8UQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
