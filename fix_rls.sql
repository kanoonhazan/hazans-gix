-- FIX RLS SCRIPT
-- RUN THIS IN SUPABASE SQL EDITOR

-- 1. Ensure Table Structure & Permissions
alter table projects enable row level security;
alter table case_studies enable row level security;

-- 2. RESET Policies (Drop all to be safe)
drop policy if exists "Public Read Projects" on projects;
drop policy if exists "Public Read Case Studies" on case_studies;
drop policy if exists "Admin All Projects" on projects;
drop policy if exists "Admin All Case Studies" on case_studies;

-- 3. RE-CREATE Policies (Correctly)
-- Allow EVERYONE to read
create policy "Public Read Projects" on projects for select using (true);
create policy "Public Read Case Studies" on case_studies for select using (true);

-- Allow AUTHENTICATED users to do everything
create policy "Admin All Projects" on projects for all using (auth.role() = 'authenticated');
create policy "Admin All Case Studies" on case_studies for all using (auth.role() = 'authenticated');

-- 4. Verify Content
-- Shows count of items to confirm data exists
select 
  (select count(*) from projects) as project_count,
  (select count(*) from case_studies) as case_study_count;
