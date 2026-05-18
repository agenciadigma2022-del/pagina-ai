---
agent: eco
execution: inline
---

# Step 05: Gerar Narrações TTS (Local — Piper)

## Agente
**Eco** — Narradora

## Input
- `squads/narrativas-imortais/output/{run_id}/cenas.yaml` — todas as cenas com texto de narração
- `squads/narrativas-imortais/_memory/memories.md` — voz usada em episódios anteriores (se houver)

## Instruções

Eco deve processar cada cena do arquivo YAML e gerar o áudio TTS via Piper TTS local.

### Pré-verificação (obrigatória antes de começar)

```bash
# Verificar dependências
source ~/.venvs/piper/bin/activate 2>/dev/null && echo "✓ venv Piper OK" || echo "✗ venv não encontrado"
python3 -m piper --help > /dev/null 2>&1 && echo "✓ Piper OK" || echo "✗ Piper não instalado"
ffmpeg -version > /dev/null 2>&1 && echo "✓ ffmpeg OK" || echo "✗ ffmpeg não instalado"
ls ~/piper-voices/pt_BR-faber-medium.onnx 2>/dev/null && echo "✓ Voz PT-BR OK" || echo "✗ Voz não encontrada"
```

Se alguma dependência falhar, exibir:
```
⚠️ Dependência faltando. Consulte:
squads/narrativas-imortais/pipeline/data/setup-local.md
```

### Processo

1. **Verificar memories.md** — se há voz registrada de episódios anteriores, usar a mesma

2. **Definir voz** (padrão se não houver registro):
   - Voz: `~/piper-voices/pt_BR-faber-medium.onnx`

3. **Criar a pasta de áudio**:
   ```bash
   mkdir -p squads/narrativas-imortais/output/{run_id}/audio/
   ```

4. **Para cada cena** (em ordem, cena_01 primeiro):

   a. Extrair o campo `narracao` da cena
   
   b. Salvar texto em arquivo temporário (evita problemas com aspas especiais):
   ```bash
   cat > /tmp/piper_narracao.txt << 'ENDOFTEXT'
   [conteúdo exato do campo narracao]
   ENDOFTEXT
   ```
   
   c. Gerar WAV com Piper:
   ```bash
   source ~/.venvs/piper/bin/activate
   python3 -m piper \
     --model ~/piper-voices/pt_BR-faber-medium.onnx \
     --input_file /tmp/piper_narracao.txt \
     --output_file /tmp/cena_XX_temp.wav
   ```
   
   d. Converter WAV → MP3:
   ```bash
   /opt/homebrew/bin/ffmpeg -y -i /tmp/cena_XX_temp.wav \
     squads/narrativas-imortais/output/{run_id}/audio/cena_XX_narracao.mp3
   ```
   
   e. Limpar arquivo temporário:
   ```bash
   rm -f /tmp/cena_XX_temp.wav /tmp/piper_narracao.txt
   ```
   
   f. Confirmar: "✓ cena_XX_narracao.mp3 gerado"

5. **Se uma cena falhar**: registrar o erro, continuar com a próxima, reportar no final

6. **Registrar voz usada** em `squads/narrativas-imortais/_memory/memories.md`:
   ```markdown
   ## Voz da Narradora (Eco)
   - **Voz usada**: pt_BR-faber-medium
   - **Modelo**: Piper TTS (local)
   - **Idioma**: PT-BR
   ```

7. **Sumário final**:
   ```
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   🎙️ Narrações geradas: X/Y cenas
   🗣️ Voz: pt_BR-faber-medium (Piper TTS local)
   📁 Pasta: squads/narrativas-imortais/output/{run_id}/audio/

   Arquivos:
   ✓ cena_01_narracao.mp3
   ✓ cena_02_narracao.mp3
   ...
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ```

## Veto Conditions

- VETO se as dependências (Piper, ffmpeg, voz PT-BR) não passarem na pré-verificação
- VETO se menos de 80% das cenas gerarem áudio com sucesso
- VETO se os arquivos não estiverem na pasta correta
- VETO se a nomenclatura não seguir o padrão `cena_XX_narracao.mp3`
- VETO se arquivos WAV temporários restarem no diretório de output
