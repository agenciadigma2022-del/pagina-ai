---
execution: inline
agent: pablo-publicador
inputFile: squads/conteudo-instagram/output/slides/
outputFile: squads/conteudo-instagram/output/post-confirmation.md
---

# Step 13: Publicar no Instagram

## Context Loading

Load these files before executing:
- `squads/conteudo-instagram/output/slides/` — PNGs aprovados no step-12 para upload
- `squads/conteudo-instagram/output/carousel-draft.md` — Legenda e hashtags oficiais aprovados

## Instructions

### Process

**Fase 1 — Revisão Visual Pré-Post**

1. Liste os arquivos em `output/slides/` e confirme que o número de PNGs corresponde ao número de slides do carousel-draft.md
2. Abra cada PNG via `file://` com `browser_navigate` e verifique: logo ATRAE visível, headline legível, texto sem overflow, fundo na cor correta
3. Se qualquer slide tiver problema: parar e reportar ao usuário com número do slide e problema específico

**Fase 2 — Upload no Instagram**

4. Use `browser_navigate` para abrir `https://www.instagram.com`
5. Se aparecer tela de login: parar imediatamente e notificar o usuário — "Sessão do Instagram expirada. Por favor, faça login no browser para prosseguir."
6. Navegar para criação de novo Post (não Story, não Reel)
7. Fazer upload dos slides na ordem: `slide-01.png` primeiro, `slide-0N.png` último
8. Confirmar que todos os slides estão carregados na sequência correta
9. Inserir a legenda completa do `carousel-draft.md`:
   - Primeiro parágrafo (hook)
   - Segundo parágrafo (contexto)
   - Pergunta final
   - Hashtags
10. Publicar o post

**Fase 3 — Confirmação**

11. Confirmar que o post está visível no perfil
12. Capturar URL do post ou tirar screenshot de confirmação
13. Salvar em `output/post-confirmation.md`

## Output Format

```markdown
# Confirmação de Publicação

**Data:** YYYY-MM-DD HH:MM
**Status:** PUBLICADO ✅ / FALHOU ❌ / SESSÃO EXPIRADA ⚠️ / PROBLEMA NOS SLIDES ⛔
**Slides enviados:** N/N
**URL do post:** https://www.instagram.com/p/[ID]/

## Revisão Pré-Post

| Slide | Logo | Headline | Texto | Fundo | Status |
|-------|------|----------|-------|-------|--------|
| 01 | ✅ | ✅ | ✅ | dark ✅ | OK |
| ... | | | | | |

## Notas
[Observações sobre o processo de publicação]
```

## Output Example

```markdown
# Confirmação de Publicação

**Data:** 2026-03-23 14:35
**Status:** PUBLICADO ✅
**Slides enviados:** 8/8
**URL do post:** https://www.instagram.com/p/Cabcd1234efgh/

## Revisão Pré-Post

| Slide | Logo | Headline | Texto | Fundo | Status |
|-------|------|----------|-------|-------|--------|
| 01 | ✅ | ✅ | ✅ | dark ✅ | OK |
| 02 | ✅ | ✅ | ✅ | light ✅ | OK |
| 03 | ✅ | ✅ | ✅ | dark ✅ | OK |
| 04 | ✅ | ✅ | ✅ | accent ✅ | OK |
| 05 | ✅ | ✅ | ✅ | light ✅ | OK |
| 06 | ✅ | ✅ | ✅ | dark ✅ | OK |
| 07 | ✅ | ✅ | ✅ | light ✅ | OK |
| 08 | ✅ | ✅ | ✅ | accent ✅ | OK |

## Notas

Sessão ativa. Legenda de 312 chars + 14 hashtags inserida sem alterações. Post publicado e visível no perfil.
```

## Veto Conditions

Reject and redo if ANY are true:
1. Upload feito sem confirmar ordem correta dos slides (01 primeiro)
2. Legenda ou hashtags alteradas em relação ao carousel-draft.md aprovado

## Quality Criteria

- [ ] Revisão visual concluída para todos os slides antes do upload
- [ ] Todos os slides upados na ordem correta
- [ ] Legenda completa inserida (parágrafos + pergunta + hashtags) sem edições
- [ ] Confirmação de publicação salva em output/post-confirmation.md
