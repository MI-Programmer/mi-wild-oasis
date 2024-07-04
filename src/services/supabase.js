import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gahsoijeinhnorigeors.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhaHNvaWplaW5obm9yaWdlb3JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkxMzAxNDUsImV4cCI6MjAzNDcwNjE0NX0.v20DrDNgNtd8PCX4j3LPpvSo7eXULnduRYIuKaHKWAo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
