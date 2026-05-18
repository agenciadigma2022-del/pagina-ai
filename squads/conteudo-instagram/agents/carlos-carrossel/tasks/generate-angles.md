---
task: "Generate 5 Content Angles"
order: 1
input: |
  - selected_story: Pauta escolhida pelo usuário no checkpoint (de output/news-ranking.md)
  - domain_framework: Definições de ângulos e drivers psicológicos (de pipeline/data/domain-framework.md)
output: |
  - angles: 5 ângulos distintos de carrossel, um por driver psicológico
  - saved_to: squads/conteudo-instagram/output/angles.md
---

# Generate 5 Content Angles

Esta tarefa transforma a pauta selecionada em 5 perspectivas emocionais distintas para carrossel. Cada ângulo usa um driver psicológico diferente e produz um título de carrossel completamente diferente a partir da mesma notícia. Nenhum conteúdo de carrossel é escrito nesta tarefa — apenas os ângulos.

## Process

1. Confirme qual pauta o usuário selecionou no step-03 (estará no contexto da conversa)
2. Leia a seção "Critérios de Ângulo" do domain-framework.md para relembrar as definições e exemplos dos 5 drivers
3. Para cada um dos 5 drivers (Medo, Oportunidade, Educacional, Contrário, Inspiracional):
   - Escreva um título de carrossel que funcionaria como hook do primeiro slide para ESTA pauta específica (não para outra)
   - Identifique o formato de carrossel que melhor se encaixa com este driver e pauta
   - Escreva 1-2 frases explicando a lógica emocional e por que funcionaria com PMEs locais brasileiras
4. Revise: os 5 ângulos são genuinamente distintos? Todos derivam da MESMA pauta?
5. Salve em `squads/conteudo-instagram/output/angles.md`

## Output Format

```yaml
story_selected: "Título da pauta"
story_source: "Fonte"
angles:
  - driver: "🔴 Medo"
    title: "Título do carrossel"
    format: "Nome do formato de carrossel"
    rationale: "Por que ressoa com PMEs — 1-2 frases"
  - driver: "🟢 Oportunidade"
    title: "..."
    format: "..."
    rationale: "..."
  - driver: "📚 Educacional"
    title: "..."
    format: "..."
    rationale: "..."
  - driver: "↔️ Contrário"
    title: "..."
    format: "..."
    rationale: "..."
  - driver: "⭐ Inspiracional"
    title: "..."
    format: "..."
    rationale: "..."
```

## Output Example

> Use como referência de qualidade, não como template rígido.

```yaml
story_selected: "Meta lança Advantage+ simplificado com setup em 10 minutos para negócios locais"
story_source: "Meta for Business"
angles:
  - driver: "🔴 Medo"
    title: "Sua concorrência já usa IA nos anúncios. E você ainda configura tudo na mão."
    format: "Editorial/Tese"
    rationale: "Cria urgência competitiva — o dono do negócio teme que vizinhos e concorrentes locais adotem antes dele. Funciona especialmente em mercados físicos onde a concorrência é visível e imediata."

  - driver: "🟢 Oportunidade"
    title: "Meta nivelou o jogo: o que só as grandes marcas tinham agora está disponível para sua padaria"
    format: "Problema → Solução"
    rationale: "Posiciona o update como janela de vantagem para quem age agora. Democratização de IA em ads é argumento real — o PME que adotar primeiro ganha vantagem antes que o mercado local se sature."

  - driver: "📚 Educacional"
    title: "Testamos o Advantage+ por 7 dias em uma clínica local. Custo caiu 23%. Mas tem uma condição."
    format: "Tutorial/Passo a Passo"
    rationale: "PMEs querem evidências antes de investir. Dados reais de teste posicionam a ATRAE como especialista que já fez o trabalho de campo. O 'mas tem uma condição' cria open loop que força o swipe."

  - driver: "↔️ Contrário"
    title: "IA vai substituir sua agência de anúncios? Aqui está a resposta que o mercado não quer dar"
    format: "Mito vs Realidade"
    rationale: "Confronta o medo de automação que muitos empresários têm — e que algumas agências exploram para criar ansiedade. Ressignifica o papel estratégico humano mesmo com IA crescendo, protegendo o posicionamento da ATRAE."

  - driver: "⭐ Inspiracional"
    title: "A padaria que nunca teve budget pra anunciar agora tem acesso ao mesmo que a Cacau Show usa"
    format: "Storytelling/Narrativa"
    rationale: "Humaniza o update técnico em história de empoderamento do pequeno negócio. Alta identificação com PME que se sente em desvantagem competitiva — faz o leitor se ver como protagonista de uma virada."
```

## Quality Criteria

- [ ] Exatamente 5 ângulos, um por driver (Medo, Oportunidade, Educacional, Contrário, Inspiracional)
- [ ] Todos os ângulos derivam da MESMA pauta selecionada
- [ ] Cada título funcionaria como hook de primeiro slide (específico, cria curiosidade, não genérico)
- [ ] Formato de carrossel atribuído e adequado a cada ângulo

## Veto Conditions

Reject and redo if ANY are true:
1. Menos de 5 ângulos gerados — todos os 5 drivers devem estar representados sem exceção
2. Dois ou mais ângulos usam o mesmo driver psicológico ou são emocionalmente intercambiáveis
