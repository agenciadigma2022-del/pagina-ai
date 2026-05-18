---
execution: subagent
agent: rosa-rss
inputFile: squads/rss-instagram/pipeline/data/rss-feeds.md
outputFile: squads/rss-instagram/output/rss-articles.md
model_tier: powerful
---

# Step 01: Rosa RSS — Monitoramento de Feeds

## Context Loading

Carregue estes arquivos antes de executar:
- `squads/rss-instagram/pipeline/data/rss-feeds.md` — Lista de feeds RSS configurados e critérios de filtragem
- `squads/rss-instagram/pipeline/data/rss-history.md` — Histórico de artigos já processados (deduplicação)
- `squads/rss-instagram/pipeline/data/research-brief.md` — Contexto da ATRAE e perfil do público PME

## Instructions

### Process

1. Acesse cada feed RSS listado em `rss-feeds.md` usando `web_fetch` e extraia os artigos disponíveis (título, URL, data, excerpt)
2. Aplique os critérios de filtragem definidos em rss-feeds.md: relevância PME + marketing digital, descarte artigos mais antigos que 30 dias
3. Deduplique: remova qualquer artigo cujo título ou URL já apareça em `rss-history.md`
4. Pontue cada artigo novo que passou nos filtros (0-15) nos 3 critérios: relevância PME, atualidade, posicionamento ATRAE
5. Inclua no ranking apenas artigos com score ≥ 8/15, limitado a no máximo 5
6. Salve o ranking em `squads/rss-instagram/output/rss-articles.md`
7. Atualize `squads/rss-instagram/pipeline/data/rss-history.md` adicionando todos os artigos do ranking com status "apresentado" e a data de hoje
8. Se nenhum artigo novo atingir o threshold: informe no output que não há novidades relevantes no momento

## Output Format

```
# Artigos RSS Novos — {data}

**Execução:** {data}
**Feeds verificados:** N/N
**Feeds com falha:** N ({motivo})
**Artigos encontrados:** N
**Filtrados por irrelevância:** N
**Deduplicados (já vistos):** N
**Artigos no ranking:** N

---

## Artigo #N — Score: N/15

**Título:** ...
**Fonte:** ...
**URL:** ...
**Publicado:** YYYY-MM-DD (N dias atrás)
**Resumo:** 2-3 frases sobre o conteúdo
**Por que PMEs se importam:** 1 frase direta
**Posicionamento ATRAE:** 1 frase de oportunidade
**Score:** N/15 (PME: N | Atualidade: N | ATRAE: N)

---
[Repetir para cada artigo no ranking]
```

## Output Example

```
# Artigos RSS Novos — 2026-05-17

**Execução:** 2026-05-17
**Feeds verificados:** 10/10
**Feeds com falha:** 0
**Artigos encontrados:** 28
**Filtrados por irrelevância:** 17
**Deduplicados (já vistos):** 6
**Artigos no ranking:** 3

---

## Artigo #1 — Score: 13/15

**Título:** Meta Advantage+ amplia testes de criativos para negócios locais
**Fonte:** Resultados Digitais
**URL:** https://resultadosdigitais.com.br/blog/meta-advantage-criativos-2026
**Publicado:** 2026-05-15 (2 dias atrás)
**Resumo:** Meta anunciou novo limite de 150 variações de criativo em campanhas Advantage+. Beta com 500 contas mostrou redução média de 27% no custo por resultado.
**Por que PMEs se importam:** Pequenas empresas podem testar mais criativos sem investimento adicional — IA escolhe o melhor automaticamente.
**Posicionamento ATRAE:** "A IA testa os criativos. A ATRAE define a estratégia que faz a IA funcionar melhor."
**Score:** 13/15 (PME: 4 | Atualidade: 5 | ATRAE: 4)

---

## Artigo #2 — Score: 10/15

**Título:** Google Ads: extensão automática de localização agora inclui horários de funcionamento
**Fonte:** Mundo do Marketing
**URL:** https://mundodomarketing.com.br/google-ads-localizacao-automatica
**Publicado:** 2026-05-12 (5 dias atrás)
**Resumo:** Atualização no Google Ads passa a exibir horários de funcionamento diretamente nos anúncios de busca para empresas locais, sem configuração manual.
**Por que PMEs se importam:** Restaurantes, clínicas e lojas físicas mostram horários no anúncio sem precisar configurar — reduz trabalho e aumenta CTR local.
**Posicionamento ATRAE:** Oportunidade de post educativo mostrando como atualizar o Google Meu Negócio para aproveitar o recurso.
**Score:** 10/15 (PME: 5 | Atualidade: 3 | ATRAE: 2)
```

## Veto Conditions

Reject and redo if ANY are true:
1. Artigo com score < 8/15 incluído no ranking — threshold mínimo é não-negociável
2. rss-history.md não foi atualizado após a execução — deduplicação futura será comprometida

## Quality Criteria

- [ ] Todos os feeds verificados (ou falha documentada por feed)
- [ ] Deduplicação executada explicitamente
- [ ] Score explícito nos 3 critérios para cada artigo
- [ ] rss-history.md atualizado
- [ ] Output salvo em squads/rss-instagram/output/rss-articles.md
