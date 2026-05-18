---
execution: inline
agent: renata-revisao
inputFile: squads/rss-instagram/output/carousel-draft.md
outputFile: squads/rss-instagram/output/review.md
---

# Step 08: Revisar Qualidade do Conteúdo

## Context Loading

Load these files before executing:
- `squads/rss-instagram/output/carousel-draft.md` — Rascunho aprovado pelo usuário no step-07
- `squads/rss-instagram/pipeline/data/quality-criteria.md` — Rubrica de avaliação com 9 critérios (C1-C9)
- `squads/rss-instagram/pipeline/data/anti-patterns.md` — Erros conhecidos de conteúdo para PMEs

## Instructions

### Process

1. Carregue `quality-criteria.md` e `anti-patterns.md` ANTES de ler o carrossel — critérios primeiro, conteúdo depois
2. Verifique as condições de veto imediatamente. Se qualquer uma for verdadeira: emitir REJEITAR com motivo e parar a pontuação
3. Leia `carousel-draft.md` completamente do Slide 1 até as hashtags — não pontue até terminar a leitura completa
4. Pontue cada critério C1-C9 de 1-10 com evidência textual direta do carrossel
5. Calcule a média (soma C1-C9 / 9)
6. Aplique a regra de decisão: média ≥ 7 E nenhum critério < 4 = APROVAR; média < 7 OU qualquer < 4 = REJEITAR; caso contrário = APROVAR COM RESSALVAS
7. Escreva a revisão estruturada com tabela de pontuação, ações requeridas (bloqueantes) e sugestões (não bloqueantes)
8. Salve em `squads/rss-instagram/output/review.md`

## Output Format

```markdown
# Revisão de Qualidade — [Hook/título do conteúdo]

**Veredicto:** [APROVAR ✅ / REJEITAR ❌ / APROVAR COM RESSALVAS ⚠️]
**Score Geral:** X/10
**Data:** YYYY-MM-DD

---

## Tabela de Pontuação

| Critério | Score | Justificativa |
|----------|-------|---------------|
| C1: Poder do Hook | X/10 | [citação do texto + análise] |
| C2: Clareza da Narrativa | X/10 | [evidência] |
| C3: Relevância PME | X/10 | [evidência] |
| C4: Linguagem e Tom | X/10 | [evidência] |
| C5: CTA | X/10 | [evidência] |
| C6: Legenda | X/10 | [evidência] |
| C7: Estrutura | X/10 | [evidência] |
| C8: Densidade de Texto | X/10 | [evidência] |
| C9: Hashtags | X/10 | [evidência] |
| **MÉDIA** | **X/10** | |

---

## Ações Requeridas (Bloqueantes)
[Apenas se REJEITAR ou APROVAR COM RESSALVAS]

1. [Código do critério] — [Correção exata]: "[citação do conteúdo]" → "[como deve ficar]"

## Sugestões (Não Bloqueantes)

1. [Melhoria opcional com justificativa]

---

## Resumo

[2-3 frases sobre qualidade geral e ponto principal — se aprovado, destaque o que funcionou; se rejeitado, esclareça o problema central]
```

## Output Example

```markdown
# Revisão de Qualidade — "Testamos o Advantage+ por 7 dias em uma clínica local"

**Veredicto:** APROVAR COM RESSALVAS ⚠️
**Score Geral:** 7.6/10
**Data:** 2026-03-23

---

## Tabela de Pontuação

| Critério | Score | Justificativa |
|----------|-------|---------------|
| C1: Poder do Hook | 9/10 | Slide 1: "Testamos o Advantage+ do Meta por 7 dias em uma clínica local. Aqui está o que descobrimos." — específico, tem prova real (7 dias), cria curiosidade sobre os resultados. Pararia o scroll. |
| C2: Clareza da Narrativa | 8/10 | Progressão lógica: contexto → resultado 1 → resultado 2 → limitação → pré-requisitos → recomendação → CTA. Cada slide avança. O slide de limitação honesta (slide 5) é ousado e necessário para credibilidade. |
| C3: Relevância PME | 9/10 | Usa exemplo de clínica odontológica em São Paulo, menciona R$ 30-50/dia, explica em linguagem acessível. "A IA só é inteligente quando tem dados para aprender" é linguagem que o PME entende. |
| C4: Linguagem e Tom | 8/10 | Tom consultivo e educativo correto. "A ferramenta é o motor — você ainda precisa do piloto" é a voz certa da ATRAE. Sem jargão não traduzido. |
| C5: CTA | 8/10 | "Comenta ADVANTAGE" é específico e rastreável. Presente no slide final e na legenda. Combina salvar + DM — dois objetivos em um CTA. |
| C6: Legenda | 6/10 | Hook: "Testamos o Advantage+ do Meta por 7 dias. Custo por agendamento caiu 23%. Alcance subiu 3x." — 89 caracteres, funciona sozinho, dados concretos. Porém a pergunta final "Você já testou alguma campanha automatizada?" pode gerar só "não" como resposta — pouco debate. |
| C7: Estrutura | 9/10 | 8 slides, hierarquia visual de dois níveis em cada slide, fundos alternados (dark/light/accent/light/dark/light/accent). Dentro das specs. |
| C8: Densidade de Texto | 7/10 | Slides 3-7 estão entre 55-75 palavras. Slide 2 tem 47 palavras — dentro do range. Slide 5 tem 42 palavras — mínimo aceitável. Todos aprovados. |
| C9: Hashtags | 7/10 | 14 hashtags, dentro do range. Mix razoável (niche + mid + broad). #anunciosdigitais é vago — trocar por #metaadsbrasil para melhor precisão temática. |
| **MÉDIA** | **7.9/10** | |

---

## Ações Requeridas (Bloqueantes)

Nenhuma ação bloqueante. Score geral e critérios individuais dentro dos limites de aprovação.

## Sugestões (Não Bloqueantes)

1. **C6 — Pergunta final da legenda**: "Você já testou alguma campanha automatizada?" → tentar "Você prefere a IA decidindo os detalhes ou quer manter controle manual? Me conta nos comentários" — mais polarizadora, gera mais debate
2. **C9 — Hashtag**: trocar #anunciosdigitais por #metaadsbrasil para melhor especificidade temática e alcance de audiência qualificada

---

## Resumo

Conteúdo de alta qualidade com dados reais, voz consultiva exemplar e narrativa clara. O hook com dados específicos (23%, 3x) e o slide honesto de limitações são os melhores elementos — constroem credibilidade genuína. Duas sugestões não bloqueantes para melhorar engajamento na legenda e precisão das hashtags.
```

## Veto Conditions

Reject the REVIEW ITSELF and redo if ANY are true:
1. Qualquer critério foi pontuado sem evidência textual do conteúdo
2. Uma condição de veto estava presente no conteúdo mas não foi sinalizada como REJEITAR automático

## Quality Criteria

- [ ] Todos os 9 critérios pontuados com evidência textual
- [ ] Condições de veto explicitamente verificadas
- [ ] Regra de decisão corretamente aplicada (média + critérios individuais)
- [ ] Ações requeridas incluem citação específica + correção (não diretivas vagas)
