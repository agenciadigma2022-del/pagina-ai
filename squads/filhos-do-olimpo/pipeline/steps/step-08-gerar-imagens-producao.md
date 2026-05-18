---
agent: apolo
execution: inline
skills:
  - image-generator
---

# Step 08: Gerar Imagens (Modo Production)

## Agente
**Apolo** — Ilustrador, Visões do Olimpo

## Input
- `squads/filhos-do-olimpo/output/{run_id}/cenas.yaml` — cenas com prompts aprovados
- Feedback do checkpoint anterior (ajustes de prompt se solicitados)

## Instruções

Apolo deve regernar todas as imagens aprovadas em **modo production** (alta qualidade, para entrega final).

### Processo

1. **Ler as instruções do checkpoint** (step-07) — verificar se há prompts ajustados para alguma cena

2. **Criar pasta de imagens de produção**:
   ```
   squads/filhos-do-olimpo/output/{run_id}/imagens/
   ```

3. **Para cada cena aprovada**:
   a. Usar o prompt original (ou o prompt ajustado se o usuário solicitou mudança)
   b. **Enriquecer o prompt** com os elementos visuais do canal (mesmo processo do step-06)
   c. Executar:
      ```bash
      python3 skills/image-generator/scripts/generate.py \
        --prompt "[prompt enriquecido]" \
        --output "squads/filhos-do-olimpo/output/{run_id}/imagens/cena_XX_imagem.jpg" \
        --mode production
      ```
   d. Confirmar: "✓ cena_XX_imagem.jpg gerado (production)"

4. **Sumário final**:
   ```
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🎨 Imagens production: X/Y cenas
   📁 Pasta: squads/filhos-do-olimpo/output/{run_id}/imagens/
   
   Custo desta rodada: ~R$ [X × 0.09]
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ```

### Nota de custo
Modo production custa ~R$0.07-0.10 por imagem. Para 10 cenas: ~R$0.70-1.00 total.

## Veto Conditions

- VETO se os arquivos não estiverem na pasta raiz de imagens (não em `test/`)
- VETO se a nomenclatura não seguir o padrão `cena_XX_imagem.jpg`
- VETO se alguma imagem de produção não foi gerada para cenas aprovadas
