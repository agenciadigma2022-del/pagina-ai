---
execution: inline
agent: carlos-carrossel
format: instagram-feed
inputFile: squads/conteudo-instagram/output/angles.md
outputFile: squads/conteudo-instagram/output/carousel-draft.md
---

# Step 06: Criar Carrossel Instagram Feed

## Context Loading

Load these files before executing:
- `squads/conteudo-instagram/output/angles.md` — Os 5 ângulos gerados (usuário selecionou um no step-05)
- `squads/conteudo-instagram/pipeline/data/tone-of-voice.md` — 6 opções de tom para confirmação com o usuário
- `squads/conteudo-instagram/pipeline/data/output-examples.md` — Exemplos completos de referência de qualidade
- `squads/conteudo-instagram/pipeline/data/anti-patterns.md` — Erros comuns a evitar
- Platform rules for instagram-feed are auto-injected by the Pipeline Runner via the `format:` field above

## Instructions

### Process

1. Confirme o ângulo e o tom selecionados no step-05 (estão no contexto da conversa)
2. Identifique o formato de carrossel pré-selecionado no ângulo escolhido (Editorial, Listicle, Tutorial, Mito vs Realidade, Antes e Depois, Storytelling, Problema → Solução)
3. Escreva o **Slide 1 (Cover)**: headline bold, máximo 20 palavras. Teste: "Eu pararia de rolar o feed para esse slide?"
4. Escreva os slides do meio seguindo o arco narrativo do formato. Cada slide: 40-80 palavras totais (headline + supporting text). Alterne fundos: claro → escuro → accent → claro...
5. Escreva o slide de CTA (sempre o último): ação específica e baixo atrito
6. Escreva a legenda: hook (≤125 chars no primeiro parágrafo), corpo, pergunta final aberta
7. Escreva as hashtags: 5-15, mix niche (3-5) + mid-range (3-5) + broad (2-3)
8. Revise o carrossel completo: cada slide avança a narrativa? O hook passa o teste do scroll-stop?
9. Salve em `squads/conteudo-instagram/output/carousel-draft.md`

## Output Format

```
=== FORMATO ===
[Nome do formato de carrossel]

=== TOM ===
[Tom de voz selecionado]

=== SLIDES ===

Slide 1 (Cover):
  Título: [Headline bold — máx 20 palavras]
  Fundo: [light/dark/accent]

Slide 2 ([Papel do slide]):
  Headline: [Afirmação bold — tese ou ponto principal]
  Supporting text: [Contexto, dado ou elaboração — mín 40 palavras combinadas com headline]
  Accent keywords: [Palavras para destacar em cor de acento]
  Fundo: [light/dark/accent]

[Continuar para todos os slides — mínimo 6, ideal 8-10]

Slide N (CTA):
  Headline: [Ação específica]
  Supporting text: [O que o usuário ganha ao agir]
  Fundo: accent

=== LEGENDA ===
[Primeiro parágrafo: ≤125 chars, funciona como hook independente]

[Segundo parágrafo: contexto + insight principal]

[Pergunta final: aberta, provoca comentários]

=== HASHTAGS ===
#hashtag1 #hashtag2 ... (5-15 no total)
```

## Output Example

