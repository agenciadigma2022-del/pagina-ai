---
agent: hades
execution: inline
---

# Step 10: Mixar Som de Fogueira

## Agente
**Hades** — Sonoplasta, O Som das Sombras

## Input
- `squads/filhos-do-olimpo/output/{run_id}/audio/cena_XX_narracao.mp3` — todas as narrações
- Preferência de volume do checkpoint anterior (step-09)

## Instruções

Hades deve criar o áudio final de cada cena: narração + fogueira ao fundo.

### Processo

1. **Verificar se ffmpeg está instalado**:
   ```bash
   ffmpeg -version
   ```
   - Se não estiver: informar ao usuário e listar os arquivos disponíveis para mixagem manual
   - Se estiver: continuar

2. **Definir volume da fogueira** com base na escolha do usuário no checkpoint:
   - Volume padrão (~-20dB): `volume=0.12`
   - Mais suave (~-25dB): `volume=0.08`
   - Um pouco mais alto (~-15dB): `volume=0.18`

3. **Gerar o som de fogueira** usando ElevenLabs:
   ```
   mcp__ElevenLabs_Player__generate_sound_effect
   Prompt: "Calm crackling campfire, wood burning slowly, gentle fire sounds, ambient night atmosphere, peaceful and warm, no wind, subtle and soothing"
   Duration: 30 seconds
   ```
   Salvar em: `squads/filhos-do-olimpo/output/{run_id}/audio/fogueira.mp3`

4. **Para cada narração** (cena_01 até cena_N):
   ```bash
   ffmpeg -i squads/filhos-do-olimpo/output/{run_id}/audio/cena_XX_narracao.mp3 \
          -stream_loop -1 -i squads/filhos-do-olimpo/output/{run_id}/audio/fogueira.mp3 \
          -filter_complex "[1:a]volume=0.12[bg];[0:a][bg]amix=inputs=2:duration=first:dropout_transition=2" \
          -c:a libmp3lame -q:a 2 \
          squads/filhos-do-olimpo/output/{run_id}/audio/cena_XX_final.mp3
   ```
   (substituir `volume=0.12` pelo valor escolhido no checkpoint)

5. **Confirmar cada mixagem**: "✓ cena_XX_final.mp3 — narração + fogueira"

6. **Sumário final**:
   ```
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🔥 Mixagem concluída!
   
   📁 Arquivos finais em:
      squads/filhos-do-olimpo/output/{run_id}/audio/
   
   Narrações com fogueira:
   ✓ cena_01_final.mp3
   ✓ cena_02_final.mp3
   ...
   
   Volume da fogueira: [nível escolhido]
   
   📋 Próximos passos para montagem do vídeo:
   • Imagens: squads/filhos-do-olimpo/output/{run_id}/imagens/
   • Áudios finais: squads/filhos-do-olimpo/output/{run_id}/audio/cena_XX_final.mp3
   • Roteiro: squads/filhos-do-olimpo/output/{run_id}/roteiro.md
   • Cenas: squads/filhos-do-olimpo/output/{run_id}/cenas.yaml
   
   Use um editor de vídeo (DaVinci Resolve, Premiere, CapCut) para montar:
   cena_XX_imagem.jpg + cena_XX_final.mp3 → cena completa
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ```

## Veto Conditions

- VETO se a fogueira não for gerada antes das mixagens
- VETO se os arquivos finais não seguirem o padrão `cena_XX_final.mp3`
- VETO se algum arquivo de narração não tiver sido mixado (a menos que tenha falhado por erro reportado)
- VETO se o sumário final não incluir as instruções de montagem do vídeo
