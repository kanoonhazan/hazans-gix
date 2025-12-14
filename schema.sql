-- 1. Create Tables (Must come first!)
create table if not exists projects (
  id text primary key,
  title text not null,
  summary text not null,
  tags text[] not null default '{}',
  thumbnail text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists case_studies (
  id text primary key references projects(id) on delete cascade,
  content jsonb not null default '{}'::jsonb
);

-- 2. Enable Row Level Security (RLS)
alter table projects enable row level security;
alter table case_studies enable row level security;

-- 3. Drop existing policies to allow re-running script cleanly
drop policy if exists "Public Read Projects" on projects;
drop policy if exists "Public Read Case Studies" on case_studies;
drop policy if exists "Admin All Projects" on projects;
drop policy if exists "Admin All Case Studies" on case_studies;

-- 4. Create Policies

-- Public Read Access
create policy "Public Read Projects" on projects for select using (true);
create policy "Public Read Case Studies" on case_studies for select using (true);

-- Admin Full Access
create policy "Admin All Projects" on projects for all using (auth.role() = 'authenticated');
create policy "Admin All Case Studies" on case_studies for all using (auth.role() = 'authenticated');

-- 5. Storage Policies
-- Drop existing storage policies if they exist
drop policy if exists "Public Read Images" on storage.objects;
drop policy if exists "Admin Upload Images" on storage.objects;
drop policy if exists "Admin Update Images" on storage.objects;
drop policy if exists "Admin Delete Images" on storage.objects;

-- Ensure bucket exists
insert into storage.buckets (id, name, public) values ('portfolio-assets', 'portfolio-assets', true)
on conflict (id) do nothing;

create policy "Public Read Images" on storage.objects for select using ( bucket_id = 'portfolio-assets' );
create policy "Admin Upload Images" on storage.objects for insert with check ( bucket_id = 'portfolio-assets' and auth.role() = 'authenticated' );
create policy "Admin Update Images" on storage.objects for update using ( bucket_id = 'portfolio-assets' and auth.role() = 'authenticated' );
create policy "Admin Delete Images" on storage.objects for delete using ( bucket_id = 'portfolio-assets' and auth.role() = 'authenticated' );
