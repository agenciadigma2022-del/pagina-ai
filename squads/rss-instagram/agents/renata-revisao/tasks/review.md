---
task: "Review Instagram Carousel Quality"
order: 1
input: |
  - carousel_draft: Carrossel completo com slides, legenda e hashtags (de output/carousel-draft.md)
  - quality_criteria: Rubrica de avaliação com 9 critérios (de pipeline/data/quality-criteria.md)
  - anti_patterns: Erros conhecidos de conteúdo para PMEs (de pipeline/data/anti-patterns.md)
output: |
  - review: Veredicto estruturado com scores, justificativas e ações requeridas
  - saved_to: squads/rss-instagram/output/review.md
---

# Review Instagram Carousel Quality

Esta tarefa avalia o carrossel rascunho contra 9 critérios de qualidade e emite um veredicto estruturado (APROVAR / REJEITAR / APROVAR COM RESSALVAS). Todo score tem evidência textual do conteúdo. Ações requeridas são claramente separadas de sugestões.

## Process

1. Carregue `quality-criteria.md` e `anti-patterns.md` ANTES de ler o carrossel — critérios primeiro, conteúdo depois
2. Verifique as 6 condições de veto automático:
   - Primeiro slide sem headline clara
   - Promessa irrealista no conteúdo
   - Tom condescendente com o empreendedor
   - Ausência total de CTA
   - Menos de 4 ou mais de 20 slides
   - Legenda começa com "Olá", "Oi", "No post de hoje" ou "Você sabia que"
   Se QUALQUER condição for verdadeira: emitir REJEITAR imediato com motivo. Parar a pontuação.
3. Leia `carousel-draft.md` completamente do Slide 1 até as hashtags — não pontue até terminar a leitura completa
4. Pontue cada critério C1-C9 de 1-10 com evidência textual direta do carrossel (citação do texto)
5. Calcule a média (soma C1-C9 / 9)
6. Aplique a regra de decisão:
   - APROVAR: média ≥ 7 E nenhum critério < 4
   - REJEITAR: média < 7 OU qualquer critério < 4
   - APROVAR COM RESSALVAS: média ≥ 7, mas 1+ critério entre 4-6
7. Escreva revisão com: banner do veredicto, tabela de pontuação, ações requeridas (bloqueantes), sugestões (não bloqueantes), resumo
8. Salve em `squads/rss-instagram/output/review.md`

## Output Format

```markdown
# Revisão de Qualidade — [Hook ou título do conteúdo]

**Veredicto:** [APROVAR ✅ / REJEITAR ❌ / APROVAR COM RESSALVAS ⚠️]
**Score Geral:** X.X/10
**Data:** YYYY-MM-DD

---

## Tabela de Pontuação

| Critério | Score | Justificativa |
|----------|-------|---------------|
| C1: Poder do Hook | X/10 | [Citação do slide 1 + análise de por que para ou não para o scroll] |
| C2: Clareza da Narrativa | X/10 | [Evidência da progressão — ou falta dela] |
| C3: Relevância PME | X/10 | [Evidência de linguagem e exemplos locais] |
| C4: Linguagem e Tom | X/10 | [Citação que exemplifica o tom] |
| C5: CTA | X/10 | [Citação do CTA + análise de especificidade] |
| C6: Legenda | X/10 | [Contagem de chars do hook + análise da pergunta final] |
| C7: Estrutura | X/10 | [Contagem de slides + evidência de hierarquia visual] |
| C8: Densidade de Texto | X/10 | [Indicar quais slides estão dentro/fora do range 40-80 palavras] |
| C9: Hashtags | X/10 | [Contagem + análise do mix] |
| **MÉDIA** | **X.X/10** | |

---

## Ações Requeridas (Bloqueantes)
[Apenas se REJEITAR ou APROVAR COM RESSALVAS. Se APROVAR sem ressalvas, omitir esta seção.]

1. **[Código do critério]** — [Correção necessária]: "[citação exata do problema]" → "[como deve ficar]"

## Sugestões (Não Bloqueantes)

1. [Melhoria opcional com justificativa específica]
2. [Outra sugestão]

---

## Resumo

[2-3 frases: qualidade geral, principal ponto forte, principal ponto de melhoria (se houver). Se aprovado, destaque o que fez o conteúdo funcionar para aprendizado futuro.]
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```markdown
# Revisão de Qualidade — "Testamos o Advantage+ do Meta por 7 dias em uma clínica local"

