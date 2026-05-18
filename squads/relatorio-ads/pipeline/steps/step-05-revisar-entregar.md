---
execution: inline
agent: beatriz-benchmark
inputFile: squads/relatorio-ads/output/{run_id}/relatorio-cliente.md
outputFile: squads/relatorio-ads/output/{run_id}/relatorio-final.md
model_tier: powerful
---

# Step 05: Revisão de Qualidade e Entrega

## Context Loading

Antes de executar, leia:
- `squads/relatorio-ads/output/{run_id}/relatorio-cliente.md` — relatório gerado pelo André
- `squads/relatorio-ads/pipeline/data/quality-criteria.md` — critérios de qualidade
- `squads/relatorio-ads/pipeline/data/report-config.md` — nome do cliente e período

## Instructions

### Processo de Revisão

Beatriz realiza uma revisão de passa-ou-reprova em 4 dimensões:

**1. Precisão dos dados**
- Todos os números nas tabelas batem com os do `raw-data.md`?
- Nenhum número foi inventado ou arredondado incorretamente?
- As classificações (✅/⚠️/🔴) estão corretas para os benchmarks?

**2. Qualidade analítica**
- Cada insight tem: dado concreto + "Isso significa que..." + sugestão?
- Nenhuma recomendação é vaga (sem ação específica, sem impacto esperado)?
- Resumo executivo tem exatamente 3 bullets com pelo menos 1 número concreto?

**3. Tom de voz**
- Linguagem é acessível para um dono de PME (não técnica demais)?
- Tom é consultivo e educativo (não só descritivo)?
- Sem jargões excessivos sem explicação?

**4. Formato e completude**
- Todas as seções obrigatórias presentes?
- Tabelas com colunas completas e alinhamento correto?
- Seção "Sobre Esta Análise" com metodologia?

### Decisão de Revisão

- **APROVADO:** Todas as 4 dimensões atendem os critérios mínimos → salvar como `relatorio-final.md`
- **AJUSTES NECESSÁRIOS:** Uma ou mais dimensões com problemas → listar correções e reenviar para o André (pipeline retorna ao step-04)

### Se APROVADO

1. Adicione ao topo do relatório o cabeçalho final:

```markdown
---
**STATUS:** ✅ Revisado e aprovado pela equipe ATRAE
**Revisado em:** {data}
---
```

2. Salve como `squads/relatorio-ads/output/{run_id}/relatorio-final.md`

3. Apresente ao usuário:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Relatório de {client_name} pronto!
Período: {date_from} a {date_to}

📄 Arquivo: squads/relatorio-ads/output/{run_id}/relatorio-final.md

Resumo executivo:
{copiar os 3 bullets do resumo executivo aqui}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Quality Criteria

- [ ] Verificação de dados: nenhum número diverge do `raw-data.md` em mais de 0.1%
- [ ] Qualidade analítica: todos os insights seguem a estrutura dado→implicação→sugestão
- [ ] Tom de voz: linguagem acessível para PME, sem jargões sem explicação
- [ ] Formato: todas as seções presentes, tabelas formatadas corretamente
- [ ] Arquivo final salvo em `output/{run_id}/relatorio-final.md`
- [ ] Resumo executivo apresentado ao usuário ao final
