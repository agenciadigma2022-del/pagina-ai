---
task: "Create Instagram Feed Carousel"
order: 2
input: |
  - selected_angle: Ângulo aprovado pelo usuário no checkpoint (de output/angles.md)
  - selected_tone: Tom de voz confirmado pelo usuário (de pipeline/data/tone-of-voice.md)
  - story_context: Detalhes da pauta original (de output/news-ranking.md)
  - output_examples: Exemplos de referência (de pipeline/data/output-examples.md)
output: |
  - carousel_draft: Carrossel completo com todos os slides, legenda e hashtags
  - saved_to: squads/conteudo-instagram/output/carousel-draft.md
---

# Create Instagram Feed Carousel

Esta tarefa cria o carrossel completo do Instagram Feed com base no ângulo aprovado e tom de voz confirmado. Produz todos os slides (8-10), legenda (com hook de ≤125 chars) e 5-15 hashtags. As regras de plataforma do Instagram Feed são injetadas automaticamente pelo Pipeline Runner via o campo `format: instagram-feed` no step file.

## Process

1. Confirme o ângulo selecionado, o tom de voz e o formato de carrossel (do contexto da conversa do checkpoint step-05)
2. Leia output-examples.md como referência de qualidade — entenda o nível esperado de detalhe e densidade de texto
3. Escreva o **Slide 1 (Cover)**: headline bold, máximo 20 palavras. Teste: "Eu pararia de rolar o feed para esse slide?" Se a resposta não for "sim imediato", reescrever.
4. Escreva os slides do meio seguindo o arco narrativo do formato de carrossel escolhido (Editorial, Listicle, Tutorial, Mito vs Realidade, Antes e Depois, Storytelling, Problema → Solução). Cada slide: headline bold (tese do slide) + supporting text (dados/contexto/elaboração). 40-80 palavras totais. Alterne fundos: light → dark → accent → light...
5. Escreva o slide de CTA (sempre o último): ação específica e baixo atrito ("Comenta PALAVRA" ou "Salva esse carrossel")
6. Escreva a legenda: primeiro parágrafo ≤125 chars (hook independente), segundo parágrafo (contexto), pergunta final aberta
7. Escreva as hashtags: 5-15, mix de 3-5 niche + 3-5 mid-range + 2-3 broad
8. Revise o carrossel completo: cada slide avança a narrativa? Algum slide tem menos de 40 palavras? O hook passou no teste do scroll-stop?
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

Slide N ([Papel do slide]):
  Headline: [Afirmação bold — tese ou ponto principal do slide]
  Supporting text: [Elaboração, dados ou contexto — mínimo 40 palavras combinadas com headline]
  Accent keywords: [Palavras ou frases para destacar em cor de acento]
  Fundo: [light/dark/accent]

[Continuar para todos os slides — mínimo 6, ideal 8-10, máximo 12]

Slide N (CTA):
  Headline: [Ação específica]
  Supporting text: [O que o usuário ganha ao fazer a ação]
  Fundo: accent

=== LEGENDA ===
[Primeiro parágrafo: ≤125 caracteres, funciona como hook independente sem o carrossel]

[Segundo parágrafo: contexto, por que importa, insight principal]

[Pergunta final: aberta, polarizadora, gera debate real]