**Veredicto:** APROVAR COM RESSALVAS ⚠️
**Score Geral:** 7.8/10
**Data:** 2026-03-23

---

## Tabela de Pontuação

| Critério | Score | Justificativa |
|----------|-------|---------------|
| C1: Poder do Hook | 9/10 | Slide 1: "Testamos o Advantage+ do Meta por 7 dias em uma clínica local. Aqui está o que descobrimos." — específico (7 dias, clínica local), dados implícitos ("o que descobrimos" cria open loop), passaria no teste do scroll-stop. |
| C2: Clareza da Narrativa | 8/10 | Progressão clara: contexto → resultado 1 → resultado 2 → limitação honesta → pré-requisitos → recomendação → CTA. Cada slide avança. O slide de "limitação honesta" é ousado e necessário para credibilidade. |
| C3: Relevância PME | 9/10 | Usa exemplo real de "clínica odontológica em São Paulo", menciona "R$ 50/dia", explica jargão: "CPM (custo por mil pessoas alcançadas)". A frase "A IA só é inteligente quando tem dados para aprender" é linguagem que o PME entende. |
| C4: Linguagem e Tom | 8/10 | Tom consultivo e educativo correto. "A ferramenta é o motor — você ainda precisa do piloto" é exatamente a voz da ATRAE. Nenhum jargão não traduzido encontrado. |
| C5: CTA | 8/10 | Slide 8: "Comenta ADVANTAGE aqui que a gente te manda um checklist de pré-requisitos no direct." — específico, rastreável, baixo atrito. Combinado com "Salva esse carrossel" oferece dois objetivos sem confundir. |
| C6: Legenda | 6/10 | Hook: "Testamos o Advantage+ do Meta por 7 dias. Custo por agendamento caiu 23%. Alcance subiu 3x. Mas tem uma condição." — 93 caracteres, funciona como hook independente. Pergunta final "Você prefere a IA decidindo os detalhes..." é polarizadora e boa. Mas o segundo parágrafo é denso — poderia ser dividido em dois para melhor leitura mobile. |
| C7: Estrutura | 9/10 | 8 slides — dentro do range ideal (6-10). Hierarquia visual clara em todos os slides (headline bold + supporting text menor). Fundos alternados: dark/light/accent/light/dark/light/light/accent. Aprovado. |
| C8: Densidade de Texto | 7/10 | Slides 3-7 estão entre 52-74 palavras. Slide 2: 48 palavras — mínimo aceitável. Slide 5 (limitação): 41 palavras — mínimo aceitável. Todos aprovados individualmente. |
| C9: Hashtags | 7/10 | 14 hashtags — dentro do range (5-15). Mix razoável. Sugestão: trocar #anunciosdigitais (muito vago) por #metaadsbrasil (mais preciso para o tema). |
| **MÉDIA** | **7.8/10** | |

---

## Ações Requeridas (Bloqueantes)

Nenhuma ação bloqueante identificada. Score geral (7.8) e critérios individuais (mínimo 6/10) dentro dos limites de aprovação.

## Sugestões (Não Bloqueantes)

1. **C6 — Segundo parágrafo da legenda**: dividir o segundo parágrafo em dois para facilitar leitura mobile. Atualmente está com 3 frases densas — separar em dois blocos de 1-2 frases cada.
2. **C9 — Hashtag**: trocar #anunciosdigitais por #metaadsbrasil para melhor especificidade temática e alcance de audiência qualificada.

---

## Resumo

Conteúdo de alta qualidade com dados reais, narrativa coerente e voz consultiva exemplar da ATRAE. O hook com dados específicos (23%, 3x) e o slide honesto de limitações são os destaques — constroem a credibilidade que diferencia a ATRAE de agências que apenas prometem. Duas sugestões não bloqueantes para melhorar leitura mobile da legenda e precisão das hashtags.
```

## Quality Criteria

- [ ] Todos os 9 critérios pontuados com citação textual do conteúdo
- [ ] Condições de veto verificadas explicitamente (mesmo quando nenhuma é acionada)
- [ ] Regra de decisão corretamente aplicada (média + análise individual de critérios)
- [ ] Ações requeridas incluem: [código] → [citação do problema] → [como deve ficar]

## Veto Conditions

Reject the REVIEW ITSELF and redo if ANY are true:
1. Qualquer critério foi pontuado sem citação textual do conteúdo avaliado
2. Uma condição de veto estava presente no conteúdo mas não foi identificada como REJEITAR automático
