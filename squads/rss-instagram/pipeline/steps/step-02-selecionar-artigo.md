---
type: checkpoint
outputFile: squads/rss-instagram/pipeline/data/selected-article.md
---

# Step 02: Checkpoint — Selecionar Artigo

## Contexto

Rosa RSS encontrou as novidades mais relevantes de marketing digital e tráfego pago
para PMEs brasileiras. Os artigos acima do threshold de relevância estão no ranking.

Leia `squads/rss-instagram/output/rss-articles.md` para ver os artigos disponíveis
e apresente o ranking ao usuário usando AskUserQuestion.

---

## Para o Pipeline Runner

Antes de apresentar o checkpoint, leia o arquivo `squads/rss-instagram/output/rss-articles.md`
e extraia os artigos do ranking. Apresente cada artigo como uma opção com:
- Label: "#N — [Título resumido]"
- Description: "[Fonte] | Score: N/15 — [Por que PMEs se importam]"

Se houver 0 artigos no ranking (nenhuma novidade relevante), informe o usuário diretamente
e ofereça:
1. Tentar novamente com janela de tempo maior (30 dias)
2. Encerrar esta execução

Se houver apenas 1 artigo, adicione "Encerrar esta execução" como segunda opção
para garantir mínimo de 2 opções no AskUserQuestion.

---

## Após a Seleção

Salve a escolha do usuário neste formato em `squads/rss-instagram/pipeline/data/selected-article.md`:

```
# Artigo Selecionado

**Título:** {título do artigo}
**Fonte:** {fonte}
**URL:** {URL}
**Data de publicação:** {data}
**Score:** {score}/15
**Resumo:** {resumo do artigo conforme rss-articles.md}
**Por que PMEs se importam:** {frase de relevância}
**Data de seleção:** {hoje em YYYY-MM-DD}
```

Este arquivo é o inputFile do step-03 (Natan Notícias).
