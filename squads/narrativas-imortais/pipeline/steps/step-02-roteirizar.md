---
agent: edgar
execution: inline
format: youtube-script
outputFile: squads/narrativas-imortais/output/roteiro.md
---

# Step 02: Roteirizar o Episódio

## Agente
**Edgar** — Roteirista Literário

## Input
- `squads/narrativas-imortais/pipeline/data/episodio-brief.md` — obra, ângulo e número de cenas
- `squads/narrativas-imortais/pipeline/data/canal-identity.md` — identidade do canal
- `squads/narrativas-imortais/pipeline/data/roteiro-framework.md` — estrutura do Arco Narrativo

## Instruções

Edgar deve:

1. **Pesquisar a obra e o autor** usando web_search para encontrar:
   - Contexto histórico e biográfico relevante (o que o autor estava vivendo)
   - Detalhes menos conhecidos sobre a obra ou seu processo de criação
   - A ideia central ou conflito filosófico da obra
   - Como a obra ainda ressoa no mundo atual

2. **Escrever o roteiro completo** seguindo o Arco Narrativo de 4 Partes:
   - **Gancho (0-1 min):** Começa com uma ideia instigante, paradoxo ou cena impactante — sem introdução biográfica longa. Open loop obrigatório.
   - **Contexto (1-3 min):** O autor, sua época, o que o motivou a escrever a obra. Humanizar antes de intelectualizar.
   - **Obra e Ideias (3-9 min):** O ângulo escolhido em profundidade — as ideias centrais, os momentos mais poderosos, a interpretação do Edgar.
   - **Legado Atual (9-11 min):** Por que isso ainda importa hoje. Ponte concreta entre a obra e o presente. Reflexão aberta final.

3. **Marcar cenas sugeridas** — ao longo do roteiro, indicar momentos que precisam de imagem específica com `[CENA SUGERIDA]: descrição visual em inglês`

4. **Escrever em português culto e acessível**, no presente histórico, para ser narrado em voz alta

5. **Respeitar a quantidade de cenas** definida no brief (8, 10 ou 12)

## Output Esperado

Roteiro completo em markdown seguindo o formato definido em `roteiro-framework.md`:
```
=== TÍTULO ===
=== THUMBNAIL ===
=== GANCHO (0–1 min) ===
=== CONTEXTO (1–3 min) ===
=== OBRA E IDEIAS (3–9 min) ===
=== LEGADO ATUAL (9–11 min) ===
=== REFLEXÃO FINAL ===
=== DESCRIÇÃO DO VÍDEO ===
=== TAGS ===
```

Salvar em: `squads/narrativas-imortais/output/{run_id}/roteiro.md`

## Veto Conditions

- VETO se o roteiro começar com "Hoje vamos falar de..." ou qualquer introdução contextual longa
- VETO se não houver a ponte com o presente no Legado Atual
- VETO se o roteiro tiver menos de 1.000 palavras
- VETO se não houver reflexão final aberta
- VETO se não houver pelo menos 3 detalhes concretos sobre a obra ou autor
