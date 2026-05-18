---
task: "Find and Rank Marketing News for PMEs"
order: 1
input: |
  - research_focus: Tema e período de busca (de pipeline/data/research-focus.md)
  - company_context: ATRAE — agência de tráfego pago para PMEs (do contexto do squad)
output: |
  - news_ranking: Lista ranqueada de 3-5 pautas com fonte, data, resumo, relevância PME e oportunidade ATRAE
  - saved_to: squads/conteudo-instagram/output/news-ranking.md
---

# Find and Rank Marketing News for PMEs

Esta tarefa pesquisa o tema definido no checkpoint de foco, coleta as pautas mais relevantes de marketing digital para PMEs brasileiras e as ranqueia por relevância para a ATRAE e seu público-alvo.

## Process

1. Leia `squads/conteudo-instagram/pipeline/data/research-focus.md` para obter o tema específico e o período de busca
2. Execute 3-5 buscas na web usando estes modelos de query:
   - "{tema} Meta Ads PME Brasil {ano}"
   - "{tema} Google Ads pequenas empresas resultado"
   - "{tema} marketing digital negócio local brasileiro"
   - "{tema} tráfego pago agência resultado PME"
   - "{tema} empreendedor {qualificador_tempo: 'esta semana' | 'este mês' | 'em 2026'}"
3. Avalie cada resultado encontrado: É relevante para um dono de pequeno negócio no Brasil? Conecta-se a tráfego pago ou marketing digital para PMEs? Tem data e fonte verificável?
4. Selecione as 3-5 melhores pautas. Para cada uma, registre: título, fonte, URL, data, resumo (2-3 frases), "por que PMEs se importam" (1 frase), "oportunidade para ATRAE" (1 frase)
5. Pontue cada pauta de 1-15 (5 pts relevância PME + 5 pts atualidade + 5 pts posicionamento ATRAE) e ranqueie da maior para menor
6. Salve o ranking completo em `squads/conteudo-instagram/output/news-ranking.md`

## Output Format

```yaml
research_topic: "string"
time_range: "string"
search_queries_used:
  - "query 1"
  - "query 2"
stories:
  - rank: 1
    title: "Título da pauta"
    source: "Nome da fonte"
    url: "https://..."
    date: "YYYY-MM-DD"
    summary: "Resumo em 2-3 frases"
    relevance_for_pme: "Por que PMEs se importam — 1 frase"
    positioning_for_atrae: "Como ATRAE se posiciona com essa pauta — 1 frase"
    score: 14/15
  - rank: 2
    ...
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```
# Ranking de Pautas — Novidades Meta Ads 2026

**Data da pesquisa:** 2026-03-23
**Foco:** novidades Meta Ads para pequenas empresas
**Período:** Últimos 7 dias
**Queries usadas:**
- "Meta Ads novidades PME Brasil 2026"
- "Advantage Plus pequenos negócios resultado"
- "Meta anúncios automáticos negócio local brasileiro"

---

## Pauta #1 — Score: 14/15

**Título:** Meta lança Advantage+ simplificado com setup em 10 minutos para negócios locais
**Fonte:** Meta for Business
**URL:** https://www.facebook.com/business/news/ (URL não verificada — conteúdo encontrado via busca)
**Data:** 2026-03-18
**Resumo:** Meta anunciou versão simplificada do Advantage+ para empresas com menos de 10 funcionários. A configuração leva 10 minutos e a IA otimiza público, criativo e lances automaticamente com base no histórico de conversões do Pixel.
**Por que PMEs se importam:** Permite rodar campanhas com eficiência profissional sem precisar de equipe técnica especializada — reduz tempo semanal de gestão de horas para minutos.
**Oportunidade para ATRAE:** Posicionar a agência como quem potencializa a ferramenta automatizada com estratégia — "a IA faz o básico, nós entregamos o resultado".
**Score:** 14/15 (PME: 5 — direto relevante | Atualidade: 5 — lançamento recente | ATRAE: 4 — bom para autoridade mas não cria urgência de contratar)

---

## Pauta #2 — Score: 11/15

**Título:** Pesquisa Sebrae: 68% das micro e pequenas empresas que investiram em tráfego pago em 2025 mantiveram o investimento
**Fonte:** Sebrae Digital
**URL:** https://www.sebrae.com.br/ (verificar publicação específica na seção de pesquisas)
**Data:** 2026-03-10
**Resumo:** Levantamento com 2.400 MPEs mostra 68% de taxa de retenção de investimento em tráfego pago após 1 ano. Motivo principal: "resultado mensurável" (74%). Setores com maior adesão: saúde/beleza (34%) e alimentação (28%).
**Por que PMEs se importam:** Prova social do mesmo porte — se negócios como o deles estão renovando, é porque está funcionando. Quebra objeção "não sei se funciona para mim".
**Oportunidade para ATRAE:** Base factual para conteúdo que converte donos de negócio em dúvida sobre iniciar investimento em ads.
**Score:** 11/15 (PME: 5 — prova social direta | Atualidade: 3 — dado de 2025 mas publicado agora | ATRAE: 3 — boa base mas menos urgência)
```

## Quality Criteria

- [ ] Mínimo 3 e máximo 5 pautas no output
- [ ] Cada pauta tem título, fonte, URL, data, resumo, relevância PME e posicionamento ATRAE
- [ ] URLs incertas marcadas como "URL não verificada" — nunca inventar endereços
- [ ] Pautas ranqueadas com score numérico explícito
- [ ] Pelo menos 2 pautas sobre tráfego pago, Meta Ads ou Google Ads especificamente

## Veto Conditions

Reject and redo if ANY are true:
1. Qualquer pauta é fabricada ou não pode ser verificada por nenhuma busca — marcar URLs incertas em vez de inventar
2. Todas as pautas são sobre grandes empresas multinacionais sem aplicação para PMEs brasileiras
