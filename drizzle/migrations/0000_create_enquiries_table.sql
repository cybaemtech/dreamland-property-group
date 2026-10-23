create table public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  form_type text not null check (form_type in ('property','property_pack','revival','land','partner','contact')),
  payload jsonb not null,
  attribution jsonb,
  page_path text,
  status text not null default 'new',
  crm_synced_at timestamptz
);

GRANT ALL ON public.enquiries TO service_role;

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
-- No anon/authenticated policies: the table is only reachable through the
-- server-side enquiry endpoint using service credentials. Direct Data API
-- access is denied for anonymous visitors and signed-in users.