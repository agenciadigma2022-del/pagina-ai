---
execution: inline
agent: andre-analise
inputFile: squads/relatorio-ads/output/{run_id}/raw-data.md
outputFile: squads/relatorio-ads/output/{run_id}/relatorio-cliente.md
model_tier: powerful
---

# Step 04: Análise de Performance e Geração do Relatório

## Context Loading

Antes de executar, leia:
- `squads/relatorio-ads/output/{run_id}/raw-data.md` — dados brutos coletados pelo Fábio
- `squads/relatorio-ads/pipeline/data/report-config.md` — configurações do relatório (cliente, período)
- `squads/relatorio-ads/pipeline/data/domain-framework.md` — framework de análise e benchmarks do setor
- `squads/relatorio-ads/pipeline/data/quality-criteria.md` — critérios de qualidade do relatório
- `squads/relatorio-ads/pipeline/data/output-examples.md` — exemplos de relatórios de referência
- `squads/relatorio-ads/pipeline/data/anti-patterns.md` — erros a evitar na análise
- `_opensquad/_memory/company.md` — perfil da ATRAE (tom de voz consultivo e educativo)

## Instructions

### Process

1. **Leia todos os arquivos de contexto** antes de iniciar a análise
2. **Extraia os totais e campanhas** do `raw-data.md` para cada plataforma disponível
3. **Compare com benchmarks do setor** (conforme `domain-framework.md`):
   - CTR Search Google Ads benchmark: 2-5%
   - CTR Display Google Ads benchmark: 0.2-0.5%
   - CTR Meta Ads Feed benchmark: 0.5-2%
   - CPC Google Ads benchmark médio: varia por setor
   - CPM Meta Ads benchmark: R$ 15-35
   - Taxa de conversão benchmark: 2-5% (Search), 1-3% (Meta)
   - ROAS benchmark mínimo aceitável: 2x | bom: 3-5x | excelente: 5x+
4. **Classifique cada métrica** como: ✅ Acima do benchmark | ⚠️ Dentro do benchmark | 🔴 Abaixo do benchmark
5. **Identifique as top 3 e bottom 3 campanhas** por custo e por conversões
6. **Sintetize 3-4 insights** seguindo o formato: O que aconteceu → Por que importa → O que sugere
7. **Gere 2-3 recomendações** priorizadas (Ação → Impacto Esperado → Nível de Esforço → Prioridade)
8. **Escreva o relatório** em tom consultivo e educativo, seguindo o tom de voz da ATRAE
9. **Salve em** `squads/relatorio-ads/output/{run_id}/relatorio-cliente.md`

### Tom de Voz

O relatório deve refletir o estilo da ATRAE: **consultivo e educativo**. Explica, ensina e orienta o cliente, ajudando-o a entender as estratégias e os resultados. Evite linguagem técnica excessiva — use analogias e linguagem acessível para donos de PMEs.

## Output Format

```markdown
# Relatório de Performance — {client_name}
**Período:** {date_from} a {date_to}
**Elaborado por:** ATRAE — Agência de Tráfego Pago
**Data do relatório:** {today}

---

## Resumo Executivo

- **{insight principal com número específico}** — {implicação para o negócio do cliente em 1 frase}
- **{segundo ponto mais importante}** — {implicação}
- **Recomendação prioritária:** {ação específica com impacto esperado}

---

## Performance Google Ads

### Visão Geral do Período

| Métrica | Resultado | Benchmark do Setor | Status |
|---------|-----------|-------------------|--------|
| Investimento Total | R$ {x} | — | — |
| Impressões | {x} | — | — |
| Cliques | {x} | — | — |
| CTR Médio | {x}% | 2-5% (Search) | ✅ / ⚠️ / 🔴 |
| CPC Médio | R$ {x} | — | ✅ / ⚠️ / 🔴 |
| Conversões | {x} | — | — |
| CPA Médio | R$ {x} | — | ✅ / ⚠️ / 🔴 |
| ROAS | {x}x | ≥ 3x | ✅ / ⚠️ / 🔴 |

### Melhores Campanhas

| Campanha | Custo | Conv. | CPA | ROAS |
|----------|-------|-------|-----|------|
| {nome} | R$ {x} | {x} | R$ {x} | {x}x |

### Campanhas para Atenção

| Campanha | Custo | Conv. | CPA | Problema identificado |
|----------|-------|-------|-----|-----------------------|
| {nome} | R$ {x} | {x} | R$ {x} | {ex: CTR abaixo do benchmark} |

---

## Performance Meta Ads

### Visão Geral do Período

| Métrica | Resultado | Benchmark do Setor | Status |
|---------|-----------|-------------------|--------|
| Investimento Total | R$ {x} | — | — |
| Alcance | {x} pessoas | — | — |
| Frequência Média | {x}x | 1.5-3x | ✅ / ⚠️ / 🔴 |
| CTR Médio | {x}% | 0.5-2% | ✅ / ⚠️ / 🔴 |
| CPC Médio | R$ {x} | — | ✅ / ⚠️ / 🔴 |
| CPM Médio | R$ {x} | R$ 15-35 | ✅ / ⚠️ / 🔴 |
| Conversões | {x} | — | — |
| CPA Médio | R$ {x} | — | ✅ / ⚠️ / 🔴 |
| ROAS | {x}x | ≥ 3x | ✅ / ⚠️ / 🔴 |

[tabelas de campanhas analogamente ao Google Ads]

---

## Insights

### 1. {Título do insight}

{O que aconteceu em termos de dados concretos}. Isso significa que {implicação para o negócio do cliente}. {O que isso sugere fazer}. *(Confiança: Alta/Média/Baixa — {justificativa})*

### 2. {Título do insight}

[mesma estrutura]

### 3. {Título do insight}

[mesma estrutura]

---

## Recomendações

### 1. {Ação específica} — Prioridade: Alta | Esforço: Baixo/Médio/Alto

{Justificativa baseada nos dados}. **Impacto esperado:** {resultado quantificado quando possível}.

### 2. {Ação específica} — Prioridade: Média | Esforço: {x}

[mesma estrutura]

---

## Sobre Esta Análise

- **Período:** {date_from} a {date_to}
- **Fontes:** Google Ads API (principal), Meta Marketing API (principal)
- **Benchmarks:** Médias do setor para PMEs brasileiras ({setor do cliente})
- **Gerado por:** Squad de Relatório de Ads — ATRAE
```

## Veto Conditions

Rejeitar e pedir revisão se:
1. Qualquer insight apresentar número sem comparação com benchmark ou período anterior
2. Qualquer recomendação for vaga (ex: "melhorar o anúncio") sem especificar o quê, quanto e como
3. O resumo executivo não contiver pelo menos um número concreto com implicação para o negócio
4. Métricas apresentadas sem o campo "Status" de classificação (✅/⚠️/🔴)

## Quality Criteria

- [ ] Resumo executivo com exatamente 3 bullet points, sendo o 3º uma recomendação prioritária
- [ ] Toda métrica na tabela tem comparação com benchmark e status classificado
- [ ] 3-4 insights com estrutura: dado concreto → "Isso significa que..." → sugestão direcional
- [ ] 2-3 recomendações ordenadas por prioridade, cada uma com ação específica e impacto esperado
- [ ] Tom de voz consultivo e educativo (acessível para dono de PME, não para especialista em ads)
- [ ] Nenhum qualificador vago ("significativo", "muito bom", "problemático")
- [ ] Seção de metodologia presente no final
