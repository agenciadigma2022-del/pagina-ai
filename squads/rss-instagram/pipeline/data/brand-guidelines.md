# ATRAE — Brand Guidelines for Slide Design

Referência oficial de design para geração de slides HTML/CSS do carrossel Instagram.
Carregar este arquivo ANTES de tocar em qualquer conteúdo de slides.

---

## Paleta de Cores

| Nome | HEX | Uso |
|------|-----|-----|
| Azul Escuro (Dark Navy) | `#0e2f73` | Fundo de slides `dark` |
| Azul Médio (Blue) | `#2669bf` | Fundo de slides `accent`; cor de destaque em slides `light` e `dark` |
| Off-White | `#f2f2f2` | Fundo de slides `light` |
| Preto Suave | `#0d0d0d` | Texto principal em slides `light` |
| Branco | `#ffffff` | Texto em slides `dark` e `accent`; logo em fundo escuro |

**Regra absoluta:** Nenhuma cor fora desta paleta. Sem gradientes, sem transparências, sem variações.

---

## Tipografia

**Fonte oficial:** Glancyr (proprietária ATRAE)
**Substituta web (Google Fonts):** Barlow Condensed + Barlow

```css
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600;700;800;900&family=Barlow:wght@300;400;600&display=swap');
```

| Elemento | Família | Peso | Tamanho | Case |
|----------|---------|------|---------|------|
| Logo "ATRAE" | Barlow Condensed | 900 | 30px | UPPERCASE |
| Headline — Slide 1 (Cover) | Barlow Condensed | 800 | 80–88px | UPPERCASE |
| Headline — Slides 2-N | Barlow Condensed | 800 | 56–66px | UPPERCASE |
| Supporting text | Barlow | 300 | 28–32px | Sentence case |
| Accent keywords (em `<span>`) | Barlow | 700 | igual ao surrounding | Sentence case |
| Número do slide | Barlow | 300 | 20px | — |

---

## Estrutura do Slide (1080×1080px)

```
┌──────────────────────────────────────────────────────┐  ← 1080px
│  ATRAE (logo topo-esq)       [01 / 08] (topo-dir)   │
│  padding: 72px todos os lados                        │
│                                                      │
│                                                      │
│  HEADLINE EM UPPERCASE                               │
│  DO SLIDE AQUI                                       │
│                                                      │
│  ▬▬▬▬  (divider: 64px × 3px)                        │
│                                                      │
│  Texto de suporte em sentence case com               │
│  accent keywords em destaque de cor.                 │
│  Legível em tamanho mobile.                          │
│                                                      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### Regras de Layout

- Padding uniforme: **72px** em todos os lados
- Logo: sempre no canto superior esquerdo
- Número do slide: canto superior direito (formato "01 / 08")
- Divider line: entre headline e supporting text, 64px × 3px
- Máximo de texto: supporting text não pode overflow do slide

---

## Especificações por Variante de Fundo

### Dark (`background: #0e2f73`)
```css
background: #0e2f73;
color: #ffffff;
/* Logo */ color: #ffffff;
/* Accent words */ color: #2669bf; font-weight: 700;
/* Divider */ background: #2669bf;
/* Slide number */ color: rgba(255,255,255,0.4);
```

### Light (`background: #f2f2f2`)
```css
background: #f2f2f2;
color: #0d0d0d;
/* Logo */ color: #2669bf;
/* Accent words */ color: #2669bf; font-weight: 700;
/* Divider */ background: #0e2f73;
/* Slide number */ color: rgba(13,13,13,0.4);
```

### Accent (`background: #2669bf`)
```css
background: #2669bf;
color: #ffffff;
/* Logo */ color: #ffffff;
/* Accent words */ color: #ffffff; font-weight: 700;
/* Divider */ background: rgba(255,255,255,0.35);
/* Slide number */ color: rgba(255,255,255,0.4);
```

---

## HTML Template Base

