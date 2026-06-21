// Import the Supabase Client from the official CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// MEGA-NET SUPABASE CONFIGURATION
// TODO: Replace these with your actual Supabase Project URL and Anon Key
const supabaseUrl = 'https://scjltwcbnnehdszwpfgz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjamx0d2Nibm5laGRzendwZmd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwMzk2MTYsImV4cCI6MjA5NzYxNTYxNn0.ZqEI6-OwRkQZ4JQSVoaUypwBQK3MTJ-lyYBbvoI4fTw';

// Initialize and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);