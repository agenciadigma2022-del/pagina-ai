---
execution: inline
agent: carlos-carrossel
inputFile: squads/rss-instagram/output/article-context.md
outputFile: squads/rss-instagram/output/angles.md
---

# Step 04: Gerar 5 Ângulos

## Context Loading

Load these files before executing:
- `squads/rss-instagram/output/article-context.md` — Ranking de pautas (usuário selecionou uma no step-03)
- `squads/rss-instagram/pipeline/data/domain-framework.md` — Definições dos 5 ângulos e drivers psicológicos

## Instructions

### Process

1. Confirme qual pauta o usuário selecionou no step-03 (estará no contexto da conversa)
2. Leia a seção "Critérios de Ângulo" do domain-framework.md para relembrar os 5 drivers e exemplos
3. Para cada um dos 5 drivers psicológicos (Medo, Oportunidade, Educacional, Contrário, Inspiracional):
   - Escreva um título de carrossel que funcionaria como hook do primeiro slide para ESTA pauta específica
   - Identifique o formato de carrossel que melhor se encaixa com este ângulo
   - Escreva 1-2 frases explicando a lógica emocional e por que funcionaria com PMEs locais
4. Revise os 5 ângulos: são genuinamente distintos? Todos vêm da MESMA pauta?
5. Salve em `squads/rss-instagram/output/angles.md`
6. **Este step NÃO escreve conteúdo de carrossel** — apenas gera as opções de ângulo

## Output Format

```markdown
# 5 Ângulos — [Título da Pauta]

**Pauta:** [Título da pauta selecionada]
**Fonte:** [Fonte]

---

## 🔴 Ângulo 1 — Medo
**Título do carrossel:** "[Hook title]"
**Formato:** [Nome do formato de carrossel]
**Lógica:** [Por que ressoa com PMEs — 1-2 frases]

---

## 🟢 Ângulo 2 — Oportunidade
**Título do carrossel:** "[Hook title]"
**Formato:** [Nome do formato]
**Lógica:** [1-2 frases]

---

## 📚 Ângulo 3 — Educacional
**Título do carrossel:** "[Hook title]"
**Formato:** [Nome do formato]
**Lógica:** [1-2 frases]

---

## ↔️ Ângulo 4 — Contrário
**Título do carrossel:** "[Hook title]"
**Formato:** [Nome do formato]
**Lógica:** [1-2 frases]

---

## ⭐ Ângulo 5 — Inspiracional
**Título do carrossel:** "[Hook title]"
**Formato:** [Nome do formato]
**Lógica:** [1-2 frases]
```

## Output Example

```markdown
# 5 Ângulos — Meta Advantage+ simplificado para negócios locais

**Pauta:** Meta lança Advantage+ simplificado para negócios locais com setup em 10 minutos
**Fonte:** Meta for Business Blog

---

## 🔴 Ângulo 1 — Medo
**Título do carrossel:** "Sua concorrência já usa IA nos anúncios. Você ainda configura manualmente."
**Formato:** Editorial/Tese
**Lógica:** Cria urgência competitiva — o dono de negócio teme ficar para trás enquanto vizinhos adotam tecnologia nova. Funciona especialmente em mercados locais onde os concorrentes são conhecidos.

---

## 🟢 Ângulo 2 — Oportunidade
**Título do carrossel:** "Meta nivelou o jogo: pequenos negócios agora têm o que só as grandes marcas tinham"
**Formato:** Problema → Solução
**Lógica:** Posiciona o update como vantagem para PMEs que agem agora — democratização do acesso a IA em campanhas. Quem adotar primeiro tem vantagem de pioneiro no mercado local.

---

## 📚 Ângulo 3 — Educacional
**Título do carrossel:** "Testamos o Advantage+ por 7 dias em uma clínica local. Aqui está o que descobrimos."
**Formato:** Tutorial/Passo a Passo
**Lógica:** PMEs querem evidência antes de investir. Dados reais de teste posicionam a ATRAE como especialista que já fez o trabalho de campo — reduz o risco percebido do leitor.

---

## ↔️ Ângulo 4 — Contrário
**Título do carrossel:** "IA vai substituir sua agência de anúncios? A resposta que o mercado não quer dar"
**Formato:** Mito vs Realidade
**Lógica:** Confronta a narrativa de "automação elimina a necessidade de gestão profissional". Ressignifica o papel estratégico da ATRAE no contexto de automação crescente — gera debate e protege o posicionamento da agência.

---

## ⭐ Ângulo 5 — Inspiracional
**Título do carrossel:** "A padaria que nunca teve budget pra anunciar agora tem acesso ao mesmo que a Cacau Show usa"
**Formato:** Storytelling/Narrativa
**Lógica:** Transforma feature técnica em história de empoderamento do pequeno negócio. Alta identificação com donos de negócio local que se sentem em desvantagem competitiva — faz o PME se ver como protagonista.
```

## Veto Conditions

Reject and redo if ANY are true:
1. Menos de 5 ângulos gerados — todos os 5 drivers devem estar representados
2. Dois ângulos usam o mesmo driver psicológico ou são emocionalmente intercambiáveis

## Quality Criteria

- [ ] Exatamente 5 ângulos, um por driver (Medo, Oportunidade, Educacional, Contrário, Inspiracional)
- [ ] Todos os ângulos derivam da MESMA pauta selecionada
- [ ] Cada título funcionaria como hook de primeiro slide (bold, cria curiosidade, específico)
- [ ] Formato de carrossel atribuído a cada ângulo
