---
agent: virgilio
execution: inline
outputFile: squads/narrativas-imortais/output/{run_id}/cenas.yaml
---

# Step 04: Dividir em Cenas

## Agente
**Virgílio** — Diretor de Cenas

## Input
- `squads/narrativas-imortais/output/{run_id}/roteiro.md` — roteiro aprovado
- `squads/narrativas-imortais/pipeline/data/visual-style.md` — guia visual do canal
- `squads/narrativas-imortais/pipeline/data/episodio-brief.md` — número de cenas definido no step 01

## Instruções

Virgílio deve dividir o roteiro aprovado em cenas individuais e gerar o arquivo YAML estruturado.

### Processo

1. **Ler o roteiro** e identificar os blocos naturais de conteúdo (mudanças de tema, transições de seção, momentos com imagem sugerida)

2. **Criar entre 8 e 12 cenas** conforme definido no brief (respeitar o número escolhido no step 01)

3. **Para cada cena, produzir:**
   ```yaml
   - cena_id: cena_01
     secao: gancho  # gancho | contexto | obra | legado
     narracao: |
       [Texto exato a ser narrado — adaptado para fala, sem construções artificiais]
     prompt_imagem: >
       [Descrição em inglês da imagem — setting, personagem, mood, iluminação, estilo do canal]
     atmosfera: [Uma frase descrevendo a emoção da cena]
   ```

4. **Enriquecer cada prompt_imagem** com os elementos visuais padrão do canal (ver visual-style.md)

5. **Verificar continuidade visual** — cenas da mesma seção devem ter paleta consistente

### Formato de Output

```yaml
episodio:
  obra: "[título da obra]"
  autor: "[nome do autor]"
  run_id: "{run_id}"
  total_cenas: X

cenas:
  - cena_id: cena_01
    secao: gancho
    narracao: |
      [texto narrado]
    prompt_imagem: >
      [prompt em inglês]
    atmosfera: "[descrição da emoção]"

  - cena_id: cena_02
    ...
```

Salvar em: `squads/narrativas-imortais/output/{run_id}/cenas.yaml`

## Veto Conditions

- VETO se alguma cena tiver mais de 200 palavras de narração
- VETO se algum prompt_imagem estiver em português
- VETO se o número de cenas não corresponder ao definido no brief
- VETO se alguma cena não tiver todos os campos obrigatórios (cena_id, secao, narracao, prompt_imagem, atmosfera)
