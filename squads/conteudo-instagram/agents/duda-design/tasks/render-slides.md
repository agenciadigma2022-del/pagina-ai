---
task: "Render HTML Slides to PNG"
order: 2
input: |
  - html_slides: Arquivos HTML/CSS de cada slide (de output/slides-html/)
output: |
  - slide_images: Imagens PNG 1080×1080px de cada slide
  - saved_to: squads/conteudo-instagram/output/slides/
---

# Render HTML Slides to PNG

Esta tarefa usa Playwright para renderizar cada arquivo HTML em uma imagem PNG 1080×1080px. Cada slide é aberto em um viewport exato de 1080×1080, aguarda o carregamento das fontes web, e então tira o screenshot. As imagens ficam prontas para revisão visual e publicação.

## Process

1. Confirme que os arquivos HTML existem em `output/slides-html/` (listados pela tarefa anterior)
2. Use `browser_run_code` com Playwright Node.js para renderizar todos os slides de uma vez:
   - Abrir cada `slide-0N.html` com `file://` protocol
   - Definir viewport exato: `{ width: 1080, height: 1080 }`
   - Aguardar `networkidle` para garantir que as fontes Google Fonts carregaram
   - Aguardar 500ms adicionais como margem para renderização de fontes web
   - Tirar screenshot com clip `{ x: 0, y: 0, width: 1080, height: 1080 }`
   - Salvar como `output/slides/slide-0N.png`
3. Após renderizar todos, confirme a entrega listando cada PNG com tamanho em KB
4. Verificar que nenhum PNG tem menos de 10KB (indica render em branco ou corrompido)

## Code

```javascript
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE = '/Users/jonatasnunes/squads/conteudo-instagram/output';
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
  const htmlPath = path.join(htmlDir, file);
  await page.goto(`file://${htmlPath}`);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500); // margem para fontes web

  const pngName = file.replace('.html', '.png');
  const pngPath = path.join(outputDir, pngName);
  await page.screenshot({
    path: pngPath,
    clip: { x: 0, y: 0, width: 1080, height: 1080 }
  });

  const { size } = fs.statSync(pngPath);
  const sizeKB = Math.round(size / 1024);
  if (sizeKB < 10) {
    throw new Error(`${pngName} tem apenas ${sizeKB}KB — possível render em branco`);
  }
  results.push(`${pngName}: ${sizeKB}KB ✅`);
}

await browser.close();
console.log('Renderização concluída:\n' + results.join('\n'));
```

## Output Format

```
Renderização concluída — N slides

output/slides/
├── slide-01.png  [XXX KB ✅]
├── slide-02.png  [XXX KB ✅]
├── slide-03.png  [XXX KB ✅]
├── ...
└── slide-0N.png  [XXX KB ✅]
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

Todos os slides renderizados com sucesso. Prontos para revisão visual.
```

## Quality Criteria

- [ ] Número de PNGs gerados = número de arquivos HTML em slides-html/
- [ ] Todos os PNGs têm tamanho > 10KB (sem renders em branco)
- [ ] Fontes carregadas antes do screenshot (networkidle + 500ms)
- [ ] Todos os arquivos salvos em output/slides/

## Veto Conditions

Reject and redo if ANY are true:
1. Qualquer PNG tem tamanho menor que 10KB (indica render em branco ou corrompido)
2. Número de PNGs gerados diferente do número de slides no carousel-draft.md
