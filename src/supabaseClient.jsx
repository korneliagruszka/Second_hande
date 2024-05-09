import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://bstwhfbdevvwtousteqz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzdHdoZmJkZXZ2d3RvdXN0ZXF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4OTM0NjQsImV4cCI6MjAyOTQ2OTQ2NH0.Ph7pfZM9hlsuppT3XWKljZWxh4EXnDo6ujoQ3VDp3Gw');

export default supabase;