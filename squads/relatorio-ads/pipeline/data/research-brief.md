# Research Brief — Squad de Relatório de Ads

## Contexto da ATRAE

A ATRAE é uma agência de marketing digital especializada em tráfego pago (Google Ads e Meta Ads) para pequenas e médias empresas (PMEs) brasileiras. O tom de voz é consultivo e educativo: explica, ensina e orienta os clientes a entender suas estratégias e resultados.

Os relatórios produzidos por este squad são entregues diretamente para donos de PME — pessoas que investem em anúncios mas não são especialistas em marketing digital. A linguagem deve ser acessível, os números sempre contextualizados e as recomendações sempre práticas.

---

## Domínio 1: KPIs de Google Ads e Meta Ads

### Métricas Principais

**Google Ads:**
- **CTR (Click-Through Rate)**: % de pessoas que viram o anúncio e clicaram.
  - Search: benchmark médio 2-5% (varia por setor; saúde/serviços locais tende a ser mais alto)
  - Display: benchmark médio 0.2-0.5%
  - Shopping: benchmark médio 0.4-1.5%
- **CPC (Custo por Clique)**: custo médio de cada clique no anúncio
- **Taxa de Conversão**: % de cliques que resultam em ação desejada (benchmark: 2-5% Search, 0.5-2% Display)
- **CPA (Custo por Aquisição)**: custo médio por conversão — varia muito por setor
- **ROAS (Return on Ad Spend)**: receita gerada / investimento em ads
  - Mínimo aceitável: 2x
  - Bom: 3-5x
  - Excelente: 5x+
- **Impressões**: quantas vezes o anúncio foi exibido
- **Quality Score**: relevância do anúncio (1-10), impacta CPC e posicionamento

**Meta Ads (Facebook/Instagram):**
- **Alcance**: pessoas únicas que viram o anúncio
- **Frequência**: média de vezes que cada pessoa viu o anúncio (ideal: 1.5-3x; acima de 4-5x = fadiga)
- **CPM (Custo por Mil Impressões)**: benchmark PMEs Brasil: R$ 15-35 (varia por público e setor)
- **CTR Link**: % de cliques no link (benchmark: 0.5-2% para Feed; 1-3% para Stories)
- **CPC**: custo por clique (benchmark: R$ 0.50-5 para PMEs no Brasil)
- **CPP (Custo por Pessoa Alcançada)**: investimento / alcance
- **Taxa de Conversão**: % de cliques que convertem (benchmark: 1-3%)
- **ROAS**: benchmark mínimo 2x, ideal 3x+

### Métricas de Vaidade vs. Métricas de Negócio

**Métricas de vaidade (reportar mas não priorizar):** impressões, alcance, CPM
**Métricas de negócio (base para decisões):** CTR, CPA, ROAS, taxa de conversão, conversões

---

## Domínio 2: Framework de Análise de Campanhas Pagas

### Framework de Análise em 5 Etapas (modelo da ATRAE)

**1. Visão do período (o que aconteceu?)**
Levantamento dos totais do período: investimento total, impressões, cliques, conversões, CPA médio, ROAS médio.

**2. Benchmarking (está bom ou ruim?)**
Comparar cada métrica com: (a) período anterior [MoM ou WoW], (b) benchmark do setor para PMEs brasileiras, (c) meta/objetivo definido com o cliente.

**3. Segmentação por campanha (onde está o problema ou a oportunidade?)**
Classificar campanhas em: Alto desempenho (acima do benchmark em CPA/ROAS), Médio desempenho (dentro do benchmark) e Baixo desempenho (abaixo do benchmark ou sem conversões).

**4. Diagnóstico (por quê?)**
Identificar causas dos desvios: problemas de segmentação de público, criativos com baixo CTR, sazonalidade, orçamento insuficiente para converter, fadiga de audiência (frequência alta no Meta).

**5. Recomendações priorizadas (o que fazer?)**
3 recomendações máximo, ordenadas por impacto x esforço. Ações específicas com estimativa de resultado.

### Sinais de Alerta (flags automáticas)

| Sinal | Threshold | Ação |
|-------|-----------|------|
| Campanha com gasto > 20% do total e 0 conversões | - | Pausar ou revisar urgente |
| CTR Search < 1% | < 1% | Revisar copy dos anúncios |
| Frequência Meta > 4x | > 4x | Renovar criativos ou expandir público |
| CPA > 2x a meta do cliente | - | Escalar para revisão estratégica |
| ROAS < 2x | < 2x | Revisar estrutura de campanha |
| CPM Meta aumentou > 30% vs período anterior | > 30% | Verificar concorrência no leilão / sazonalidade |

---

## Domínio 3: Relatórios para Clientes de Agência — Boas Práticas

### Estrutura do Relatório Cliente

1. **Resumo executivo (3 bullets)** — deve ser legível em 30 segundos
2. **Performance por plataforma** — tabelas com métricas + benchmarks + status
3. **Destaques: melhores e piores campanhas**
4. **Insights** (máximo 4) — cada um com implicação para o negócio
5. **Recomendações priorizadas** (máximo 3) — cada uma com impacto esperado
6. **Metodologia** — período, fontes, benchmarks usados

### Storytelling com Dados para PMEs

- Sempre começar com o resultado de negócio, não com a métrica técnica
  - ❌ "Seu CTR foi de 3.2%"
  - ✅ "Seu anúncio foi clicado por 3 em cada 100 pessoas que o viram — acima da média do setor (2%)"
- Explicar métricas técnicas em linguagem simples na primeira vez que aparecem
- Usar comparações cotidianas para quantias: "R$45 por lead = menos que uma pizza" ou "R$200 de CPA para um serviço de R$2.000 = retorno de 10x"
- Terminar sempre com perspectiva positiva e próximo passo claro

### O Que Não Fazer

- Nunca enviar apenas tabelas sem narrativa
- Nunca dar recomendações vagas ("melhorar a segmentação")
- Nunca ocultar resultados negativos — o cliente confia na agência por ser honesta
- Nunca comparar com concorrentes sem dados reais (pode criar expectativas falsas)

---

## Domínio 4: Atribuição e Analytics para Agências

### Modelos de Atribuição Mais Comuns

- **Last Click**: toda a conversão é atribuída ao último toque antes da conversão. Mais simples, mas subestima campanhas de topo de funil.
- **First Click**: atribui ao primeiro ponto de contato. Valoriza a descoberta.
- **Linear**: distribui igualmente entre todos os touchpoints.
- **Data-Driven (Google Ads)**: usa ML para atribuir peso a cada touchpoint com base nos dados reais da conta. Requer volume mínimo de conversões.

### Para Relatórios de Clientes PME

Usar o modelo padrão da plataforma (Last Click no Google Ads por padrão) e explicar isso na seção de metodologia. Não criar confusão desnecessária com múltiplos modelos para clientes iniciantes.

### Cross-Channel (Google Ads + Meta Ads)

Duplicação de conversões: o mesmo usuário pode converter em ambas as plataformas. Informar ao cliente que os totais de conversão somados podem ser maiores que as conversões reais por essa sobreposição.

Abordagem ATRAE: apresentar cada plataforma separadamente e somar como "total estimado combinado", com nota de possível sobreposição.
