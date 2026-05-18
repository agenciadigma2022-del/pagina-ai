---
execution: subagent
agent: natan-noticias
inputFile: squads/rss-instagram/pipeline/data/selected-article.md
outputFile: squads/rss-instagram/output/article-context.md
model_tier: powerful
---

# Step 03: Natan Notícias — Pesquisa de Contexto Aprofundado

## Context Loading

Carregue estes arquivos antes de executar:
- `squads/rss-instagram/pipeline/data/selected-article.md` — Artigo selecionado pelo usuário
- `squads/rss-instagram/output/rss-articles.md` — Ranking completo para contexto adicional
- `squads/rss-instagram/pipeline/data/research-brief.md` — Contexto ATRAE e perfil PME

## Instructions

### Process

1. Leia `selected-article.md` para identificar o artigo, URL e tema
2. Acesse a URL original do artigo com `web_fetch` e leia o conteúdo completo
3. Execute 3-5 buscas de contexto complementar relacionadas ao tema do artigo:
   - Dados quantitativos (percentuais, valores, taxas) sobre o impacto para PMEs
   - Cases de negócios locais brasileiros no mesmo tema
   - Dados do Sebrae, Meta for Business Brasil ou Google Brasil sobre o assunto
   - Perspectivas de especialistas brasileiros de marketing digital
4. Para cada dado relevante encontrado: registrar dado, fonte, URL e aplicação para PME
5. Mapear pontos de ângulo: identificar qual dos 5 drivers (Medo, Oportunidade, Educacional, Contrário, Inspiracional) cada dado melhor alimenta
6. Salvar contexto completo em `squads/rss-instagram/output/article-context.md`

## Output Format

```
# Contexto Aprofundado — {título do artigo}

**Artigo:** {título}
**Fonte:** {fonte} | **Publicado:** {data}
**URL:** {URL}

---

## Conteúdo Completo do Artigo (via web_fetch)

{resumo expandido do conteúdo completo lido via URL original}

---

## Dados Complementares Pesquisados

### Dado 1
- **Data:** YYYY-MM-DD | **Fonte:** {nome} | **URL:** {URL ou "verificar"}
- **Dado:** "{texto do dado}"
- **Aplicação para PME:** {como afeta o pequeno negócio}
- **Driver:** {Medo / Oportunidade / Educacional / Contrário / Inspiracional}

[Repetir para cada dado — mínimo 3 dados]

---

## Mapa de Ângulos

**🔴 Medo:** {dado ou insight que gera urgência/risco}
**🟢 Oportunidade:** {dado ou insight que gera esperança/janela de ação}
**📚 Educacional:** {passo a passo ou explicação aplicável}
**↔️ Contrário:** {tensão, mito ou ponto controverso}
**⭐ Inspiracional:** {case ou história de sucesso de PME}

---

**Resumo de fontes:** {N} dados de {M} fontes. {N} URLs verificadas.
```

## Output Example

```
# Contexto Aprofundado — Meta Advantage+: novo limite de 150 criativos

**Artigo:** Meta Ads amplia testes de criativos para negócios locais
**Fonte:** Resultados Digitais | **Publicado:** 2026-05-15
**URL:** https://resultadosdigitais.com.br/blog/meta-advantage-criativos-2026

---

## Conteúdo Completo do Artigo

Meta anunciou que campanhas Advantage+ agora suportam até 150 variações de criativo,
ante 50 anteriores. A IA testa automaticamente todas as combinações e prioriza as de
melhor desempenho. Em beta com ~500 contas globais (incluindo PMEs), redução média de 27%
no CPR (custo por resultado). A ferramenta está disponível globalmente a partir de 1º de junho.

---

## Dados Complementares

### Dado 1
- **Data:** 2025-11 | **Fonte:** Sebrae Digital | **URL:** sebrae.com.br (verificar publicação específica)
- **Dado:** "68% das PMEs brasileiras usam menos de 10 variações de criativo por campanha"
- **Aplicação para PME:** Maioria das PMEs está muito abaixo do que é possível testar — o novo limite com IA pode dobrar resultados sem custo adicional de produção
- **Driver:** 🔴 Medo / 📚 Educacional

### Dado 2
- **Data:** 2026-03 | **Fonte:** Meta for Business Blog | **URL:** https://www.facebook.com/business/news
- **Dado:** "Fase de aprendizado 40% mais curta em campanhas com 50+ criativos vs 10 criativos"
- **Aplicação para PME:** PME que investe R$ 30/dia "queima" menos orçamento em aprendizado antes de ver resultado
- **Driver:** 🟢 Oportunidade

### Dado 3
- **Data:** 2026-04 | **Fonte:** Rockcontent | **URL:** rockcontent.com/br/blog (verificar URL exata)
- **Dado:** "Produção de 1 criativo profissional para PME: R$ 150-400. Variações com IA: R$ 0 adicional"
- **Aplicação para PME:** Argumento financeiro concreto — mais variedade sem contratar estúdio
- **Driver:** 🟢 Oportunidade / 📚 Educacional

---

## Mapa de Ângulos

**🔴 Medo:** "68% das PMEs testam menos de 10 criativos — e perdem 27% de performance vs quem usa 100+"
**🟢 Oportunidade:** "Agora sua padaria pode testar o que só a Cacau Show testava — sem custo extra"
**📚 Educacional:** "Como usar o novo limite de 150 criativos sem contratar fotógrafo: o que a IA faz com suas fotos de produto"
**↔️ Contrário:** "Mais criativos não é sempre melhor — a armadilha do volume sem estratégia no Advantage+"
**⭐ Inspiracional:** "O restaurante que testou 80 fotos de prato e reduziu custo por pedido em 34% em 3 semanas"

---

**Resumo de fontes:** 3 dados de 3 fontes. 1/3 URL verificada, 2/3 marcadas para verificação.
```

## Veto Conditions

Reject and redo if ANY are true:
1. Menos de 3 dados quantitativos encontrados e documentados
2. Nenhum dado com aplicabilidade explícita e concreta para PME brasileira

## Quality Criteria

- [ ] Artigo original lido via web_fetch (conteúdo completo, não apenas excerpt)
- [ ] Mínimo 3 dados quantitativos documentados com fonte e data
- [ ] Mapa de ângulos preenchido para os 5 drivers
- [ ] Nenhuma URL fabricada — URLs incertas marcadas como "verificar"
- [ ] Output salvo em squads/rss-instagram/output/article-context.md
