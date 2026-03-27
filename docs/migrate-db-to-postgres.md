# Migrar `db.json` para Postgres / Supabase

Este guia explica como gerar um arquivo SQL a partir de `db.json` e aplicá-lo em um banco Postgres (por exemplo, Supabase) para mover seus dados do `json-server` para um banco relacional.

## Gerar o arquivo SQL

Na raiz do projeto execute:

```bash
npm run migrate:sql
# gera `migrate.sql` a partir de `db.json`
```

Opcional: passe o nome do arquivo de saída:

```bash
node scripts/migrate-db-to-postgres.mjs my-migration.sql
```

## Aplicar em um Postgres local (psql)

Se você tiver `psql` configurado e a variável `DATABASE_URL` apontando para seu banco, rode:

```bash
psql "$DATABASE_URL" -f migrate.sql
```

Ou especificando host/user/db:

```bash
psql -h <host> -U <user> -d <database> -f migrate.sql
```

## Aplicar em Supabase

1. No painel Supabase, crie um projeto (se ainda não tiver).  
2. Na página do projeto, em Settings → Database → Connection info, copie a `Connection string` (ela é uma URL compatível com `psql`).  
3. Execute locally:

```bash
psql "postgresql://<user>:<password>@<host>:5432/<db>?sslmode=require" -f migrate.sql
```

Observações:

- O script gera uma tabela `transactions` com colunas: `id`, `description`, `category`, `text`, `price`, `image`.  
- O campo `price` é convertido do formato brasileiro `9,90` para `9.90` e inserido como `numeric(10,2)`.  
- O script faz `TRUNCATE TABLE transactions` antes de inserir os dados.  
- Para rodar diretamente contra o banco a partir do Node você pode instalar `pg` e adaptar o script, mas a abordagem SQL + `psql` é simples e não adiciona dependências.

## Próximos passos recomendados

- Depois de migrar os dados, atualize a API do frontend para apontar para o banco se for criar uma API (ou continue a usar `json-server` hospedado).  
- Se pretende usar Supabase em produção, considere criar tabelas e permissões adequadas e não guardar dados sensíveis sem proteção.
