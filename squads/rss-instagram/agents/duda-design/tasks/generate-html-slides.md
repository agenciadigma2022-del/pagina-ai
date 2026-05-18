---
task: "Generate HTML/CSS Slides"
order: 1
input: |
  - carousel_draft: Carrossel aprovado com slides, legenda e hashtags (de output/carousel-draft.md)
  - brand_guidelines: Especificações visuais ATRAE (de pipeline/data/brand-guidelines.md)
output: |
  - html_slides: Arquivo HTML/CSS para cada slide do carrossel
  - saved_to: squads/rss-instagram/output/slides-html/
---

# Generate HTML/CSS Slides

Esta tarefa converte o carrossel de texto em arquivos HTML/CSS prontos para renderização. Cada slide vira um arquivo HTML independente que, renderizado em viewport 1080×1080px, produz o slide final com a identidade visual da ATRAE.

## Process

1. Leia `brand-guidelines.md` completamente — entenda o template base, as variantes de fundo e as regras tipográficas ANTES de tocar no carousel-draft.md
2. Leia `carousel-draft.md` e mapeie cada slide: número, papel (Cover/Conteúdo/CTA), headline, supporting text, accent keywords e variante de fundo
3. Para cada slide, gere um arquivo `output/slides-html/slide-0N.html` usando o template base das brand-guidelines com:
   - Variante de fundo correta (dark/light/accent) conforme indicado no carousel-draft.md
   - Headline em Barlow Condensed 800, `text-transform: uppercase`
   - Supporting text em Barlow 300 com accent keywords em `<span class="accent-kw">`
   - Logo "ATRAE" no canto superior esquerdo com cor correta para o fundo
   - Número do slide no canto superior direito (formato "01 / 08")
4. Aplique as variações especiais conforme brand-guidelines:
   - Slide 1 (Cover): layout cover com headline grande (82px), conteúdo alinhado ao rodapé, sem supporting text longo
   - Último slide (CTA): variante accent, headline centralizado, supporting text com a ação de CTA
5. Verifique que nenhum slide tem texto em overflow — se o supporting text for muito longo para caber em 1080×1080px, truncar até o limite com "..." e documentar na entrega
6. Salve todos os arquivos em `output/slides-html/`
7. Gere `output/slides-html/index.html` com todos os slides listados como iframes de preview (270×270px cada)
8. Confirme a entrega listando cada arquivo gerado com número do slide, variante de fundo e contagem de palavras

## Output Format

```
output/slides-html/
├── slide-01.html  [Cover — dark — 15 palavras]
├── slide-02.html  [Conteúdo — light — 54 palavras]
├── slide-03.html  [Conteúdo — dark — 62 palavras]
├── slide-04.html  [Conteúdo — accent — 58 palavras]
├── ...
├── slide-0N.html  [CTA — accent — 26 palavras]
└── index.html     [Preview com todas as miniaturas]
```

## Output Example

```html
<!-- slide-01.html — Cover (dark) — 14 palavras -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600;700;800;900&family=Barlow:wght@300;400;600&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1080px; height: 1080px; overflow: hidden; }
    .slide {
      width: 1080px; height: 1080px; padding: 72px;
      display: flex; flex-direction: column; justify-content: space-between;
      background: #0e2f73; color: #ffffff;
    }
    .header { display: flex; justify-content: space-between; }
    .logo { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 30px; letter-spacing: 6px; color: #ffffff; }
    .content { flex: 1; display: flex; flex-direction: column; justify-content: flex-end; padding-bottom: 32px; gap: 24px; }
    .divider { width: 64px; height: 3px; background: #2669bf; border-radius: 2px; }
    .headline { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 82px; line-height: 1.0; text-transform: uppercase; }
  </style>
</head>
<body>
  <div class="slide">
    <div class="header"><div class="logo">ATRAE</div></div>
    <div class="content">
      <div class="divider"></div>
      <h1 class="headline">Testamos o Advantage+ do Meta por 7 dias em uma clínica local.</h1>
    </div>
  </div>
</body>
</html>
```

```html
<!-- slide-02.html — Conteúdo (light) — 51 palavras -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600;700;800;900&family=Barlow:wght@300;400;600&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1080px; height: 1080px; overflow: hidden; }
    .slide {
      width: 1080px; height: 1080px; padding: 72px;
      display: flex; flex-direction: column; justify-content: space-between;
      background: #f2f2f2; color: #0d0d0d;
    }
    .header { display: flex; justify-content: space-between; align-items: flex-start; }
    .logo { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 30px; letter-spacing: 6px; color: #2669bf; }
    .slide-num { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 20px; color: rgba(13,13,13,0.4); }
    .content { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 32px; }
    .headline { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 60px; line-height: 1.05; text-transform: uppercase; }
    .divider { width: 64px; height: 3px; background: #0e2f73; border-radius: 2px; flex-shrink: 0; }
    .supporting { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 29px; line-height: 1.7; }
    .accent-kw { color: #2669bf; font-weight: 700; }
  </style>
</head>
<body>
  <div class="slide">
    <div class="header">
      <div class="logo">ATRAE</div>
      <div class="slide-num">02 / 08</div>
    </div>
    <div class="content">
      <h2 class="headline">O que é o Advantage+ e por que todo mundo está falando</h2>
      <div class="divider"></div>
      <p class="supporting">
        O Advantage+ usa <span class="accent-kw">inteligência artificial</span> para otimizar
        suas campanhas automaticamente. A IA <span class="accent-kw">aprende com seu histórico</span>
        e ajusta público, lances e posicionamento em tempo real — sem você precisar configurar nada manualmente.
      </p>
    </div>
  </div>
</body>
</html>
```

## Quality Criteria

- [ ] Número de arquivos HTML = número de slides no carousel-draft.md
- [ ] Cada arquivo tem `width: 1080px; height: 1080px; overflow: hidden` no body e .slide
- [ ] Logo ATRAE presente em todos os slides com cor correta para a variante
- [ ] Accent keywords marcados com `<span class="accent-kw">` no HTML
- [ ] Nenhum slide com conteúdo em overflow
- [ ] index.html de preview gerado

## Veto Conditions

Reject and redo if ANY are true:
1. Qualquer slide usa cor fora da paleta definida nas brand-guidelines (`#0e2f73`, `#2669bf`, `#f2f2f2`, `#0d0d0d`, `#ffffff`)
2. Qualquer slide não tem o logo ATRAE visível no canto superior esquerdo
