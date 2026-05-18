# Memória do Squad — Narrativas Imortais

## Voz da Narradora (Eco)

- **Voz usada**: `pt_BR-faber-medium` (Piper TTS, masculina, narrativa)
- **Engine TTS**: Piper (local, `~/.venvs/piper`)
- **Venv**: `~/.venvs/piper`
- **Idioma**: pt-BR
- **Qualidade**: aprovada no episódio 01

## Episódios Produzidos

### Episódio 01 — A Metamorfose (Kafka)
- **run_id:** 2026-04-14-224302
- **Título:** A Metamorfose: o pesadelo de Kafka que você já viveu
- **Ângulo:** "O que Kafka nunca nos diz — e por que o silêncio é a parte mais assustadora do livro"
- **Cenas:** 10 | **Status:** Concluído ✓
- **Output:** `squads/narrativas-imortais/output/2026-04-14-224302/`

## Preferências de Volume da Fogueira

- **Padrão aprovado**: volume=0.12 (~-20dB) — suave, quase imperceptível
- **ffmpeg path**: `/opt/homebrew/bin/ffmpeg` (Homebrew, Apple Silicon M-series)

## Imagens

- **Abordagem**: Manual — usuário gera com ferramenta preferida (Midjourney, Leonardo.ai, etc.)
- **Prompts**: Gustave escreve em inglês, estilo Gustave Doré + chiaroscuro dramático
- **Formato**: 16:9, mínimo 1280×720
- **Nomes**: cena_XX.png ou cena_XX_imagem.jpg (ambos aceitos)

## Obras Sugeridas para Próximos Episódios

- Fiódor Dostoiévski — Crime e Castigo
- Edgar Allan Poe — O Corvo
- Friedrich Nietzsche — Assim Falou Zaratustra
- Mary Shelley — Frankenstein
- Albert Camus — O Estrangeiro
- Oscar Wilde — O Retrato de Dorian Gray

## Aprendizados e Ajustes

- Piper TTS roda a ~217x realtime — geração de 10 cenas é rápida (~2 min no total)
- Imagens locais (diffusers/AUTOMATIC1111) muito lentas no macOS pré-release — manter abordagem manual
- Nomes de arquivo de imagem podem variar (cena_XX.png ou cena_XX_imagem.jpg) — ffmpeg aceita ambos
