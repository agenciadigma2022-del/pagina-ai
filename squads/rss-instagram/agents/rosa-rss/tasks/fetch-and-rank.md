---
task: "Fetch RSS Feeds and Rank New Marketing Articles"
order: 1
input: |
  - rss_feeds: Lista de URLs dos feeds RSS (de pipeline/data/rss-feeds.md)
  - rss_history: Histórico de artigos já processados (de pipeline/data/rss-history.md)
output: |
  - rss_articles: Ranking curado de artigos novos e relevantes
  - saved_to: squads/rss-instagram/output/rss-articles.md
  - history_updated: pipeline/data/rss-history.md atualizado com artigos apresentados
---

# Fetch RSS Feeds and Rank New Marketing Articles

Esta tarefa acessa os feeds RSS configurados, coleta artigos das últimas 4 semanas,
aplica filtros de relevância PME + marketing digital, deduplica contra o histórico,
pontua e ranqueia os artigos novos, e salva o resultado para o checkpoint de seleção.

## Process

1. Leia `squads/rss-instagram/pipeline/data/rss-feeds.md` para obter a lista de feeds e critérios de filtragem
2. Leia `squads/rss-instagram/pipeline/data/rss-history.md` para carregar o histórico de deduplicação
3. Para cada feed na lista, use `web_fetch` para acessar a URL do feed e extrair os artigos:
   - Título, URL, data de publicação, resumo/excerpt
   - Se o feed não responder: registrar como "falhou — {motivo}" e continuar para o próximo
4. Aplique os filtros de relevância (conforme critérios em rss-feeds.md):
   - Verificar data: artigos mais antigos que 30 dias são descartados automaticamente
   - Filtrar por palavras-chave: Meta Ads, Google Ads, tráfego pago, PME, marketing digital, etc.
   - Excluir artigos de política, esporte, entretenimento sem conexão com marketing/ads
5. Deduplique: compare título e URL de cada artigo que passou nos filtros contra rss-history.md. Artigos já listados no histórico são removidos.
6. Pontue cada artigo novo (0-15):
   - Relevância PME (0-5): aplica para dono de negócio local brasileiro?
   - Atualidade (0-5): <7 dias = 5pts | 7-14 dias = 3pts | 15-30 dias = 1pt
   - Posicionamento ATRAE (0-5): pode posicionar a ATRAE como autoridade em tráfego pago para PMEs?
7. Descarte artigos com score < 8/15. Selecione até 5 artigos com maior score.
8. Salve o ranking em `squads/rss-instagram/output/rss-articles.md`
9. Atualize `squads/rss-instagram/pipeline/data/rss-history.md` adicionando todos os artigos do ranking (mesmo os que o usuário não selecionará), com status "apresentado" e data de hoje.
10. Se nenhum artigo passar nos filtros e threshold: salve um output informando isso claramente, sem forçar artigos abaixo do threshold.

## Output Format

```yaml
run_date: "YYYY-MM-DD"
feeds_checked: N
feeds_failed: 0
articles_found: N
articles_filtered_out: N
articles_deduplicated: N
articles_in_ranking: N

articles:
  - rank: 1
    title: "Título do artigo"
    source: "Nome da fonte"
    url: "https://..."
    published_date: "YYYY-MM-DD"
    excerpt: "Resumo em 2-3 frases"
    relevance_for_pme: "Por que PMEs se importam — 1 frase"
    positioning_for_atrae: "Como ATRAE se posiciona — 1 frase"
    score: "12/15"
    score_breakdown:
      pme_relevance: 4
      recency: 5
      atrae_positioning: 3
  - rank: 2
    ...
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```
# Artigos RSS Novos — 2026-05-17

**Execução:** 2026-05-17
**Feeds verificados:** 10/10
**Feeds com falha:** 1 (thinkwithgoogle.com — timeout)
**Artigos encontrados:** 34
**Filtrados por irrelevância:** 19
**Deduplicados (já vistos):** 8
**Artigos no ranking:** 3

---

## Artigo #1 — Score: 13/15

