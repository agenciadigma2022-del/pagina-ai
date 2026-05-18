---
execution: inline
agent: fabio-fetcher
inputFile: squads/relatorio-ads/pipeline/data/report-config.md
outputFile: squads/relatorio-ads/output/{run_id}/raw-data.md
model_tier: powerful
---

# Step 03: Coleta de Dados via API

## Context Loading

Antes de executar, leia:
- `squads/relatorio-ads/pipeline/data/report-config.md` — configurações do relatório (período, cliente, contas)
- `squads/relatorio-ads/pipeline/data/.env` — credenciais de API

## Instructions

### Process

1. **Leia o `report-config.md`** para extrair:
   - Período: `date_from`, `date_to`
   - Nome do cliente: `client_name`
   - Contas a usar: `google_ads_customer_id`, `meta_ad_account_id`
   - Plataformas selecionadas

2. **Leia o `.env`** e extraia as credenciais necessárias

3. **Escreva o script Python** `squads/relatorio-ads/pipeline/data/fetch_google_ads.py`:

```python
#!/usr/bin/env python3
"""Fábio Fetcher — Google Ads Data Collector"""

import os, json, sys
from dotenv import load_dotenv

# Load .env from squad data directory
load_dotenv("squads/relatorio-ads/pipeline/data/.env")

# Overrides from args
customer_id = sys.argv[1] if len(sys.argv) > 1 else os.getenv("GOOGLE_ADS_CUSTOMER_ID")
date_from   = sys.argv[2] if len(sys.argv) > 2 else os.getenv("REPORT_DATE_FROM")
date_to     = sys.argv[3] if len(sys.argv) > 3 else os.getenv("REPORT_DATE_TO")

from google.ads.googleads.client import GoogleAdsClient

# Build client from env vars
client = GoogleAdsClient.load_from_dict({
    "developer_token":   os.getenv("GOOGLE_ADS_DEVELOPER_TOKEN"),
    "client_id":         os.getenv("GOOGLE_ADS_CLIENT_ID"),
    "client_secret":     os.getenv("GOOGLE_ADS_CLIENT_SECRET"),
    "refresh_token":     os.getenv("GOOGLE_ADS_REFRESH_TOKEN"),
    "login_customer_id": os.getenv("GOOGLE_ADS_LOGIN_CUSTOMER_ID"),
    "use_proto_plus":    True,
})

ga_service = client.get_service("GoogleAdsService")

# Campaign level query
query = f"""
    SELECT
      campaign.id,
      campaign.name,
      campaign.status,
      metrics.impressions,
      metrics.clicks,
      metrics.cost_micros,
      metrics.conversions,
      metrics.ctr,
      metrics.average_cpc,
      metrics.cost_per_conversion,
      metrics.conversion_rate,
      metrics.all_conversions,
      metrics.all_conversions_value,
      metrics.roas
    FROM campaign
    WHERE segments.date BETWEEN '{date_from}' AND '{date_to}'
    AND campaign.status = 'ENABLED'
    ORDER BY metrics.cost_micros DESC
"""

try:
    response = ga_service.search(customer_id=customer_id, query=query)
    campaigns = []
    total_cost = 0
    total_clicks = 0
    total_impressions = 0
    total_conversions = 0

    for row in response:
        c = row.campaign
        m = row.metrics
        cost = m.cost_micros / 1_000_000
        total_cost += cost
        total_clicks += m.clicks
        total_impressions += m.impressions
        total_conversions += m.conversions

        campaigns.append({
            "id": c.id,
            "name": c.name,
            "status": c.status.name,
            "impressions": m.impressions,
            "clicks": m.clicks,
            "cost": round(cost, 2),
            "conversions": round(m.conversions, 1),
            "ctr_pct": round(m.ctr * 100, 2),
            "avg_cpc": round(m.average_cpc / 1_000_000, 2),
            "cost_per_conversion": round(m.cost_per_conversion / 1_000_000, 2) if m.conversions > 0 else None,
            "conversion_rate_pct": round(m.conversion_rate * 100, 2),
            "all_conversions": round(m.all_conversions, 1),
            "roas": round(m.roas, 2) if m.roas else None,
        })

    result = {
        "platform": "google_ads",
        "customer_id": customer_id,
        "period": {"from": date_from, "to": date_to},
        "totals": {
            "cost": round(total_cost, 2),
            "clicks": total_clicks,
            "impressions": total_impressions,
            "conversions": round(total_conversions, 1),
            "avg_ctr_pct": round((total_clicks / total_impressions * 100) if total_impressions > 0 else 0, 2),
            "avg_cpc": round(total_cost / total_clicks if total_clicks > 0 else 0, 2),
            "overall_cpa": round(total_cost / total_conversions if total_conversions > 0 else 0, 2),
        },
        "campaigns": campaigns,
    }
    print(json.dumps(result, ensure_ascii=False, indent=2))

except Exception as e:
    print(json.dumps({"error": str(e), "platform": "google_ads"}, indent=2))
    sys.exit(1)
```

