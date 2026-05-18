---
execution: subagent
agent: natan-noticias
inputFile: squads/conteudo-instagram/pipeline/data/research-focus.md
outputFile: squads/conteudo-instagram/output/news-ranking.md
model_tier: powerful
---

# Step 02: Pesquisar e Ranquear Pautas

## Context Loading

Load these files before executing:
- `squads/conteudo-instagram/pipeline/data/research-focus.md` — Tema e período definidos no checkpoint anterior
- `squads/conteudo-instagram/pipeline/data/research-brief.md` — Contexto da ATRAE, perfil das PMEs brasileiras, domínios de conhecimento

## Instructions

### Process

1. Leia `research-focus.md` para obter o tema específico e o período de busca da sessão de hoje
2. Execute 3-5 buscas na web combinando o tema com filtros focados em PMEs brasileiras. Use estes modelos:
   - "{tema} Meta Ads pequenas empresas 2026"
   - "{tema} Google Ads PME Brasil resultado"
   - "{tema} marketing digital pequeno negócio"
   - "{tema} tráfego pago agência digital Brasil"
   - "{tema} empreendedor negócio local {qualificador_tempo}"
3. Para cada resultado, avalie: É relevante para um dono de pequeno negócio no Brasil? Conecta-se a tráfego pago ou marketing digital para PMEs?
4. Selecione as 3-5 melhores pautas. Para cada uma, anote: título, fonte, URL, data, resumo (2-3 frases), "por que PMEs se importam" e "oportunidade de posicionamento para a ATRAE"
5. Pontue cada pauta (escala 1-15: 5 pontos para relevância PME + 5 para atualidade + 5 para posicionamento ATRAE) e ranqueie da maior para menor nota
6. Salve o ranking completo em `squads/conteudo-instagram/output/news-ranking.md`

## Output Format

```markdown
# Ranking de Pautas — [Tema]

**Data da pesquisa:** YYYY-MM-DD
**Foco:** [tema do research-focus.md]
**Período:** [período do research-focus.md]
**Queries usadas:**
- [query 1]
- [query 2]
- [query 3]

---

## Pauta #1 — Score: 14/15

**Título:** [Título da pauta]
**Fonte:** [Nome da fonte]
**URL:** [https://...]
**Data:** YYYY-MM-DD
**Resumo:** [2-3 frases descrevendo o conteúdo]
**Por que PMEs se importam:** [1 frase direta]
**Oportunidade para ATRAE:** [1 frase sobre como a ATRAE pode usar essa pauta]

---

## Pauta #2 — Score: 12/15
[mesmo formato]

---
[continuar para todas as 3-5 pautas]
```

## Output Example

```markdown
# Ranking de Pautas — Novidades Meta Ads 2026

**Data da pesquisa:** 2026-03-23
**Foco:** novidades Meta Ads para pequenas empresas
**Período:** Últimos 7 dias
**Queries usadas:**
- "Meta Ads novidades pequenas empresas 2026"
- "Advantage Plus PME Brasil resultado"
- "Meta anúncios automáticos pequeno negócio Brasil"

---

## Pauta #1 — Score: 14/15

**Título:** Meta lança Advantage+ simplificado para negócios locais com setup em 10 minutos
**Fonte:** Meta for Business Blog
**URL:** https://www.facebook.com/business/news/
**Data:** 2026-03-18
**Resumo:** O Meta anunciou versão simplificada do Advantage+ para pequenas empresas com menos de 10 funcionários. A nova versão permite configuração completa em 10 minutos e usa IA para otimizar público, criativo e lances automaticamente com base no histórico de conversões.
**Por que PMEs se importam:** Permite rodar campanhas profissionais sem equipe especializada — reduz barreira de entrada e tempo de gestão semanal.
**Oportunidade para ATRAE:** Posicionar a agência como quem potencializa a ferramenta automática com estratégia — "a IA faz o básico, nós fazemos o que a IA não consegue".

---

## Pauta #2 — Score: 11/15

**Título:** Pesquisa: 68% das PMEs que usaram tráfego pago em 2025 mantiveram o investimento
**Fonte:** Sebrae Digital
**URL:** https://www.sebrae.com.br/
**Data:** 2026-03-15
**Resumo:** Levantamento com 2.400 micro e pequenas empresas mostra que 68% que começaram tráfego pago em 2025 mantiveram ou aumentaram o investimento no ano seguinte. Principal motivo citado: "resultado mensurável" (74% dos respondentes). Setores com maior adesão: saúde/beleza e alimentação.
**Por que PMEs se importam:** Prova social de que tráfego pago funciona para negócios do mesmo porte — dado concreto para quebrar objeção "não sei se funciona pra mim".
**Oportunidade para ATRAE:** Base factual para carrossel que converte donos de negócio em dúvida sobre começar a investir.

---

## Pauta #3 — Score: 9/15

**Título:** Google Maps Ads: como negócios físicos estão usando anúncios geolocalizados para atrair clientes
**Fonte:** Think with Google Brasil
**URL:** https://www.thinkwithgoogle.com/intl/pt-br/
**Data:** 2026-03-10
**Resumo:** Série de casos mostra como restaurantes, clínicas e lojas físicas estão usando campanhas no Google Maps para aparecer para usuários próximos com intenção de visita. CPC médio 30% abaixo de campanhas de busca tradicionais para negócios locais.
**Por que PMEs se importam:** Negócios físicos que dependem de clientes de proximidade têm canal direto com alta intenção — custo menor que busca e menos concorrência.
**Oportunidade para ATRAE:** Diferencial de expertise em Google Ads local — tema que poucos sabem explorar.
```

## Veto Conditions

Reject and redo if ANY are true:
1. Qualquer pauta é fabricada ou não pode ser verificada — se URL não for confiável, marcar como "URL não verificada" em vez de inventar
2. Todas as pautas são sobre grandes empresas sem aplicação clara para PMEs brasileiras

## Quality Criteria

- [ ] 3-5 pautas ranqueadas com informações completas (título, fonte, URL, data, resumo, relevância PME, posicionamento ATRAE)
- [ ] Pautas ranqueadas da maior para menor nota com justificativa de pontuação
- [ ] Pelo menos 2 pautas são especificamente sobre tráfego pago, Meta Ads ou Google Ads
- [ ] Nenhuma fonte inventada — URLs incertas marcadas como "não verificada"
