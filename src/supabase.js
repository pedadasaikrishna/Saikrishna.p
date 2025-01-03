  // src/supabase.js
  import { createClient } from '@supabase/supabase-js';
  
  // Your Supabase URL and Key from the project settings
  const supabaseUrl = 'https://fxvhkffuswdjkiekpqie.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4dmhrZmZ1c3dkamtpZWtwcWllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU5MTg4ODAsImV4cCI6MjA1MTQ5NDg4MH0.UwOWyGjvlcra-TTPCxrnmQlcqFmB7Q409DyWQMv2w2Y';
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  export default supabase;
  