**Título:** Meta Ads aumenta limite de criativos por campanha para negócios locais
**Fonte:** Resultados Digitais
**URL:** https://resultadosdigitais.com.br/blog/meta-ads-limite-criativos-2026
**Publicado:** 2026-05-15 (2 dias atrás)
**Resumo:** Meta anunciou aumento do limite de variações de criativo em campanhas Advantage+ para até 150 imagens e vídeos simultâneos. A atualização beneficia especialmente negócios com produtos sazonais ou múltiplos produtos, que podem testar mais variações sem custo adicional.
**Por que PMEs se importam:** Pequenas empresas que vendem produtos variados (roupas, alimentos, beleza) agora podem testar mais criativos sem aumentar investimento — reduz o custo de encontrar o criativo vencedor.
**Posicionamento ATRAE:** Posicionar a agência como quem sabe aproveitar o novo limite para maximizar ROAS — "mais dados de teste = decisões mais inteligentes".
**Score:** 13/15
  - Relevância PME: 4/5 — direto aplicável, especialmente e-commerce e produtos físicos
  - Atualidade: 5/5 — publicado há 2 dias
  - Posicionamento ATRAE: 4/5 — tema onde expertise da agência agrega valor real

---

## Artigo #2 — Score: 11/15

**Título:** Google Ads lança extensão automática de localização para negócios físicos
**Fonte:** Search Engine Journal (via RSS Brasil)
**URL:** https://searchenginejournal.com/google-ads-local-extension-2026 (URL do feed — verificar antes de citar)
**Publicado:** 2026-05-12 (5 dias atrás)
**Resumo:** Google Ads passa a exibir automaticamente localização, horário de funcionamento e avaliações do Google Meu Negócio em anúncios de busca para negócios físicos, sem configuração manual.
**Por que PMEs se importam:** Restaurantes, clínicas e lojas físicas ganham visibilidade de endereço e horário nos anúncios sem precisar configurar manualmente — reduz trabalho técnico e melhora CTR local.
**Posicionamento ATRAE:** Tema perfeito para mostrar que a agência está atualizada com mudanças do Google que impactam diretamente clientes de negócios locais.
**Score:** 11/15
  - Relevância PME: 5/5 — extremamente relevante para negócios físicos com localização
  - Atualidade: 4/5 — publicado há 5 dias (ainda recente)
  - Posicionamento ATRAE: 2/5 — vantagem competitiva menor pois update é automático

---

## Artigo #3 — Score: 9/15

**Título:** Pesquisa: 71% dos empreendedores brasileiros não medem ROI das campanhas de anúncios
**Fonte:** Mundo do Marketing
**URL:** https://mundodomarketing.com.br/roi-empreendedores-2026
**Publicado:** 2026-05-10 (7 dias atrás)
**Resumo:** Levantamento com 1.800 micro e pequenas empresas mostra que 71% não acompanham retorno sobre investimento em anúncios pagos. Principal razão: "não sei como calcular" (58%). Segundo razão: "não tenho tempo" (29%).
**Por que PMEs se importam:** Dado que expõe problema real — maioria dos donos de negócio investe em ads sem saber se está funcionando. Valida a necessidade de gestão profissional.
**Posicionamento ATRAE:** Base factual para carrossel que posiciona a ATRAE como a solução para transformar investimento em ads de "custo" para "resultado mensurável".
**Score:** 9/15
  - Relevância PME: 5/5 — sobre o problema exato que os clientes da ATRAE têm
  - Atualidade: 3/5 — publicado há 7 dias
  - Posicionamento ATRAE: 1/5 — dado negativo que não posiciona diretamente a agência como solução sem reframing criativo

---

## Nenhum artigo com score inferior a 8/15 foi incluído.

**Artigos deduplicados excluídos:** Meta Business AI no WhatsApp (já processado em 2026-03-31), CPL subiu 27% (já processado em 2026-04-15), e outros 6 artigos.
```

## Quality Criteria

- [ ] Todos os feeds em rss-feeds.md foram acessados (ou falha documentada)
- [ ] Deduplicação executada explicitamente contra rss-history.md
- [ ] Apenas artigos com score ≥ 8/15 no ranking final
- [ ] Máximo de 5 artigos no ranking
- [ ] rss-history.md atualizado com os artigos apresentados
- [ ] Output salvo em squads/rss-instagram/output/rss-articles.md

## Veto Conditions

Reject and redo if ANY are true:
1. Artigo com score < 8/15 incluído no ranking — threshold mínimo é não-negociável
2. rss-history.md não foi verificado antes de montar o ranking — deduplicação é obrigatória
