---
agent: gustave
execution: inline
---

# Step 06: Gerar Prompts de Imagem

## Agente
**Gustave** — Diretor de Arte

## Input
- `squads/narrativas-imortais/output/{run_id}/cenas.yaml` — todas as cenas com prompts base
- `squads/narrativas-imortais/pipeline/data/visual-style.md` — guia visual do canal

## Instruções

Gustave deve ler cada cena e produzir um arquivo Markdown com todos os prompts de imagem enriquecidos, prontos para uso em qualquer ferramenta de geração (Midjourney, Leonardo.ai, Adobe Firefly, DALL-E, etc.).

### Processo

1. **Ler `visual-style.md`** para carregar o estilo base correto para o gênero da obra

2. **Criar pasta de output**:
   ```
   squads/narrativas-imortais/output/{run_id}/imagens/
   ```

3. **Para cada cena**, produzir:
   - **Prompt principal** em inglês — enriquecido com estilo, iluminação e composição do canal
   - **Prompt negativo** padrão do canal
   - **Nota de direção** em português — uma frase sobre a intenção visual
   - **Nome do arquivo de saída** — `cena_XX_imagem.jpg`

4. **Salvar o arquivo consolidado** em:
   `squads/narrativas-imortais/output/{run_id}/prompts-imagens.md`

5. **Apresentar sumário** com instruções de uso:
   ```
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🎨 Prompts de imagem gerados: X cenas
   📄 Arquivo: squads/narrativas-imortais/output/{run_id}/prompts-imagens.md

   Como usar:
   1. Abra o arquivo prompts-imagens.md
   2. Para cada cena, copie o prompt e gere a imagem na sua ferramenta preferida
      (Midjourney, Leonardo.ai, Adobe Firefly, DALL-E, Canva AI...)
   3. Configure aspect ratio 16:9 na ferramenta antes de gerar
   4. Salve cada imagem com o nome indicado (cena_01_imagem.jpg, etc.)
   5. Coloque todos os arquivos em:
      squads/narrativas-imortais/output/{run_id}/imagens/
   6. Quando todas as imagens estiverem salvas, avise para continuar o pipeline
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ```

## Veto Conditions

- VETO se algum prompt estiver em português
- VETO se o prompt negativo estiver ausente em alguma cena
- VETO se o aspect ratio 16:9 não estiver mencionado
- VETO se o arquivo `prompts-imagens.md` não for salvo
