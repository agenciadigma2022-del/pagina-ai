# Setup Local — Narrativas Imortais

Guia de instalação para geração local de áudio e imagens no macOS com Apple Silicon.

---

## 1. ffmpeg (mixagem de áudio)

```bash
# Instalar Homebrew (se não tiver)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar ffmpeg
brew install ffmpeg

# Verificar
ffmpeg -version
```

---

## 2. Piper TTS (narração local em PT-BR)

### Instalação

```bash
# Criar ambiente Python (recomendado)
python3 -m venv ~/.venvs/piper
source ~/.venvs/piper/bin/activate

# Instalar piper-tts
pip install piper-tts

# Verificar
python3 -c "import piper; print('✓ Piper instalado')"
```

### Baixar voz PT-BR

```bash
# Criar pasta para os modelos
mkdir -p ~/piper-voices

# Baixar voz PT-BR faber-medium (recomendada para narração)
cd ~/piper-voices
wget https://huggingface.co/rhasspy/piper-voices/resolve/main/pt/pt_BR/faber/medium/pt_BR-faber-medium.onnx
wget https://huggingface.co/rhasspy/piper-voices/resolve/main/pt/pt_BR/faber/medium/pt_BR-faber-medium.onnx.json

# Alternativa: voz Edresson (mais emocional)
wget https://huggingface.co/rhasspy/piper-voices/resolve/main/pt/pt_BR/edresson/low/pt_BR-edresson-low.onnx
wget https://huggingface.co/rhasspy/piper-voices/resolve/main/pt/pt_BR/edresson/low/pt_BR-edresson-low.onnx.json
```

### Teste rápido

```bash
source ~/.venvs/piper/bin/activate
echo "Bem-vindo ao canal Narrativas Imortais." | \
  python3 -m piper \
    --model ~/piper-voices/pt_BR-faber-medium.onnx \
    --output_file /tmp/teste.wav && \
  ffmpeg -y -i /tmp/teste.wav /tmp/teste.mp3 && \
  afplay /tmp/teste.mp3
```

### Vozes disponíveis PT-BR
| Voz | Qualidade | Tipo | Recomendação |
|-----|-----------|------|--------------|
| `pt_BR-faber-medium` | Boa | Masculina | ✓ Narração (padrão) |
| `pt_BR-edresson-low` | Média | Masculina | Opção alternativa |

---

## 3. AUTOMATIC1111 Stable Diffusion WebUI (imagens locais)

### Instalação para Apple Silicon

```bash
# Clonar o repositório
cd ~
git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui.git
cd stable-diffusion-webui

# Executar (instala dependências automaticamente na primeira vez)
# A flag --api ativa a REST API para integração com o squad
./webui.sh --api --medvram

# Na primeira execução, vai demorar ~10-20 minutos para baixar dependências
# Aguardar até ver: "Running on local URL: http://127.0.0.1:7860"
```

### Baixar modelo recomendado (ilustração literária)

```bash
cd ~/stable-diffusion-webui/models/Stable-diffusion/

# DreamShaper XL — ótimo para ilustrações atmosféricas e artísticas
wget -O dreamshaper-xl.safetensors \
  "https://civitai.com/api/download/models/351306?type=Model&format=SafeTensor"

# OU: Baixar via interface web após iniciar o WebUI
# Settings > Model → Model downloader
```

### Flags recomendadas para Apple Silicon (M1/M2/M3/M4)

```bash
# No webui-user.sh, adicionar:
export COMMANDLINE_ARGS="--api --medvram --opt-split-attention"

# Para M1/M2 com 16GB RAM:
export COMMANDLINE_ARGS="--api --medvram"

# Para M3/M4 com 16GB+ RAM:
export COMMANDLINE_ARGS="--api"
```

### Verificar que a API está funcionando

```bash
# Com o WebUI rodando, testar a API:
curl http://127.0.0.1:7860/sdapi/v1/options | python3 -m json.tool | head -5
```

### Iniciar o WebUI (uso diário)

```bash
cd ~/stable-diffusion-webui
./webui.sh --api --medvram

# O squad assume que o WebUI está rodando em http://127.0.0.1:7860
# Deixe rodando em background enquanto executa o pipeline
```

---

## Resumo de Comandos Diários

```bash
# 1. Iniciar o WebUI (deixar rodando)
cd ~/stable-diffusion-webui && ./webui.sh --api --medvram &

# 2. Ativar ambiente Python do Piper
source ~/.venvs/piper/bin/activate

# 3. Rodar o squad
# /opensquad run narrativas-imortais
```

---

## Checklist de Setup

- [ ] Homebrew instalado
- [ ] ffmpeg instalado (`ffmpeg -version`)
- [ ] Ambiente Python criado (`~/.venvs/piper`)
- [ ] Piper TTS instalado (`pip show piper-tts`)
- [ ] Voz PT-BR baixada (`~/piper-voices/pt_BR-faber-medium.onnx`)
- [ ] AUTOMATIC1111 clonado (`~/stable-diffusion-webui/`)
- [ ] Modelo SD baixado (`~/stable-diffusion-webui/models/Stable-diffusion/`)
- [ ] WebUI iniciado e acessível em `http://127.0.0.1:7860`
- [ ] API verificada (`curl http://127.0.0.1:7860/sdapi/v1/options`)