Use como ponto de partida para todos os slides de conteúdo (slides 2 a N-1):

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600;700;800;900&family=Barlow:wght@300;400;600&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { width: 1080px; height: 1080px; overflow: hidden; }

    .slide {
      width: 1080px;
      height: 1080px;
      padding: 72px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* Variantes de fundo */
    .slide.dark   { background: #0e2f73; color: #ffffff; }
    .slide.light  { background: #f2f2f2; color: #0d0d0d; }
    .slide.accent { background: #2669bf; color: #ffffff; }

    /* Header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .logo {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 900;
      font-size: 30px;
      letter-spacing: 6px;
    }
    .slide.dark  .logo { color: #ffffff; }
    .slide.light .logo { color: #2669bf; }
    .slide.accent .logo { color: #ffffff; }

    .slide-num {
      font-family: 'Barlow', sans-serif;
      font-weight: 300;
      font-size: 20px;
    }
    .slide.dark   .slide-num { color: rgba(255,255,255,0.4); }
    .slide.light  .slide-num { color: rgba(13,13,13,0.4); }
    .slide.accent .slide-num { color: rgba(255,255,255,0.4); }

    /* Content */
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 32px;
    }

    .headline {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: 60px;
      line-height: 1.05;
      text-transform: uppercase;
    }

    .divider {
      width: 64px;
      height: 3px;
      border-radius: 2px;
      flex-shrink: 0;
    }
    .slide.dark   .divider { background: #2669bf; }
    .slide.light  .divider { background: #0e2f73; }
    .slide.accent .divider { background: rgba(255,255,255,0.35); }

    .supporting {
      font-family: 'Barlow', sans-serif;
      font-weight: 300;
      font-size: 29px;
      line-height: 1.7;
    }

    /* Accent keywords */
    .slide.dark   .accent-kw { color: #2669bf; font-weight: 700; }
    .slide.light  .accent-kw { color: #2669bf; font-weight: 700; }
    .slide.accent .accent-kw { color: #ffffff; font-weight: 700; }
  </style>
</head>
<body>
  <div class="slide [dark|light|accent]">
    <div class="header">
      <div class="logo">ATRAE</div>
      <div class="slide-num">0N / 0N</div>
    </div>
    <div class="content">
      <h2 class="headline">[HEADLINE EM UPPERCASE]</h2>
      <div class="divider"></div>
      <p class="supporting">
        Texto de suporte com <span class="accent-kw">palavras em destaque</span> aqui.
      </p>
    </div>
  </div>
</body>
</html>
```

---

## Slide 1 — Cover (Variação Especial)

O slide de capa usa headline maior, sem supporting text longo, e o conteúdo fica alinhado ao rodapé:

```html
<div class="slide dark">
  <div class="header">
    <div class="logo">ATRAE</div>
  </div>
  <div class="content" style="justify-content: flex-end; padding-bottom: 32px; gap: 24px;">
    <div class="divider"></div>
    <h1 class="headline" style="font-size: 82px; line-height: 1.0;">
      [TÍTULO DO CARROSSEL]
    </h1>
  </div>
</div>
```

---

## Slide CTA — Último Slide (Variação Especial)

O slide de CTA sempre usa variante `accent` com conteúdo centralizado e headline grande:

```html
<div class="slide accent">
  <div class="header">
    <div class="logo">ATRAE</div>
  </div>
  <div class="content" style="justify-content: center; gap: 40px;">
    <h2 class="headline" style="font-size: 68px;">[AÇÃO DO CTA]</h2>
    <div class="divider"></div>
    <p class="supporting">[O que o usuário ganha ao agir]</p>
  </div>
</div>
```

---

## Regras de Design

1. **1080×1080px é inegociável** — `body` e `.slide` sempre com `width: 1080px; height: 1080px; overflow: hidden`
2. **Logo sempre presente** — Canto superior esquerdo, cor correta para o fundo
3. **Máximo 3 accent keywords por slide** — Destaque escasso tem mais valor
4. **Headline sempre em uppercase** — `text-transform: uppercase` no CSS
5. **Supporting text em sentence case** — Nunca uppercase; facilita leitura rápida
6. **Nenhum overflow** — Se o texto não cabe, truncar com "..." e documentar
7. **Fundo único por slide** — Nunca misturar variantes ou adicionar gradientes além do template
