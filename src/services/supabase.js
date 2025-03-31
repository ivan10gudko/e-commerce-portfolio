import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://bnapsbenicdngdtbjbhf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuYXBzYmVuaWNkbmdkdGJqYmhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxMDkzNjQsImV4cCI6MjA1MTY4NTM2NH0.n6gxoY9psnoQTRwoPMnO53uR07HFKsgvZo25NJyIfAw'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;