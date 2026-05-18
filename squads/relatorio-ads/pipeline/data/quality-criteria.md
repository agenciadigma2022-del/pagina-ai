# Critérios de Qualidade — Relatório de Performance de Ads

## Dimensão 1: Precisão de Dados

- [ ] Todos os números nas tabelas batem com os dados brutos de `raw-data.md` (tolerância: ± 0.1%)
- [ ] Nenhum número foi arredondado de forma que altere o sentido (ex: R$47.80 não deve aparecer como R$48)
- [ ] Totais das tabelas de campanha somam ao total geral reportado
- [ ] Períodos de comparação corretos (quando usado MoM, os períodos são equivalentes em dias)
- [ ] Classificações ✅/⚠️/🔴 aplicadas corretamente conforme benchmarks de `domain-framework.md`

## Dimensão 2: Qualidade Analítica

- [ ] Resumo executivo contém exatamente 3 bullets
- [ ] Cada bullet do resumo contém pelo menos 1 número concreto
- [ ] 3º bullet do resumo é uma recomendação acionável (não apenas uma observação)
- [ ] 3-4 insights (não mais, não menos)
- [ ] Cada insight segue a estrutura: dado específico → "Isso significa que..." → sugestão direcional
- [ ] Cada insight tem nível de confiança declarado (Alta/Média/Baixa) com justificativa
- [ ] 2-3 recomendações (não mais, não menos para modo econômico)
- [ ] Cada recomendação tem: ação específica + impacto esperado + nível de esforço + prioridade
- [ ] Recomendações ordenadas por prioridade (Alta primeiro)
- [ ] Anomalias críticas (flags de alerta do domain-framework.md) identificadas quando presentes

## Dimensão 3: Tom de Voz — ATRAE

- [ ] ROAS explicado como "para cada R$1 investido, gerou R$X" pelo menos uma vez no relatório
- [ ] Nenhum qualificador vago: sem "significativo", "expressivo", "muito bom", "problemático", "bastante"
- [ ] Jargões técnicos explicados na primeira ocorrência (CTR, CPA, CPM, ROAS, CPC)
- [ ] Tom consultivo e educativo — o cliente sai entendendo mais do que sabia antes
- [ ] Pontos positivos mencionados antes dos pontos negativos no resumo executivo

## Dimensão 4: Formato e Completude

- [ ] Cabeçalho com: nome do cliente, período, elaborado por ATRAE, data do relatório
- [ ] Seção "Resumo Executivo" presente e com exatamente 3 bullets
- [ ] Seção Google Ads com tabela geral + tabelas de melhores e piores campanhas (se aplicável)
- [ ] Seção Meta Ads com tabela geral + tabelas de melhores e piores campanhas (se aplicável)
- [ ] Seção "Insights" com 3-4 insights numerados
- [ ] Seção "Recomendações" com 2-3 recomendações priorizadas
- [ ] Seção "Sobre Esta Análise" com: período, fontes de dados, benchmarks usados, nota sobre atribuição
- [ ] Todas as tabelas markdown renderizáveis (colunas alinhadas, sem células vazias sem motivo)
- [ ] Emojis de status (✅/⚠️/🔴) consistentes em todas as tabelas

## Thresholds de Aprovação

| Dimensão | Mínimo para APROVADO |
|----------|----------------------|
| Precisão de dados | 100% — qualquer erro = AJUSTES NECESSÁRIOS |
| Qualidade analítica | 80% dos itens atendidos |
| Tom de voz | 80% dos itens atendidos |
| Formato e completude | Todas as seções obrigatórias presentes |

> **Regra de ouro:** Se um dono de PME sem conhecimento de marketing digital ler este relatório e não conseguir responder "meu investimento em ads valeu a pena?" e "o que preciso fazer diferente?", o relatório não passou.