4. **Escreva o script Python** `squads/relatorio-ads/pipeline/data/fetch_meta_ads.py`:

```python
#!/usr/bin/env python3
"""Fábio Fetcher — Meta Ads Data Collector"""

import os, json, sys
from dotenv import load_dotenv

load_dotenv("squads/relatorio-ads/pipeline/data/.env")

ad_account_id = sys.argv[1] if len(sys.argv) > 1 else os.getenv("META_AD_ACCOUNT_ID")
date_from     = sys.argv[2] if len(sys.argv) > 2 else os.getenv("REPORT_DATE_FROM")
date_to       = sys.argv[3] if len(sys.argv) > 3 else os.getenv("REPORT_DATE_TO")
access_token  = os.getenv("META_ACCESS_TOKEN")

from facebook_business.api import FacebookAdsApi
from facebook_business.adobjects.adaccount import AdAccount
from facebook_business.adobjects.campaign import Campaign

FacebookAdsApi.init(access_token=access_token)

account = AdAccount(ad_account_id)

fields = [
    'campaign_name',
    'impressions',
    'clicks',
    'spend',
    'conversions',
    'ctr',
    'cpc',
    'cpm',
    'cpp',
    'reach',
    'frequency',
    'actions',
    'cost_per_action_type',
    'purchase_roas',
]

params = {
    'time_range': {'since': date_from, 'until': date_to},
    'level': 'campaign',
    'fields': ','.join(fields),
}

try:
    insights = account.get_insights(fields=fields, params=params)

    campaigns = []
    total_spend = 0
    total_clicks = 0
    total_impressions = 0
    total_conversions = 0

    for row in insights:
        spend = float(row.get('spend', 0))
        clicks = int(row.get('clicks', 0))
        impressions = int(row.get('impressions', 0))

        # Parse conversions from actions
        conversions = 0
        actions = row.get('actions', [])
        for action in actions:
            if action.get('action_type') in ['purchase', 'lead', 'complete_registration', 'offsite_conversion.fb_pixel_purchase']:
                conversions += float(action.get('value', 0))

        total_spend += spend
        total_clicks += clicks
        total_impressions += impressions
        total_conversions += conversions

        # Parse ROAS
        roas = None
        purchase_roas = row.get('purchase_roas', [])
        if purchase_roas:
            roas = round(float(purchase_roas[0].get('value', 0)), 2)

        campaigns.append({
            "name": row.get('campaign_name', 'N/A'),
            "impressions": impressions,
            "reach": int(row.get('reach', 0)),
            "clicks": clicks,
            "spend": round(spend, 2),
            "conversions": round(conversions, 1),
            "ctr_pct": round(float(row.get('ctr', 0)) * 100, 2),
            "cpc": round(float(row.get('cpc', 0)), 2),
            "cpm": round(float(row.get('cpm', 0)), 2),
            "cpp": round(float(row.get('cpp', 0)), 2),
            "frequency": round(float(row.get('frequency', 0)), 2),
            "cost_per_conversion": round(spend / conversions, 2) if conversions > 0 else None,
            "roas": roas,
        })

    result = {
        "platform": "meta_ads",
        "ad_account_id": ad_account_id,
        "period": {"from": date_from, "to": date_to},
        "totals": {
            "spend": round(total_spend, 2),
            "clicks": total_clicks,
            "impressions": total_impressions,
            "reach": sum(int(c.get('reach', 0)) for c in campaigns),
            "conversions": round(total_conversions, 1),
            "avg_ctr_pct": round((total_clicks / total_impressions * 100) if total_impressions > 0 else 0, 2),
            "avg_cpc": round(total_spend / total_clicks if total_clicks > 0 else 0, 2),
            "avg_cpm": round(total_spend / total_impressions * 1000 if total_impressions > 0 else 0, 2),
            "overall_cpa": round(total_spend / total_conversions if total_conversions > 0 else 0, 2),
        },
        "campaigns": campaigns,
    }
    print(json.dumps(result, ensure_ascii=False, indent=2))

except Exception as e:
    print(json.dumps({"error": str(e), "platform": "meta_ads"}, indent=2))
    sys.exit(1)
```

