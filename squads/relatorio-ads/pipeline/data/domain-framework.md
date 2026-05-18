# Domain Framework — Análise de Performance de Ads

## Hierarquia de KPIs (Modelo Padrão Google/Meta)

Os KPIs são organizados em 3 camadas:
- **Tier 1 — Resultados de Negócio:** ROAS, CPA/CPL, Receita, Volume de Leads
- **Tier 2 — Eficiência da Campanha:** CPM, CPC, CTR, Quality Score, Relevance Score
- **Tier 3 — Saúde da Entrega:** Impression Share, Frequência, Alcance, Auction Insights

> **Regra:** Baseie recomendações no Tier 1. Use Tier 2 e 3 para diagnosticar o porquê.

---

## Benchmarks de Referência para PMEs Brasileiras

### Google Ads — Rede de Pesquisa

| Métrica | Crítico | Adequado | Bom | Excelente |
|---------|---------|----------|-----|-----------|
| CTR | < 1.5% | 1.5-3% | 3-7% | > 7% |
| Taxa de Conversão | < 1.5% | 2-4% | 4-7% | > 8% |
| Quality Score (médio) | 1-4 | 5-6 | 7-8 | 9-10 |
| Impression Share | < 30% | 30-55% | 55-75% | > 75% |
| ROAS | < 2x | 2-3x | 3-5x | > 5x |

### Google Ads — Display

| Métrica | Crítico | Adequado | Bom |
|---------|---------|----------|-----|
| CTR | < 0.1% | 0.15-0.35% | > 0.5% |
| Taxa de Conversão | < 0.5% | 1-2% | > 3% |

### Meta Ads (Feed/Stories)

| Métrica | Crítico | Adequado | Bom | Excelente |
|---------|---------|----------|-----|-----------|
| CTR Link (Feed) | < 0.4% | 0.5-1% | 1-2.5% | > 3% |
| CTR Link (Stories) | < 0.6% | 0.8-1.5% | 1.5-3% | > 4% |
| CPM (Feed) | > R$45 | R$25-45 | R$15-30 | < R$15 |
| Frequência | > 4.5x | 3-4.5x | 1.5-3x | 1-2x |
| Taxa de Conversão (do clique) | < 1% | 1-2% | 2-4% | > 5% |
| ROAS | < 2x | 2-3x | 3-5x | > 5x |

### Benchmarks de CPA por Setor (Google Search, Brasil)

| Setor | CPA Típico |
|-------|-----------|
| Saúde / Clínicas | R$ 80-200 |
| Educação | R$ 50-150 |
| Serviços Locais | R$ 60-180 |
| E-commerce | R$ 40-120 |
| Serviços Financeiros | R$ 120-300 |
| Academia / Beleza | R$ 30-100 |

> **Nota:** CPA e CPC variam muito por setor e região. Sempre usar o histórico da conta como referência primária e benchmarks do setor como secundário.

---

## Framework de Análise em 5 Etapas

### Etapa 1: Visão do Período
Calcular totais do período: investimento, impressões, cliques, conversões, CPA e ROAS para cada plataforma. Delta vs. período anterior (MoM ou WoW).

### Etapa 2: Benchmarking Multicamada
Para cada métrica principal, comparar com 3 referências:
1. **Histórico da conta** (período anterior)
2. **Benchmark do setor** (tabelas acima)
3. **Meta definida com o cliente** (quando disponível)

Classificar como:
- ✅ **Acima do benchmark** — manter ou ampliar
- ⚠️ **Dentro do benchmark** — otimização incremental
- 🔴 **Abaixo do benchmark** — ação necessária

### Etapa 3: Diagnóstico por Campanha (5 Camadas)
Descer do macro ao micro:
1. **Conta** — pacing de orçamento, ROAS geral
2. **Campanha** — alinhamento com objetivo, alocação de verba
3. **Conjunto de anúncios/grupo** — segmentação, estratégia de lance, sobreposição de público
4. **Anúncio/Criativo** — CTR, fadiga, qualidade de copy
5. **Página de destino** — taxa de conversão, velocidade, atrito no formulário

### Etapa 4: Diagnóstico ICE (Problema → Causa → Efeito)
Para cada métrica crítica:
- **Problema (Issue)**: Desvio observável com número ("CTR caiu 38% semana a semana")
- **Causa (Cause)**: Categoria de causa raiz (fadiga de criativo / saturação de público / lance / sazonalidade / página de destino)
- **Efeito (Effect)**: Impacto quantificado no negócio ("CPA subiu de R$45 para R$73, adicionando R$2.800 em desperdício nos últimos 14 dias")

### Etapa 5: Recomendações por Matriz Impacto x Esforço

| Prioridade | Critério |
|-----------|---------|
| Alta | Alto Impacto + Esforço Baixo (< 2h) |
| Média | Alto Impacto + Esforço Médio (2-8h), ou Baixo Impacto + Esforço Baixo |
| Baixa | Baixo Impacto ou Esforço Alto (> 8h) |

---

## Atribuição — Padrões para Relatórios de Cliente

### Janelas de Conversão por Plataforma

| Plataforma | Padrão | Recomendado para relatório |
|-----------|--------|--------------------------|
| Google Ads | 30 dias clique + 1 dia view | 30 dias clique (desabilitar view-through) |
| Meta Ads | 7 dias clique + 1 dia view | 7 dias clique apenas (sem view-through) |

> **Regra de ouro:** Sempre informar o modelo de atribuição e a janela usada no relatório. Mudanças de modelo devem ser sinalizadas como "descontinuidade de dados".

### Dupla Contagem (Multi-Plataforma)
Quando Google Ads + Meta Ads estão ativos, o mesmo lead pode ser atribuído a ambas as plataformas. Estimativa típica de sobreposição: 15-35%. Sempre incluir aviso de dupla contagem no relatório.

---

## Flags de Alerta Automático

Qualquer uma destas situações deve ser sinalizada como prioridade no relatório:

| # | Sinal | Threshold | Ação |
|---|-------|-----------|------|
| 1 | Campanha fantasma | Gasto > R$200, 0 conversões | Verificar rastreamento / pausar |
| 2 | CPA muito acima da média | CPA > 3x a média da conta | Revisar urgente |
| 3 | Fadiga de audiência (Meta) | Frequência > 4x em qualquer campanha | Renovar criativos |
| 4 | ROAS crítico | ROAS < 1.5x em campanha com volume relevante | Pausar imediatamente |
| 5 | Queda abrupta de CTR | CTR caiu > 35% sem mudança na conta | Verificar concorrência / sazonalidade |
| 6 | CPM em alta (Meta) | CPM subiu > 30% vs. período anterior | Verificar saturação de público / leilão |
| 7 | Sobreposição de campanhas | Keywords idênticas em múltiplas campanhas no Google | Consolidar / excluir por negativas |
