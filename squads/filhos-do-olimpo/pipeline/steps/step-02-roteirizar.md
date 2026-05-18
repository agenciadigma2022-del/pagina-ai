---
agent: lisia
execution: inline
format: youtube-script
outputFile: squads/filhos-do-olimpo/output/roteiro.md
---

# Step 02: Roteirizar o Episódio

## Agente
**Lísia** — Roteirista do Olimpo

## Input
- `squads/filhos-do-olimpo/pipeline/data/episodio-brief.md` — personagem e ângulo escolhidos
- `squads/filhos-do-olimpo/pipeline/data/canal-identity.md` — identidade do canal
- `squads/filhos-do-olimpo/pipeline/data/roteiro-framework.md` — estrutura do Arco de 4 Partes

## Instruções

Lísia deve:

1. **Pesquisar o personagem** usando web_search para encontrar:
   - Fatos históricos menos conhecidos (o que os livros omitem)
   - A contradição central da vida do personagem
   - O momento de maior fraqueza ou falha humana
   - Como o legado ainda afeta o mundo hoje

2. **Escrever o roteiro completo** seguindo o Arco de 4 Partes:
   - **Gancho (0-1 min):** Começa no momento mais dramático, sem contexto. Open loop obrigatório.
   - **Origem (1-4 min):** Infância, contexto, o que moldou o personagem. Humanizar antes de glorificar.
   - **O que Fez e Por Quê (4-9 min):** As grandes decisões, os bastidores, a contradição central.
   - **Legado Real (9-12 min):** Como isso ainda existe hoje. Encerra com provocação filosófica aberta.

3. **Marcar cenas sugeridas** — ao longo do roteiro, indicar momentos que precisam de imagem específica com `[CENA SUGERIDA]: descrição`

4. **Seguir as fórmulas de título** do canal para o título final

5. **Escrever em português culto e acessível**, no presente histórico

## Output Esperado

Roteiro completo em markdown, seguindo o formato definido em `roteiro-framework.md`:
```
=== TÍTULO ===
=== THUMBNAIL ===
=== GANCHO (0–1 min) ===
=== ORIGEM (1–4 min) ===
=== O QUE FEZ E POR QUÊ (4–9 min) ===
=== LEGADO REAL (9–12 min) ===
=== PROVOCAÇÃO FINAL ===
=== DESCRIÇÃO DO VÍDEO ===
=== TAGS ===
```

Salvar em: `squads/filhos-do-olimpo/output/{run_id}/roteiro.md`

## Veto Conditions

- VETO se o roteiro começar com "Hoje vamos falar de..." ou qualquer introdução contextual
- VETO se não houver a contradição central exposta claramente
- VETO se o roteiro tiver menos de 1.200 palavras (muito curto para 10 min)
- VETO se não houver provocação filosófica aberta no final
- VETO se não houver pelo menos 3 fatos específicos e menos conhecidos
