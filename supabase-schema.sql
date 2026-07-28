create table if not exists public.seteuk_records (id uuid primary key default gen_random_uuid(), student_id text not null, grade text not null, subject text not null, keywords text not null, draft text not null, created_at timestamptz not null default now());
alter table public.seteuk_records enable row level security;
create policy "Allow anonymous demo reads" on public.seteuk_records for select using (true);
create policy "Allow anonymous demo inserts" on public.seteuk_records for insert with check (true);
