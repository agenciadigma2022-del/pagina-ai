---
type: checkpoint
outputFile: squads/relatorio-ads/pipeline/data/setup-status.md
---

# Step 01: Configuração das Credenciais de API

## Contexto

O **Squad de Relatório de Ads** coleta dados automaticamente via Google Ads API e Meta Marketing API. Para funcionar, precisa de credenciais configuradas.

Este passo verifica se as credenciais já estão configuradas. Se já estiverem, pula diretamente para o próximo passo.

---

## Verificação de Credenciais

Verifique se o arquivo `squads/relatorio-ads/pipeline/data/.env` existe e contém as variáveis preenchidas.

**Se o arquivo já existir e estiver preenchido:** Informe "✅ Credenciais configuradas. Avançando para o próximo passo." e salve `setup-status.md` com `status: configured`.

**Se NÃO existir ou estiver vazio:** Siga as instruções abaixo para guiar o usuário no setup.

---

## Setup Inicial (Primeira Vez)

### Passo 1 — Instale as dependências Python

Execute via Bash:
```bash
pip install google-ads facebook-business python-dotenv
```

### Passo 2 — Crie o arquivo de credenciais

Crie o arquivo `squads/relatorio-ads/pipeline/data/.env` com o template abaixo:

```
# === GOOGLE ADS API ===
GOOGLE_ADS_DEVELOPER_TOKEN=SEU_DEVELOPER_TOKEN_AQUI
GOOGLE_ADS_CLIENT_ID=SEU_CLIENT_ID_AQUI
GOOGLE_ADS_CLIENT_SECRET=SEU_CLIENT_SECRET_AQUI
GOOGLE_ADS_REFRESH_TOKEN=SEU_REFRESH_TOKEN_AQUI
GOOGLE_ADS_LOGIN_CUSTOMER_ID=SEU_MCC_ID_SEM_TRACO
# Deixe vazio por agora — será preenchido no passo 2 de cada execução:
GOOGLE_ADS_CUSTOMER_ID=

# === META ADS API ===
META_ACCESS_TOKEN=SEU_ACCESS_TOKEN_AQUI
# Deixe vazio por agora — será preenchido no passo 2 de cada execução:
META_AD_ACCOUNT_ID=

# === PERÍODO DO RELATÓRIO (preenchido automaticamente no passo 2) ===
REPORT_DATE_FROM=
REPORT_DATE_TO=
REPORT_CLIENT_NAME=
```

> ⚠️ **Segurança:** Nunca commite o arquivo `.env` no Git. Ele já está no `.gitignore` do squad.

### Onde obter cada credencial

**Google Ads API:**
- `DEVELOPER_TOKEN`: Google Ads → Configurações da conta → Acesso à API
- `CLIENT_ID` e `CLIENT_SECRET`: Google Cloud Console → APIs & Services → Credenciais → OAuth 2.0
- `REFRESH_TOKEN`: Use o script `python -m google.ads.googleads.oauth2` ou a ferramenta OAuth Playground
- `LOGIN_CUSTOMER_ID`: ID da sua conta MCC (sem hífens), ex: `1234567890`

**Meta Ads API:**
- `META_ACCESS_TOKEN`: Meta for Developers → Ferramentas → Gerador de Token de Acesso (token de usuário do sistema, longa duração)
- `META_AD_ACCOUNT_ID`: Gerenciador de Anúncios → ID da conta, formato `act_XXXXXXXXXX`

---

## Pergunta ao Usuário

Após criar o arquivo `.env` e preencher as credenciais, confirme:

**As credenciais foram configuradas e salvas no arquivo `.env`?**

1. Sim, credenciais configuradas — pode avançar
2. Ainda não — preciso de mais ajuda para obter as credenciais

*Dica: Se precisar de ajuda para obter o refresh_token do Google Ads, me peça e eu gero o script de autorização OAuth.*
