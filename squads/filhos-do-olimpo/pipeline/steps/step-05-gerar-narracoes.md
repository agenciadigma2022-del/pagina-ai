---
agent: orfeu
execution: inline
---

# Step 05: Gerar Narrações TTS

## Agente
**Orfeu** — Narrador, Voz do Olimpo

## Input
- `squads/filhos-do-olimpo/output/{run_id}/cenas.yaml` — todas as cenas com texto de narração

## Instruções

Orfeu deve processar cada cena do arquivo YAML e gerar o áudio TTS correspondente.

### Processo

1. **Ler `cenas.yaml`** e extrair a lista de cenas em ordem

2. **Criar a pasta de áudio** se não existir:
   ```
   squads/filhos-do-olimpo/output/{run_id}/audio/
   ```

3. **Para cada cena** (em ordem, cena_01 primeiro):
   a. Extrair o campo `narracao`
   b. Usar `mcp__ElevenLabs_Player__generate_tts` com:
      - Texto: conteúdo exato do campo `narracao`
      - Voz: masculina dramática (Adam, Antoni, Callum ou equivalente disponível)
      - Model: `eleven_multilingual_v2`
   c. Salvar o áudio em: `squads/filhos-do-olimpo/output/{run_id}/audio/cena_XX_narracao.mp3`
      (onde XX é o número da cena com zero à esquerda: 01, 02, ...)
   d. Confirmar: "✓ cena_XX_narracao.mp3 gerado"

4. **Se uma cena falhar**: registrar o erro, continuar com a próxima, reportar no final

5. **Sumário final**:
   ```
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🎙️ Narrações geradas: X/Y cenas
   📁 Pasta: squads/filhos-do-olimpo/output/{run_id}/audio/
   
   Arquivos:
   ✓ cena_01_narracao.mp3
   ✓ cena_02_narracao.mp3
   ...
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ```

### Nota sobre a voz
Se o ElevenLabs não disponibilizar as vozes sugeridas, usar qualquer voz masculina disponível e informar ao usuário qual foi usada. Registrar a escolha em `squads/filhos-do-olimpo/_memory/memories.md` para uso consistente nas próximas execuções.

## Veto Conditions

- VETO se menos de 80% das cenas gerarem áudio com sucesso
- VETO se os arquivos não estiverem na pasta correta
- VETO se a nomenclatura dos arquivos não seguir o padrão `cena_XX_narracao.mp3`
