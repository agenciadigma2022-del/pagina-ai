---
agent: hestia
execution: inline
---

# Step 10: Mixar Som de Fogueira

## Agente
**Héstia** — Sonoplasta

## Input
- `squads/narrativas-imortais/output/{run_id}/audio/cena_XX_narracao.mp3` — todas as narrações
- Volume da fogueira escolhido no checkpoint anterior (step-09)

## Instruções

Héstia deve criar o áudio final de cada cena: narração em PT-BR + fogueira suave ao fundo.

### Processo

1. **Verificar se ffmpeg está instalado**:
   ```bash
   /opt/homebrew/bin/ffmpeg -version 2>/dev/null || ffmpeg -version 2>/dev/null || echo "ffmpeg não encontrado"
   ```
   - Usar sempre o path completo `/opt/homebrew/bin/ffmpeg` (Apple Silicon via Homebrew)
   - Se não estiver: informar ao usuário com instruções de instalação e listar os arquivos disponíveis para mixagem manual com qualquer editor de áudio (Audacity, Adobe Audition, GarageBand)
   - Se estiver: continuar

2. **Definir volume da fogueira** com base na escolha do usuário no checkpoint:
   - Padrão (~-20dB): `volume=0.12`
   - Mínimo (~-25dB): `volume=0.08`
   - Levemente mais alto (~-15dB): `volume=0.18`

3. **Gerar o som de fogueira** usando ElevenLabs:
   ```
   mcp__ElevenLabs_Player__generate_sound_effect
   Prompt: "Calm crackling campfire, wood burning slowly, gentle fire sounds, ambient night atmosphere, peaceful and warm, no wind, subtle and soothing, low volume background sound"
   Duration: 30 seconds
   ```
   Salvar em: `squads/narrativas-imortais/output/{run_id}/audio/fogueira.mp3`

4. **Para cada narração** (cena_01 até cena_N):
   ```bash
   /opt/homebrew/bin/ffmpeg -i squads/narrativas-imortais/output/{run_id}/audio/cena_XX_narracao.mp3 \
          -stream_loop -1 -i squads/narrativas-imortais/output/{run_id}/audio/fogueira.mp3 \
          -filter_complex "[1:a]volume=0.12[bg];[0:a][bg]amix=inputs=2:duration=first:dropout_transition=2" \
          -c:a libmp3lame -q:a 2 \
          squads/narrativas-imortais/output/{run_id}/audio/cena_XX_final.mp3
   ```
   (substituir `volume=0.12` pelo valor escolhido no checkpoint)

5. **Confirmar cada mixagem**: "✓ cena_XX_final.mp3 — narração + fogueira"

6. **Sumário final**:
   ```
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🔥 Mixagem concluída — Narrativas Imortais

   📁 Arquivos finais em:
      squads/narrativas-imortais/output/{run_id}/audio/

   Áudios com fogueira:
   ✓ cena_01_final.mp3
   ✓ cena_02_final.mp3
   ...

   Volume da fogueira: [nível escolhido]

   📋 Próximos passos para montagem do vídeo:
   • Imagens: squads/narrativas-imortais/output/{run_id}/imagens/producao/
   • Áudios finais: squads/narrativas-imortais/output/{run_id}/audio/cena_XX_final.mp3
   • Roteiro: squads/narrativas-imortais/output/{run_id}/roteiro.md
   • Cenas: squads/narrativas-imortais/output/{run_id}/cenas.yaml

   Para cada cena, importe no editor de vídeo:
   → cena_XX_imagem.jpg (duração = duração do áudio)
   → cena_XX_final.mp3 (narração + fogueira)

   Editores compatíveis: DaVinci Resolve (grátis), CapCut, Premiere, iMovie
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ```

## Veto Conditions

- VETO se a fogueira não for gerada antes das mixagens
- VETO se os arquivos finais não seguirem o padrão `cena_XX_final.mp3`
- VETO se algum arquivo de narração não tiver sido mixado (a menos que tenha falhado por erro reportado)
- VETO se o sumário final não incluir as instruções de montagem do vídeo
