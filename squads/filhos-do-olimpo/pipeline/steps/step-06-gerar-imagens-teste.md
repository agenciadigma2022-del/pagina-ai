---
agent: apolo
execution: inline
skills:
  - image-generator
---

# Step 06: Gerar Imagens (Modo Test)

## Agente
**Apolo** — Ilustrador, Visões do Olimpo

## Input
- `squads/filhos-do-olimpo/output/{run_id}/cenas.yaml` — todas as cenas com prompts de imagem
- `squads/filhos-do-olimpo/pipeline/data/visual-style.md` — guia visual do canal

## Instruções

Apolo deve gerar uma imagem para cada cena em **modo test** (baixo custo, para aprovação).

### Processo

1. **Ler `cenas.yaml`** e extrair a lista de cenas

2. **Criar pasta de imagens** se não existir:
   ```
   squads/filhos-do-olimpo/output/{run_id}/imagens/test/
   ```

3. **Para cada cena** (em ordem):
   a. Pegar o campo `prompt_imagem` da cena
   b. **Enriquecer o prompt** adicionando os elementos visuais padrão do canal:
      ```
      [prompt_imagem], ancient greek oil painting style, dramatic chiaroscuro lighting, dark atmospheric background, deep navy blues and blacks, golden rim light accents, cinematic composition, highly detailed painterly texture, epic scale, 16:9 landscape aspect ratio
      ```
   c. Executar:
      ```bash
      python3 skills/image-generator/scripts/generate.py \
        --prompt "[prompt enriquecido]" \
        --output "squads/filhos-do-olimpo/output/{run_id}/imagens/test/cena_XX_imagem.jpg" \
        --mode test
      ```
   d. Confirmar: "✓ cena_XX_imagem.jpg gerado (test)"

4. **Sumário final**:
   ```
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🎨 Imagens geradas (test): X/Y cenas
   📁 Pasta: squads/filhos-do-olimpo/output/{run_id}/imagens/test/
   
   Custo estimado: ~R$ [X × 0.02]
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ```

### Nota de custo
Modo test custa ~R$0.01-0.02 por imagem. Para 10 cenas: ~R$0.10-0.20 total.

## Veto Conditions

- VETO se algum prompt não estiver em inglês
- VETO se os arquivos não estiverem na pasta `test/`
- VETO se a nomenclatura não seguir o padrão `cena_XX_imagem.jpg`
- VETO se o prompt não incluir os elementos visuais do canal (estilo, iluminação, atmosfera)
