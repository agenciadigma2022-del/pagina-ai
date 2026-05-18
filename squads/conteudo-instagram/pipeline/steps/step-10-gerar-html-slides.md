---
execution: inline
agent: duda-design
inputFile: squads/conteudo-instagram/output/carousel-draft.md
outputFile: squads/conteudo-instagram/output/slides-html/
---

# Step 10: Gerar Slides HTML/CSS

## Context Loading

Load these files before executing:
- `squads/conteudo-instagram/pipeline/data/brand-guidelines.md` — cores, tipografia, template base e regras de design da ATRAE
- `squads/conteudo-instagram/output/carousel-draft.md` — conteúdo aprovado pela Renata (step-08) e pelo usuário (step-09)

## Instructions

### Process

1. Leia `brand-guidelines.md` completamente — entenda o template HTML base, as variantes de fundo e todas as regras antes de tocar no conteúdo
2. Leia `carousel-draft.md` — para cada slide, extraia: número, variante de fundo, headline, supporting text e accent keywords
3. Para cada slide, gere `output/slides-html/slide-0N.html` usando o template das brand-guidelines com a variante correta, tipografia Barlow Condensed/Barlow e accent keywords em `<span class="accent-kw">`
4. Aplique as variações especiais: Slide 1 (Cover) com layout rodapé + headline grande; último slide (CTA) com variante accent e layout centralizado
5. Verifique overflow: se algum supporting text não cabe em 1080×1080px, truncar com "..." e documentar
6. Gere `output/slides-html/index.html` com preview de todos os slides
7. Confirme a entrega listando cada arquivo com variante de fundo e contagem de palavras

## Output Format

```
output/slides-html/
├── slide-01.html  [Cover — dark — N palavras]
├── slide-02.html  [Conteúdo — light — N palavras]
├── slide-03.html  [Conteúdo — dark — N palavras]
├── ...
├── slide-0N.html  [CTA — accent — N palavras]
└── index.html     [Preview]
```

## Output Example

```html
<!-- slide-01.html — Cover (dark) — 12 palavras -->
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

## Veto Conditions

Reject and redo if ANY are true:
1. Qualquer slide usa cor fora da paleta (`#0e2f73`, `#2669bf`, `#f2f2f2`, `#0d0d0d`, `#ffffff`)
2. Qualquer slide não tem o logo ATRAE visível no canto superior esquerdo

## Quality Criteria

- [ ] Número de arquivos HTML = número de slides no carousel-draft.md
- [ ] `body` e `.slide` de cada HTML têm `width: 1080px; height: 1080px; overflow: hidden`
- [ ] Logo ATRAE presente com cor correta para cada variante de fundo
- [ ] Accent keywords marcados com `<span class="accent-kw">` no HTML
- [ ] index.html de preview gerado
