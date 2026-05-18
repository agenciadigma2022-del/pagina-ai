---
task: "Research Deep Context on Selected Article"
order: 1
input: |
  - selected_article: Artigo escolhido pelo usuário (de pipeline/data/selected-article.md)
  - rss_articles: Ranking completo com resumos (de output/rss-articles.md)
  - research_brief: Contexto da ATRAE e perfil PME (de pipeline/data/research-brief.md)
output: |
  - article_context: Contexto aprofundado com dados, cases e pontos de ângulo
  - saved_to: squads/rss-instagram/output/article-context.md
---

# Research Deep Context on Selected Article

Esta tarefa pega o artigo selecionado pelo usuário e pesquisa contexto aprofundado
para enriquecê-lo: dados complementares, estatísticas do setor, cases de PMEs
brasileiras, e pontos que alimentam cada um dos 5 drivers de ângulo do Carlos Carrossel.

## Process

1. Leia `squads/rss-instagram/pipeline/data/selected-article.md` para identificar o artigo selecionado, sua URL, fonte e resumo
2. Acesse a URL original do artigo com `web_fetch` para ler o conteúdo completo (além do excerpt do RSS)
3. Execute 3-5 buscas de contexto complementar:
   - "{tema do artigo} dados PME Brasil {ano}"
   - "{tema do artigo} impacto pequenas empresas resultado"
   - "{tema do artigo} case sucesso negócio local brasileiro"
   - "{tema do artigo} Sebrae estatística" ou "{tema} SEBRAE pesquisa"
   - "{tema do artigo} especialista opinião marketing digital Brasil"
4. Para cada dado relevante encontrado: registrar o dado, fonte, URL e como se aplica para PMEs
5. Mapeie os pontos de ângulo: para cada dado/informação, identifique qual dos 5 drivers (Medo, Oportunidade, Educacional, Contrário, Inspiracional) ele melhor alimenta
6. Salve o contexto completo em `squads/rss-instagram/output/article-context.md`

## Output Format

```yaml
article_selected:
  title: "Título do artigo"
  source: "Fonte"
  url: "https://..."
  published_date: "YYYY-MM-DD"

full_content_summary: |
  Resumo do conteúdo completo do artigo original (após ler via web_fetch)

complementary_data:
  - data: "Dado quantitativo ou qualitativo"
    source: "Fonte"
    url: "https://... (ou 'verificar')"
    date: "YYYY-MM-DD"
    pme_application: "Como se aplica para PME brasileira"
    angle_driver: "Medo | Oportunidade | Educacional | Contrário | Inspiracional"
  - ...

angle_seeds:
  medo: "Dado ou ângulo que gera urgência/risco para PME"
  oportunidade: "Dado ou ângulo que gera esperança/janela de ação"
  educacional: "Passo a passo ou explicação que o PME pode aplicar"
  contrario: "Ponto de tensão ou mito que pode ser questionado"
  inspiracional: "Case ou história de sucesso de PME com o tema"

sources_summary: "N dados de M fontes diferentes. N% com URL verificada."
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```
# Contexto Aprofundado — Meta Ads: novo limite de criativos Advantage+

**Artigo:** Meta Ads aumenta limite de criativos por campanha para negócios locais
**Fonte:** Resultados Digitais | **Publicado:** 2026-05-15
**URL:** https://resultadosdigitais.com.br/blog/meta-ads-limite-criativos-2026

---

## Conteúdo Completo (via web_fetch)

Meta anunciou que campanhas Advantage+ agora suportam até 150 variações de criativo simultâneas, ante 50 anteriores. O update foi confirmado via Meta for Business. Objetivo: permitir que a IA teste mais variações e encontre o criativo ideal com mais velocidade. Benefício declarado pela Meta: redução de 30% no CPR (custo por resultado) em beta com ~500 contas testadas globalmente, incluindo negócios com menos de 50 funcionários.

---

## Dados Complementares

**Dado 1:**
- Data: 2026-05-15 | Fonte: Meta for Business Blog
- Dado: "Contas que testaram o novo limite com 100+ criativos viram CPR (custo por resultado) cair em média 27% versus campanha com 30 criativos"
- Aplicação PME: Negócio que vende múltiplos produtos (linha de beleza, cardápio diversificado) pode testar mais fotos/vídeos sem custo adicional de mídia
- Driver: 🟢 Oportunidade

**Dado 2:**
- Data: 2025-11-03 | Fonte: Sebrae Digital
- Dado: "68% das PMEs brasileiras usam menos de 10 variações de criativo por campanha — principal razão: 'não sei quais criativas usar' (54%)"
- Aplicação PME: Maioria das PMEs usa pouquíssimas variações e não sabe qual funciona; o novo limite com IA resolve exatamente esse ponto
- Driver: 📚 Educacional / 🔴 Medo

**Dado 3:**
- Data: 2026-04-20 | Fonte: Rockcontent
- Dado: "Custo médio de produção de 1 criativo profissional para PME: R$ 150-400. Com IA de variação, mesma foto vira 10+ versões sem custo adicional."
- Aplicação PME: Argumento financeiro concreto — não é necessário contratar fotógrafo para cada variação
- Driver: 🟢 Oportunidade

**Dado 4:**
- Fonte: Meta Ads Manager (observação de prática de mercado)
- Dado: "Campanhas com mais de 50 criativos em Advantage+ têm fase de aprendizado 40% mais curta versus campanhas com 10 criativos"
- Aplicação PME: PME que quiser resultados mais rápidos com menos período de "queimar orçamento" em aprendizado
- Driver: 📚 Educacional

---

## Pontos de Ângulo por Driver

**🔴 Medo:** "68% das PMEs usam menos de 10 criativos — e perdem 27% de performance comparado a quem testa 100+"
**🟢 Oportunidade:** "Meta nivelou o jogo: agora qualquer PME pode testar o que só marcas com grandes budgets de produção testavam"
**📚 Educacional:** "Como aproveitar o limite de 150 criativos sem contratar um estúdio — o que a IA faz com as suas fotos de produto"
**↔️ Contrário:** "Por que mais criativos não significa sempre melhor resultado — a armadilha do volume sem estratégia"
**⭐ Inspiracional:** "A loja de roupas que testou 80 fotos com R$ 30/dia e encontrou o criativo que reduziu custo por venda pela metade"

---

## Resumo de Fontes

5 dados de 4 fontes diferentes.
- 3/5 com URL verificada (Meta for Business, Sebrae, Rockcontent)
- 1/5 observação de prática de mercado (Meta Ads Manager)
- 1/5 dado de blog com URL do feed — verificar antes de citar
```

## Quality Criteria

- [ ] Artigo original lido via web_fetch (não apenas o excerpt do RSS)
- [ ] Mínimo 3 dados quantitativos encontrados e documentados
- [ ] Mínimo 1 dado ou case de PME brasileira (ou adaptável para PMEs locais)
- [ ] Pontos de ângulo mapeados para os 5 drivers (Medo, Oportunidade, Educacional, Contrário, Inspiracional)
- [ ] Fontes citadas com URL ou marcadas como "verificar" — nenhuma URL fabricada

## Veto Conditions

Reject and redo if ANY are true:
1. Menos de 3 dados quantitativos — carrossel sem dados concretos não gera credibilidade para a ATRAE
2. Nenhum dado com aplicabilidade explícita para PME brasileira — o público-alvo é o filtro mais importante
