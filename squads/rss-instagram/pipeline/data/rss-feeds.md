# Feeds RSS Configurados — rss-instagram

## Fontes de Marketing Digital / Tráfego Pago

Estas são as fontes que Rosa RSS monitora em cada execução. Adicione, remova ou
comente (#) feeds conforme necessário.

---

### Fontes Brasileiras — Tráfego Pago e Marketing Digital

```
https://resultadosdigitais.com.br/feed/
https://rockcontent.com/br/blog/feed/
https://conversion.com.br/blog/feed/
https://mundodomarketing.com.br/feed/
https://exame.com/marketing/feed/
https://forbes.com.br/noticias-sobre/marketing/feed/
```

### Fontes Internacionais Relevantes para PMEs BR

```
https://blog.google/products/ads/rss.xml
https://www.facebook.com/business/news/rss.xml
```

### Think with Google Brasil

```
https://www.thinkwithgoogle.com/intl/pt-br/feed/
```

### E-Commerce e Empreendedorismo

```
https://www.ecommercebrasil.com.br/feed/
```

---

## Critérios de Filtragem

Rosa RSS aplica estes filtros em cada artigo encontrado:

**Incluir (pelo menos 1 critério):**
- Menciona: Meta Ads, Facebook Ads, Google Ads, tráfego pago, anúncios pagos
- Menciona: PME, pequena empresa, micro empresa, negócio local, empreendedor
- Menciona: marketing digital, campanha digital, mídia paga, performance marketing
- Relevância explícita para mercado brasileiro

**Excluir (qualquer critério):**
- Artigo exclusivamente sobre grandes empresas/multinacionais sem aplicação para PMEs
- Notícias de política, esportes, entretenimento sem relação com marketing/ads
- Artigos em idioma estrangeiro sem versão em português
- Artigos mais antigos que 30 dias (para garantir atualidade)

---

## Pontuação de Relevância

Cada artigo recebe um score de 0-15:
- **Relevância PME (0-5):** Quão aplicável é para dono de pequeno negócio no Brasil
- **Atualidade (0-5):** Publicado há <7 dias = 5pts | 7-14 dias = 3pts | 15-30 dias = 1pt
- **Posicionamento ATRAE (0-5):** Potencial para posicionar a ATRAE como autoridade

**Threshold mínimo para inclusão:** Score ≥ 8/15

---

## Deduplicação

Rosa compara título e URL de cada artigo com `pipeline/data/rss-history.md`.
Artigos já processados são automaticamente excluídos do ranking.
