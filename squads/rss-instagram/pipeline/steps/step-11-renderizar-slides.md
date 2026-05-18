---
execution: inline
agent: duda-design
inputFile: squads/rss-instagram/output/slides-html/
outputFile: squads/rss-instagram/output/slides/
---

# Step 11: Renderizar Slides HTML para PNG

## Context Loading

Load this information before executing:
- Caminho dos arquivos HTML: `squads/rss-instagram/output/slides-html/`
- Destino dos PNGs: `squads/rss-instagram/output/slides/`
- Viewport requerido: exatamente **1080×1080px**

## Instructions

### Process

1. Confirme que os arquivos HTML existem em `output/slides-html/` (resultado do step-10)
2. Use `browser_run_code` com o código Playwright Node.js abaixo para renderizar todos os slides
3. Para cada `slide-0N.html`:
   - Abrir via `file://` protocol
   - Definir viewport 1080×1080px
   - Aguardar `networkidle` (fontes Google Fonts carregadas)
   - Aguardar 500ms adicionais (margem para renderização de fontes web)
   - Tirar screenshot com clip 1080×1080px
   - Salvar como `output/slides/slide-0N.png`
4. Verificar tamanho de cada PNG (mínimo 10KB — arquivos menores indicam render em branco)
5. Confirmar a entrega listando cada PNG gerado com tamanho em KB

## Code

```javascript
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE = '/Users/jonatasnunes/squads/rss-instagram/output';
const htmlDir = path.join(BASE, 'slides-html');
const outputDir = path.join(BASE, 'slides');

fs.mkdirSync(outputDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1080, height: 1080 }
});
const page = await context.newPage();

const files = fs.readdirSync(htmlDir)
  .filter(f => f.startsWith('slide-') && f.endsWith('.html'))
  .sort();

const results = [];
for (const file of files) {
  await page.goto(`file://${path.join(htmlDir, file)}`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);

  const pngName = file.replace('.html', '.png');
  const pngPath = path.join(outputDir, pngName);
  await page.screenshot({
    path: pngPath,
    clip: { x: 0, y: 0, width: 1080, height: 1080 }
  });

  const { size } = fs.statSync(pngPath);
  const sizeKB = Math.round(size / 1024);
  if (sizeKB < 10) throw new Error(`${pngName} tem ${sizeKB}KB — possível render em branco`);
  results.push(`${pngName}: ${sizeKB}KB ✅`);
}

await browser.close();
console.log('Slides renderizados:\n' + results.join('\n'));
```

## Output Format

```
Renderização concluída — N slides

output/slides/
├── slide-01.png  [XXX KB ✅]
├── slide-02.png  [XXX KB ✅]
├── ...
└── slide-0N.png  [XXX KB ✅]

Prontos para revisão visual no step-12.
```

## Output Example

```
Renderização concluída — 8 slides

output/slides/
├── slide-01.png  [284 KB ✅]
├── slide-02.png  [198 KB ✅]
├── slide-03.png  [312 KB ✅]
├── slide-04.png  [267 KB ✅]
├── slide-05.png  [221 KB ✅]
├── slide-06.png  [245 KB ✅]
├── slide-07.png  [189 KB ✅]
└── slide-08.png  [278 KB ✅]

Prontos para revisão visual no step-12.
```

## Veto Conditions

Reject and redo if ANY are true:
1. Qualquer PNG tem tamanho menor que 10KB (render em branco ou corrompido)
2. Número de PNGs gerados diferente do número de slides no carousel-draft.md

## Quality Criteria

- [ ] Todos os PNGs gerados em output/slides/ sem erros
- [ ] Cada PNG tem tamanho > 10KB
- [ ] Fontes aguardadas com networkidle + 500ms antes do screenshot
- [ ] Número de PNGs = número de slides no carousel-draft.md
