
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://akurqxjuezzoigsfgfxy.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrdXJxeGp1ZXp6b2lnc2ZnZnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1MTM5ODYsImV4cCI6MjA1MzA4OTk4Nn0.n9jfxZGkfqnmRtLMgbP_6PPSYJAS0Gij4gV36kCLdbQ"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;