```
=== FORMATO ===
Tutorial / Passo a Passo

=== TOM ===
Passo a Passo Prático

=== SLIDES ===

Slide 1 (Cover):
  Título: "Testamos o Advantage+ do Meta por 7 dias em uma clínica local. Aqui está o que descobrimos."
  Fundo: dark

Slide 2 (Contexto):
  Headline: "O que é o Advantage+ e por que todo mundo está falando sobre ele"
  Supporting text: O Advantage+ é a ferramenta do Meta que usa inteligência artificial para otimizar suas campanhas automaticamente. Em vez de configurar público, posicionamento e lances manualmente, a IA aprende com seu histórico e ajusta tudo em tempo real. A versão nova foi lançada especificamente para pequenos negócios.
  Accent keywords: inteligência artificial, aprende com seu histórico
  Fundo: light

Slide 3 (Resultado 1):
  Headline: "Semana 1: custo por agendamento caiu 23%"
  Supporting text: Comparamos uma campanha manual com uma Advantage+ para o mesmo cliente — clínica odontológica em São Paulo, orçamento de R$ 50/dia. Com o mesmo investimento, a Advantage+ trouxe 23% mais agendamentos a um custo 19% menor. Repetimos o teste por 7 dias seguidos para confirmar.
  Accent keywords: 23% mais agendamentos, 19% menor
  Fundo: dark

Slide 4 (Resultado 2):
  Headline: "Alcance subiu 3x sem perder relevância"
  Supporting text: Normalmente, expandir o público faz o CPM subir. Com Advantage+, o algoritmo encontrou públicos parecidos com os clientes existentes da clínica sem precisar de lookalike manual. O custo por mil impressões ficou estável mesmo com 3x mais pessoas alcançadas.
  Accent keywords: CPM estável, 3x mais pessoas
  Fundo: accent

Slide 5 (Limitação honesta):
  Headline: "O que a IA não faz — e onde você ainda precisa de estratégia"
  Supporting text: A Advantage+ não define seu objetivo de negócio. Não cria o criativo certo. Não sabe sobre sazonalidade do seu mercado. A ferramenta é o motor — você ainda precisa do piloto. E piloto sem mapa não chega a lugar nenhum.
  Accent keywords: piloto, motor
  Fundo: light

Slide 6 (Pré-requisitos):
  Headline: "Antes de ativar: o que você precisa ter no lugar"
  Supporting text: Passo 1: Pixel instalado no site com pelo menos 50 conversões registradas — sem histórico, a IA não tem o que aprender. Passo 2: Orçamento mínimo de R$ 30/dia para fase de aprendizado. Passo 3: Paciência para os primeiros 7-14 dias sem otimizar manualmente.
  Accent keywords: 50 conversões, R$ 30/dia, 7-14 dias
  Fundo: dark

Slide 7 (Recomendação):
  Headline: "Vale para PME local? Sim — com uma condição"
  Supporting text: Se você já tem histórico de conversões e orçamento consistente, o Advantage+ vai provavelmente superar suas campanhas manuais. Se está começando do zero, configure o Pixel primeiro. A IA só é inteligente quando tem dados para aprender.
  Accent keywords: histórico de conversões, Pixel primeiro
  Fundo: light

Slide 8 (CTA):
  Headline: "Quer saber se seu negócio está pronto para o Advantage+?"
  Supporting text: Comenta ADVANTAGE aqui que a gente te manda um checklist de pré-requisitos no direct. De graça, sem pegadinha. Salva esse carrossel — você vai precisar na hora de configurar.
  Fundo: accent

=== LEGENDA ===
Testamos o Advantage+ do Meta por 7 dias. Custo por agendamento caiu 23%. Alcance subiu 3x. Mas tem uma condição.

A nova ferramenta de IA do Meta promete automatizar suas campanhas — e nos testes que fizemos aqui na ATRAE com uma clínica odontológica em São Paulo, ela cumpriu a promessa.

Mas tem um detalhe que ninguém conta: a IA só é inteligente quando tem dados para aprender. Sem Pixel configurado e histórico de conversões, você vai desperdiçar orçamento na fase de aprendizado.

Comenta ADVANTAGE que te mando o checklist de pré-requisitos no direct.

Você já testou alguma campanha automatizada? Qual foi sua experiência? 👇

=== HASHTAGS ===
#metaads #advantageplus #trafegopago #marketingdigital #pme #pequenaempresa #anunciosdigitais #campanhadigital #agenciadigital #resultados #empreendedorismo #negociolocal #metaadsbrasil #trafegopagobrasil
```

## Veto Conditions

Reject and redo if ANY are true:
1. A legenda começa com "Olá", "Oi", "No post de hoje", "Você sabia que" — o hook é desperdiçado
2. Qualquer slide tem menos de 40 palavras totais (headline + supporting text) — conteúdo superficial

## Quality Criteria

- [ ] Tom de voz confirmado com o usuário antes de escrever
- [ ] 6-10 slides (sweet spot para saves e alcance)
- [ ] Cada slide: 40-80 palavras (headline + supporting text)
- [ ] Slide 1 passa o teste mental do scroll-stop
- [ ] Primeiro parágrafo da legenda ≤ 125 caracteres, funciona sozinho
- [ ] Último slide tem CTA específico (não genérico)
- [ ] 5-15 hashtags com mix niche + mid-range + broad
