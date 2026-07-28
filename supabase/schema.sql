create table if not exists public.setuk_records (
  id uuid primary key default gen_random_uuid(),
  student_identifier text not null,
  grade text not null,
  subject text not null,
  activity_keywords text not null,
  collection_summary text not null,
  draft_text text not null,
  reviewed_text text not null,
  created_at timestamptz not null default now()
);
alter table public.setuk_records enable row level security;
-- Server routes use the service role key; add authenticated policies here if user auth is enabled.
