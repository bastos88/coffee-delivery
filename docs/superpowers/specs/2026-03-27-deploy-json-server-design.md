---
title: Deploy json-server para Vercel (via host externo)
date: 2026-03-27
summary: "Permitir que o frontend hospedado na Vercel aponte para uma API json-server pública, hospedada em um serviço que suporte processos Node (ex. Railway/Render)."
---

# Objetivo

Permitir que a aplicação frontend hospedada na Vercel consuma a API baseada em `db.json` usando `json-server`, sem tentar executar o processo de longa duração na própria Vercel.

# Abordagem escolhida

Hospedar o `json-server` em um provedor que suporte processos Node (ex.: Railway, Render). O frontend na Vercel ficará apontando para a URL pública do serviço via variáveis de ambiente (`VITE_API_URL`).

## Por que esta abordagem

- Simples de implementar usando artefatos já no repositório (`server.cjs`, script `start:api` em [package.json](package.json)).
- Mantém o fluxo de desenvolvimento atual (usa `db.json` e json-server).
- Evita a limitação de longo-running processes do Vercel.

## Passos de alto nível

1. Verificar artefatos no repositório
   - Confirme que `server.cjs` existe e escuta `process.env.PORT` ([server.cjs](server.cjs)).
   - Confirme o script `start:api` em [package.json](package.json).

2. Deploy no Railway / Render (exemplo Railway)
   - Crie um novo projeto no Railway e conecte-o ao repositório GitHub.
   - Na configuração do serviço, defina o *Start Command* para: `npm run start:api`.
   - (Build Command: opcional — `npm ci && npm run build` se necessário.)
   - Railway fornecerá uma URL pública (ex.: `https://coffee-api.up.railway.app`).

3. Configurar frontend na Vercel
   - No painel do projeto Vercel → Settings → Environment Variables, adicione:
     - `VITE_API_URL` = `https://<sua-api>.up.railway.app`
   - Redeploy do projeto Vercel para aplicar a variável.

4. Testes locais
   - Instale dependências e execute a API localmente para testar:

```bash
npm ci
npm run start:api    # executa server.cjs (usa db.json)
# ou para desenvolvimento com json-server diretamente:
npm run dev:server
```

5. Limitações e recomendações
   - `json-server` grava em `db.json`. Em hosts com filesystem efêmero (ex.: Railway/Render dependendo do plano), os dados podem ser perdidos em redeploys.
   - Para persistência confiável, migrar para um banco (Postgres/Supabase). Veja [docs/migrate-db-to-postgres.md](docs/migrate-db-to-postgres.md).

## Arquivos relevantes

- `server.cjs`: entry point para iniciar `json-server`.
- `package.json`: contém `start:api` e `dev:server` (scripts úteis).
- `db.json`: dados de exemplo usados pelo `json-server`.

## Próximos passos propostos

1. Se concordar com este design, eu:
   - Cometo este documento (feito). 
   - Escrevo um guia passo-a-passo detalhado para Railway e outro para Render (opcional).
   - Opção adicional: criar um pequeno workflow README ou um script `deploy:api` com instruções.

2. Depois de deploy, atualize `VITE_API_URL` na Vercel e teste o frontend.

---

Por favor revise este design; se estiver ok, confirmo e escrevo as instruções de deploy passo-a-passo para Railway/Render.
