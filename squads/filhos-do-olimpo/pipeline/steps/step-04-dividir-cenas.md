---
agent: claudio
execution: inline
outputFile: squads/filhos-do-olimpo/output/cenas.yaml
---

# Step 04: Dividir em Cenas

## Agente
**Cláudio** — Diretor de Cenas

## Input
- `squads/filhos-do-olimpo/output/{run_id}/roteiro.md` — roteiro aprovado pela Lísia
- `squads/filhos-do-olimpo/pipeline/data/visual-style.md` — guia visual do canal

## Instruções

Cláudio deve ler o roteiro aprovado e dividi-lo em **8 a 12 cenas** seguindo estas regras:

### Regras de divisão
- Cada cena deve ter unidade temática — foca em um único evento, emoção ou ideia
- Cada cena dura entre 45 e 90 segundos de narração (máximo 200 palavras)
- Se um trecho for longo demais, dividir em duas cenas menores
- A primeira cena é sempre do Gancho (máxima tensão)
- A última cena é sempre o Legado/Provocação Final

### Para cada cena, gerar
```yaml
- id: cena_01
  secao: gancho  # gancho | origem | conflito | legado
  titulo: "Título breve da cena"
  narracao: |
    [Texto exato de narração, adaptado para fala, no presente histórico.
    Frases claras, sem ambiguidades de pronúncia.]
  prompt_imagem: "[Prompt em inglês, detalhado, seguindo o estilo do canal]"
  atmosfera: "Tom emocional da cena (ex: tensão máxima / melancolia / grandiosidade / reflexão)"
  duracao_estimada_seg: 60
```

### Enriquecer os prompts de imagem
Cada `prompt_imagem` deve incluir elementos visuais do canal:
- Estilo: `ancient greek oil painting style`
- Iluminação: `dramatic chiaroscuro lighting`
- Atmosfera: `dark atmospheric background, deep navy blues`
- Detalhes: `highly detailed, painterly texture, cinematic`

## Output Esperado

Arquivo YAML com a lista completa de cenas:
```yaml
episodio:
  personagem: "[nome]"
  titulo: "[título do vídeo]"
  total_cenas: [N]
  duracao_total_estimada_min: [N]

cenas:
  - id: cena_01
    secao: gancho
    titulo: "..."
    narracao: |
      ...
    prompt_imagem: "..."
    atmosfera: "..."
    duracao_estimada_seg: 60
  
  - id: cena_02
    ...
```

Salvar em: `squads/filhos-do-olimpo/output/{run_id}/cenas.yaml`

## Veto Conditions

- VETO se houver menos de 8 ou mais de 12 cenas
- VETO se alguma cena tiver mais de 200 palavras de narração
- VETO se algum prompt de imagem estiver em português
- VETO se alguma cena não tiver todos os campos (id, secao, narracao, prompt_imagem, atmosfera)
- VETO se a primeira cena não for da seção "gancho"
