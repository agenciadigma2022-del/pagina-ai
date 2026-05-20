alter table sites add column if not exists user_id uuid references auth.users(id) on delete cascade;

create index if not exists sites_user_id_idx on sites(user_id);
