# Squad Memory — conteudo-instagram

## Execuções

### Execução #4 — 2026-04-15 (run: 2026-04-15-201941)
- **Tema pesquisado:** Geral — melhor oportunidade (último mês)
- **Pauta escolhida:** #3 — Tráfego pago em 2026 exige mais estratégia — CPL subiu 27% e "impulsionar" parou de funcionar (Score 12/15)
- **Ângulo desenvolvido:** 5 — Inspiracional — "A loja de bairro que dobrou o ROAS em 2026"
- **Tom:** Storytelling / Consultivo Educativo
- **Personagem:** Marina (salão de beleza em Guarulhos)
- **Veredicto Renata:** APROVAR ✅ (8,4/10) — 3 ajustes: subtexto ROAS no cover, frase final mais direta slide 09, #roas em vez de #roasaltou
- **Entrega:** 9 slides HTML + 9 PNGs 1080×1080px renderizados via Node.js Playwright
- **Publicação:** PUBLICADO ✅ em 2026-04-15 — URL: https://www.instagram.com/agencia.atrae/p/DXK9RRKEfWl/
- **Nota:** Pauta #1 do ranking era duplicata do tema da exec #2 (Meta Ads +12,15%) — identificado e reportado antes da escolha

---

### Execução #3 — 2026-03-31 (run: 2026-03-31-192215)
- **Tema pesquisado:** Geral — melhor pauta do momento
- **Período:** Últimos 7 dias
- **Pauta escolhida:** #2 — Meta Business AI no WhatsApp (Score: 13/15)
- **Ângulo desenvolvido:** 🟢 Oportunidade — "IA grátis no WhatsApp: 4 passos para ativar hoje"
- **Tom:** Passo a Passo Prático
- **Veredicto Renata:** APROVAR COM RESSALVAS ✅ (8,0/10) — 3 ajustes aplicados: pergunta de engajamento, #ia→#inteligenciaartificialbrasil, remoção "De graça, sem pegadinha"
- **Entrega:** 9 slides HTML + 9 PNGs 1080×1080px renderizados via Node.js Playwright (não browser_run_code — require não disponível no contexto browser)
- **Publicação:** PUBLICADO ✅ em 2026-03-31 — URL: https://www.instagram.com/agencia.atrae/p/DWkQmbFDJVr/

---

### Execução #2 — 2026-03-23 (run: 2026-03-23-212504)
- **Tema pesquisado:** Geral — melhor pauta do momento
- **Período:** Últimas 24 horas
- **Pauta escolhida:** #1 — Meta Ads 12,15% mais caros — repasse de PIS/COFINS + ISS (Score: 14/15)
- **Ângulo desenvolvido:** 🔴 Medo — "Você está pagando 12% a mais no Meta Ads desde janeiro — e talvez nem saiba"
- **Tom:** Direto e Provocativo
- **Veredicto Renata:** APROVAR ✅ (8,7/10 — sem ações bloqueantes)
- **Entrega:** 9 slides HTML + 9 PNGs 1080×1080px renderizados via Playwright
- **Publicação:** PUBLICADO ✅ em 2026-03-24 — URL: https://www.instagram.com/agencia.atrae/p/DWP5bk0EZXn/

---

### Execução #1 — 2026-03-23
- **Tema pesquisado:** Novidades Meta Ads 2026
- **Período:** Últimos 7 dias
- **Pauta escolhida:** #5 — Meta automação total: IA vai criar anúncios para PMEs até fim de 2026
- **Ângulo desenvolvido:** Educacional 📚
- **Tom:** Consultivo Educativo
- **Veredicto Renata:** APROVAR COM RESSALVAS (8,3/10)
- **Entrega:** Slides HTML gerados em output/slides.html

---

## Aprendizados

- Execução #4: ângulo Inspiracional (storytelling com personagem) + Tom Consultivo Educativo — score 8,4/10; funciona bem para temas de performance/ROAS
- Execução #4: pautas de tema "CPL/estratégia" com personagem real geram forte identificação — story da Marina foi aprovada sem ressalvas estruturais
- Execução #4: verificar ranking de pautas para duplicatas das execuções anteriores antes de apresentar ao usuário (exec #4: pauta #1 era repetição da exec #2)
- Execução #3: renderização PNG via `node -e "..."` no Bash (não browser_run_code) — require não está disponível no contexto do MCP browser; usar sempre Node.js via Bash
- Execução #3: upload de múltiplos arquivos no Instagram funciona com browser_file_upload passando array de paths em ordem
- Execução #3: Ângulo Oportunidade + Tom Passo a Passo Prático — score 8,0/10 (validado, funciona bem para temas de IA/tecnologia)
- Execução #3: pauta de tema "IA grátis" gerou menor score que pauta de impacto financeiro direto (8,0 vs 8,7) — pautas com consequência financeira concreta tendem a ser mais fortes
- Execução #3: publicação automática via Playwright funcionou 100% sem necessidade de intervenção manual (sessão persistida)
- Execução #2: usuário escolheu ângulo Medo + Tom Direto e Provocativo — primeira vez com esse combo (8,7/10, melhor score até agora)
- Execução #2: adicionar subtexto ao Cover (slide 1) garantiu ≥40 palavras — aprendizado da execução #1 aplicado com sucesso
- Execução #2: CTA slide recebeu override dark→accent conforme brand-guidelines — sem objeção do usuário, confirmar se preferência de fundo diferente nas próximas execuções
- Usuário preferiu o ângulo Educacional sobre os demais na execução #1 (Medo, Oportunidade, Contrário, Inspiracional)
- Na execução #2 escolheu Medo + Tom Direto e Provocativo — variação validada com alto score
- Tom Consultivo Educativo era padrão, mas Tom Direto e Provocativo também funciona bem (8,7/10)
- Slides em HTML/CSS + renderização Playwright é a forma de entrega padrão
- Slides 1 e 8 (cover e CTA) ficaram levemente abaixo de 40 palavras na execução #1 — corrigido na execução #2 com subtexto no cover
- Carrossel sobre tendências/IA: 8,3/10 | Carrossel sobre impacto financeiro direto (impostos): 8,7/10
- Sessão Instagram expirada em ambas execuções (exec #1 e #2) — publicação automática não funcionou durante o pipeline
- Exec #2 publicada manualmente em 2026-03-24 com login via Playwright (usuário: agencia.atrae) + upload de 9 PNGs + legenda via browser_type — funcionou perfeitamente
- Credencial de login Instagram: usuário agencia.atrae (não @atrae.oficial nem atrae.oficial)

---

## Temas Usados

- 2026-04-15 (exec #4): "Geral — último mês" → pauta sobre CPL subindo 27% em tráfego pago, storytelling da "Marina" (salão Guarulhos), ângulo Inspiracional
- 2026-03-31 (exec #3): "Geral — melhor pauta do momento" → pauta sobre Meta Business AI no WhatsApp para PMEs (IA gratuita)
- 2026-03-23 (exec #2): "Geral — melhor pauta do momento" → pauta sobre repasse PIS/COFINS + ISS no Meta Ads (+12,15%)
- 2026-03-23 (exec #1): "Novidades Meta Ads 2026" → pauta sobre automação IA Advantage+

---

## Referências de Investigação

- Sherlock @pedrosobral: investigação bloqueada (permissão browser negada em 2026-03-23)
- Sherlock @adrianogianini: investigação bloqueada (permissão browser negada em 2026-03-23)

**Nota**: Para enriquecer os agentes com padrões reais desses perfis, rodar Sherlock novamente com permissões de browser habilitadas.
