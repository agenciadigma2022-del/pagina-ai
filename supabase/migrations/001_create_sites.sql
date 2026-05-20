-- Tabela de sites (páginas salvas pelos usuários)
create table if not exists sites (
  id text primary key,           -- slug do template / identificador do site
  title text not null,
  niche text,
  blocks jsonb not null,
  palette jsonb not null,
  updated_at timestamptz not null default now()
);

-- Atualiza updated_at automaticamente
create or replace function update_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger sites_updated_at
  before update on sites
  for each row execute procedure update_updated_at();

-- RLS desabilitado para MVP (sem auth ainda)
alter table sites disable row level security;