=== HASHTAGS ===
#hashtag1 #hashtag2 ... (5-15 no total, mix niche + mid-range + broad)
```

## Output Example

> Use como referência de qualidade, não como template rígido.

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
  Supporting text: O Advantage+ é a ferramenta do Meta que usa inteligência artificial para otimizar suas campanhas automaticamente. Em vez de você configurar público, posicionamento e lances manualmente, a IA aprende com seu histórico e ajusta tudo em tempo real. A versão simplificada foi lançada especificamente para negócios locais.
  Accent keywords: inteligência artificial, aprende com seu histórico
  Fundo: light

Slide 3 (Resultado 1):
  Headline: "Semana 1: custo por agendamento caiu 23%"
  Supporting text: Comparamos campanha manual com Advantage+ para o mesmo cliente — clínica odontológica em São Paulo, R$ 50/dia. Com o mesmo investimento, a Advantage+ trouxe 23% mais agendamentos a custo 19% menor. Repetimos por 7 dias seguidos para confirmar que não foi coincidência.
  Accent keywords: 23% mais agendamentos, 19% menor
  Fundo: dark

Slide 4 (Resultado 2):
  Headline: "Alcance subiu 3x sem aumentar o custo por clique"
  Supporting text: Normalmente, expandir público faz o CPM (custo por mil pessoas alcançadas) subir. Com Advantage+, o algoritmo encontrou públicos semelhantes aos clientes existentes da clínica automaticamente. O CPM se manteve estável mesmo com 3x mais pessoas alcançadas na mesma semana.
  Accent keywords: CPM estável, 3x mais pessoas
  Fundo: accent

Slide 5 (Limitação honesta):
  Headline: "O que a IA não faz — e onde você ainda precisa de estratégia"
  Supporting text: A Advantage+ não define seu objetivo de negócio. Não cria o criativo certo. Não considera sazonalidade do seu mercado. A ferramenta é o motor — você ainda precisa do piloto. E piloto sem mapa não chega ao destino certo.
  Accent keywords: motor, piloto
  Fundo: light

Slide 6 (Pré-requisitos):
  Headline: "Antes de ativar: os 3 pré-requisitos para funcionar"
  Supporting text: Pré-requisito 1: Pixel instalado com pelo menos 50 conversões registradas — sem histórico, a IA não tem o que aprender. Pré-requisito 2: Orçamento mínimo de R$ 30/dia para a fase de aprendizado durar de 7 a 14 dias. Pré-requisito 3: Não pausar a campanha nos primeiros 7 dias.
  Accent keywords: 50 conversões, R$ 30/dia, 7 dias
  Fundo: dark

Slide 7 (Recomendação):
  Headline: "Vale para PME local? Sim — com uma condição"
  Supporting text: Se você tem histórico de conversões e orçamento consistente de pelo menos R$ 30/dia, o Advantage+ vai provavelmente superar suas campanhas manuais. Se está começando do zero, configure o Pixel primeiro e construa histórico antes de ativar. A IA só é inteligente quando tem dados para aprender.
  Accent keywords: R$ 30/dia, Pixel primeiro
  Fundo: light

Slide 8 (CTA):
  Headline: "Quer saber se seu negócio já está pronto para o Advantage+?"
  Supporting text: Comenta ADVANTAGE aqui que a gente te manda um checklist de pré-requisitos no direct. De graça, sem enrolação. Salva esse carrossel — você vai precisar na hora de configurar.
  Fundo: accent

=== LEGENDA ===
Testamos o Advantage+ do Meta por 7 dias. Custo por agendamento caiu 23%. Alcance subiu 3x. Mas tem uma condição.

A IA do Meta promete otimizar suas campanhas automaticamente — e nos testes que fizemos aqui na ATRAE com uma clínica odontológica em SP, ela cumpriu. Mas tem um detalhe que ninguém conta: a IA só é inteligente quando tem dados para aprender. Sem Pixel configurado e histórico de conversões, você vai queimar orçamento na fase de aprendizado.

Você prefere a IA decidindo os detalhes da campanha ou quer manter controle manual? Me conta nos comentários 👇

=== HASHTAGS ===
#metaads #advantageplus #trafegopago #marketingdigital #pme #pequenaempresa #metaadsbrasil #campanhadigital #agenciadigital #resultados #empreendedorismo #negociolocal #trafegopagobrasil #anunciosdigitais
```

## Quality Criteria

- [ ] Tom de voz confirmado com o usuário antes de começar a escrever
- [ ] 6-10 slides (sweet spot para saves e alcance)
- [ ] Cada slide tem 40-80 palavras totais (headline + supporting text)
- [ ] Slide 1 passa o teste mental do scroll-stop
- [ ] Primeiro parágrafo da legenda ≤ 125 caracteres e funciona como hook independente
- [ ] Último slide tem CTA específico (não "Segue a página" ou "Entre em contato")
- [ ] 5-15 hashtags com mix niche + mid-range + broad

## Veto Conditions

Reject and redo if ANY are true:
1. A legenda começa com "Olá", "Oi", "No post de hoje", "Você sabia que" ou qualquer variação — o hook é desperdiçado
2. Qualquer slide tem menos de 40 palavras totais (headline + supporting text) — conteúdo superficial não gera saves