5. **Execute os scripts** via Bash:

```bash
# Google Ads
python3 squads/relatorio-ads/pipeline/data/fetch_google_ads.py \
  {google_ads_customer_id} {date_from} {date_to} > /tmp/google_ads_raw.json 2>&1

# Meta Ads
python3 squads/relatorio-ads/pipeline/data/fetch_meta_ads.py \
  {meta_ad_account_id} {date_from} {date_to} > /tmp/meta_ads_raw.json 2>&1
```

6. **Leia os JSONs resultantes** e formate em `raw-data.md`

## Output Format

```markdown
# Dados Brutos de Campanhas — {client_name}
**Período:** {date_from} a {date_to}
**Coletado em:** {timestamp}

---

## Google Ads

### Totais do Período
| Métrica | Valor |
|---------|-------|
| Custo Total | R$ {total_cost} |
| Impressões | {impressions} |
| Cliques | {clicks} |
| CTR Médio | {ctr}% |
| CPC Médio | R$ {cpc} |
| Conversões | {conversions} |
| CPA Médio | R$ {cpa} |

### Campanhas
| Campanha | Custo | Impressões | Cliques | CTR | CPC | Conversões | CPA | ROAS |
|----------|-------|-----------|---------|-----|-----|-----------|-----|------|
| {nome} | R$ {x} | {x} | {x} | {x}% | R$ {x} | {x} | R$ {x} | {x}x |

---

## Meta Ads

### Totais do Período
| Métrica | Valor |
|---------|-------|
| Investimento Total | R$ {total_spend} |
| Alcance | {reach} |
| Impressões | {impressions} |
| Frequência Média | {freq}x |
| Cliques | {clicks} |
| CTR Médio | {ctr}% |
| CPC Médio | R$ {cpc} |
| CPM Médio | R$ {cpm} |
| Conversões | {conversions} |
| CPA Médio | R$ {cpa} |

### Campanhas
| Campanha | Invest. | Alcance | Cliques | CTR | CPC | CPM | Conv. | CPA | ROAS |
|----------|---------|---------|---------|-----|-----|-----|-------|-----|------|
| {nome} | R$ {x} | {x} | {x} | {x}% | R$ {x} | R$ {x} | {x} | R$ {x} | {x}x |
```

## Veto Conditions

Rejeitar e pedir revisão se:
1. Qualquer script retornar `{"error": ...}` — reportar o erro ao usuário e aguardar correção
2. Os JSONs retornarem vazios (nenhuma campanha) — verificar IDs de conta e permissões

## Quality Criteria

- [ ] Dados coletados com sucesso de todas as plataformas selecionadas
- [ ] Scripts Python salvos em `pipeline/data/`
- [ ] `raw-data.md` contém tabelas completas para todas as plataformas
- [ ] Período e nome do cliente corretos conforme `report-config.md`
- [ ] Nenhum erro de API não tratado
