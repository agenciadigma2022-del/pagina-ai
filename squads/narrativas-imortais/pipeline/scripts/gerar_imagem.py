#!/usr/bin/env python3
"""
Gerador de imagens local para o squad Narrativas Imortais.
Usa diffusers + Apple Silicon MPS (Metal Performance Shaders).

Uso:
  python3 gerar_imagem.py \
    --prompt "sua descrição aqui" \
    --output "caminho/saida.jpg" \
    --mode test

Modos:
  test       — 20 steps, 1280x720  (rápido, para aprovação)
  producao   — 40 steps, 1920x1080 (qualidade máxima)
"""

import argparse
import sys
import os
from pathlib import Path

def main():
    parser = argparse.ArgumentParser(description="Gerar imagem via diffusers (MPS)")
    parser.add_argument("--prompt", required=True, help="Prompt em inglês")
    parser.add_argument("--output", required=True, help="Caminho de saída (.jpg)")
    parser.add_argument("--mode", choices=["test", "producao"], default="test")
    parser.add_argument("--negative-prompt", default=(
        "text, letters, watermark, signature, blurry, low quality, "
        "modern clothing, contemporary, photorealistic, 3d render, "
        "anime, cartoon, ugly, deformed, nsfw"
    ))
    parser.add_argument("--model", default="runwayml/stable-diffusion-v1-5",
                        help="Model ID do HuggingFace")
    args = parser.parse_args()

    try:
        import torch
        from diffusers import StableDiffusionPipeline
    except ImportError:
        print("ERRO: diffusers não instalado.")
        print("Execute: source ~/.venvs/sd/bin/activate && pip install diffusers transformers accelerate torch Pillow")
        sys.exit(1)

    # Configurar device (MPS para Apple Silicon, CPU como fallback)
    if torch.backends.mps.is_available():
        device = "mps"
        print(f"✓ Usando Apple Silicon MPS (Metal)")
    else:
        device = "cpu"
        print("⚠ MPS não disponível, usando CPU (mais lento)")

    # Parâmetros por modo
    # SD 1.5 foi treinado em 512x512.
    # test: 512x512 (rápido, para aprovação — crop 16:9 no editor)
    # producao: 768x512 (mais largo, melhor composição)
    if args.mode == "test":
        steps = 20
        width, height = 512, 512
    else:
        steps = 35
        width, height = 768, 512

    print(f"→ Modo: {args.mode} | Steps: {steps} | Resolução: {width}×{height}")
    print(f"→ Modelo: {args.model}")
    print(f"→ Prompt: {args.prompt[:80]}...")

    # Carregar pipeline (faz cache automático em ~/.cache/huggingface/)
    print("→ Carregando modelo (primeira vez pode demorar para baixar)...")

    # float16 funciona no MPS com torch 2.x e é ~2x mais rápido que float32
    dtype = torch.float16 if device == "mps" else torch.float32

    pipe = StableDiffusionPipeline.from_pretrained(
        args.model,
        dtype=dtype,
        safety_checker=None,
        requires_safety_checker=False,
    )
    pipe = pipe.to(device)

    # Atenção automática (sem slicing agressivo que prejudica velocidade)
    pipe.enable_attention_slicing()

    # Gerar imagem
    print("→ Gerando imagem...")
    result = pipe(
        prompt=args.prompt,
        negative_prompt=args.negative_prompt,
        num_inference_steps=steps,
        guidance_scale=7.0 if args.mode == "test" else 7.5,
        width=width,
        height=height,
        generator=torch.Generator(device=device),
    )
    image = result.images[0]

    # Salvar
    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    image.save(str(output_path), "JPEG", quality=92)

    print(f"✓ Imagem salva em: {output_path}")
    print(f"  Tamanho: {output_path.stat().st_size // 1024}KB")


if __name__ == "__main__":
    main()
