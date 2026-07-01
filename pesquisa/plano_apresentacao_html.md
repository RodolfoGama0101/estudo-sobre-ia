# Plano de Desenvolvimento — Apresentação HTML/CSS/JS sobre IA 2026

> Arquivo de referência para construção da apresentação interativa baseada em `resultados_pesquisa_ia_2026.md`.

---

## 1. Visão Geral do Projeto

### Objetivo
Transformar o conteúdo da pesquisa sobre ferramentas de IA em uma apresentação visual e interativa no navegador, no estilo "slideshow" fullscreen, onde cada slide ocupa 100% da janela do browser.

### Tecnologias
- **HTML5** — estrutura semântica dos slides
- **CSS3** — design system, animações, layout responsivo
- **JavaScript (Vanilla)** — navegação entre slides, interatividade dos componentes, animações de entrada
- **Google Fonts** — tipografia (Inter ou Outfit)
- **Sem frameworks externos** — zero dependências de bibliotecas

### Estrutura de Arquivos
```
apresentacao-ia-2026/
├── index.html ← Arquivo principal (todos os slides)
├── css/
│ ├── style.css ← Design system + layout geral
│ ├── slides.css ← Estilos específicos por slide
│ └── components.css ← Cards, tabelas, badges, botões
└── js/
├── navigation.js ← Controle de slides (teclado, botões, swipe)
├── animations.js ← Animações de entrada por slide
└── components.js ← Lógica dos componentes interativos
```

---

## 2. Design System

### 2.1 Paleta de Cores

```
Fundo principal: #F5F0E8 (off-white / bege claro)
Fundo card: #EDE8DC (bege médio)
Fundo card hover: #E2DBD0 (bege escuro)
Fundo escuro: #2C2A26 (marrom escuro — slides de destaque)
Fundo destaque: #1A2332 (azul navy — slides técnicos)

Primária: #4A7C59 (verde musgo — positivo, confirmação)
Secundária: #C47C3A (âmbar / ocre — atenção, destaque)
Terciária: #5B7FA6 (azul aço — informação técnica)
Perigo: #C45A3A (vermelho terracota — alertas)

Texto principal: #2C2A26 (quase preto — máximo contraste no bege)
Texto secundário: #6B6355 (marrom médio)
Texto invertido: #F5F0E8 (bege — sobre fundos escuros)

Borda sutil: #D5CFC3 (divisores e bordas suaves)
Sombra: rgba(44, 42, 38, 0.10)
```

### 2.2 Tipografia

```css
/* Títulos de slides */
font-family: 'Outfit', sans-serif;
font-weight: 700;
font-size: clamp(2rem, 4vw, 3.5rem);

/* Subtítulos */
font-family: 'Outfit', sans-serif;
font-weight: 500;
font-size: clamp(1.1rem, 2vw, 1.6rem);

/* Corpo de texto */
font-family: 'Inter', sans-serif;
font-weight: 400;
font-size: clamp(0.85rem, 1.4vw, 1.05rem);

/* Labels e badges */
font-family: 'Inter', sans-serif;
font-weight: 600;
font-size: 0.75rem;
letter-spacing: 0.08em;
text-transform: uppercase;
```

### 2.3 Componentes Reutilizáveis

#### Card Padrão
```
Fundo: #EDE8DC
Borda: 1px solid #D5CFC3
Borda-top: 3px solid [cor da categoria]
Sombra: 0 2px 12px rgba(44,42,38,0.08)
Border-radius: 12px
Padding: 24px
Transição: transform 0.2s ease, box-shadow 0.2s ease
Hover: translateY(-4px) + sombra mais intensa
```

#### Badge / Tag
```
Padding: 4px 10px
Border-radius: 20px
Font-size: 0.72rem
Font-weight: 600
Uppercase + letter-spacing
Variantes: verde (ativo), âmbar (atenção), terracota (problema), azul (info)
```

#### Botão de Navegação
```
Setas laterais (< >) fixas no rodapé
Fundo: semi-transparente com blur
Indicador: dots de progresso no centro inferior
Número: "Slide X / Y" no canto inferior direito
```

#### Tabela Comparativa
```
Header: Fundo #2C2A26, texto bege
Linhas alt: Fundo alternado entre #F5F0E8 e #EDE8DC
Células: Padding generoso, bordas sutis
Highlight: Hover com fundo âmbar suave
```

### 2.4 Animações de Entrada

Cada slide tem animação de entrada ao ser exibido:
```
Fade + slide from bottom: elementos de conteúdo (delay escalonado)
Scale in: cards individuais (delay: 0.1s por card)
Draw in: linha do tempo (progress animation)
Count up: números (preços, anos, percentuais)
```

---

## 3. Estrutura da Apresentação — Slides

Total estimado: **18 slides**

---

### SLIDE 1 — Capa
**Tipo:** Hero fullscreen com fundo escuro (`#1A2332`)
**Conteúdo:**
- Título grande: `"Inteligência Artificial em 2026"`
- Subtítulo: `"Ferramentas, Agentes e Estratégia para a Equipe"`
- Tag animada: `"Pesquisa · Junho 2026"`
- Indicador de início: ícone de seta pulsando

**Componentes:** Nenhum interativo — apenas visual de impacto.
**Animação:** Título aparece letra por letra (typewriter suave).

---

### SLIDE 2 — Agenda / Índice
**Tipo:** Grade de cards clicáveis
**Conteúdo:** 8 cards, cada um representando um bloco temático:

| # | Bloco | Ícone |
|---|---|---|
| 1 | História da IA | |
| 2 | O que é uma LLM | |
| 3 | A Virada de 2025 | |
| 4 | Agentes e Harness | |
| 5 | Dicionário de Conceitos | |
| 6 | Modelos de Fronteira | |
| 7 | Comparativo de Ferramentas | |
| 8 | Recomendação para a Equipe | |

**Interatividade:** Clicar em um card navega diretamente para o slide correspondente.

---

### SLIDE 3 — Breve História da IA
**Tipo:** Timeline horizontal scrollável
**Conteúdo:** Linha do tempo com 11 marcos históricos (1950 → 2026)

**Componente — Timeline Interativa:**
```
Layout: Linha central horizontal com pontos de evento acima e abaixo
Marcos: Bolinha clicável com ano
Tooltip: Ao clicar, expande card com título + descrição do evento
Scroll: Timeline desliza horizontalmente (arrastar ou botões)
Destaque: "2025–2026" pulsando em cor âmbar (era atual)
```

**Marcos na timeline:**
1. 1950 — Teste de Turing
2. 1956 — Conferência de Dartmouth / Nasce o termo "IA"
3. 1960–70 — IA Simbólica ("se-então")
4. 1980–90 — Primeiro Inverno da IA
5. 1990–2010 — Machine Learning clássico
6. 2012 — Deep Learning explode (AlexNet)
7. 2017 — Transformer ("Attention is All You Need")
8. 2020 — GPT-3
9. 2022 — ChatGPT: 1M usuários em 5 dias
10. 2023–24 — Corrida dos LLMs
11. 2025–26 — Era Agêntica (hoje)

---

### SLIDE 4 — O Que é uma LLM?
**Tipo:** Explicação visual com analogia + conceitos em cards
**Layout:** Dividido em 2 colunas

**Coluna Esquerda — A Analogia:**
- Card grande com ícone de celular + teclado
- Texto: "Como o autocomplete do celular, mas treinado em centenas de bilhões de palavras"
- Visualização animada: sequência de palavras sendo "previstas" uma a uma

**Coluna Direita — Conceitos-Chave (6 cards flip):**

Cada card tem frente (ícone + nome) e verso (definição). O usuário clica para virar.

| Card | Frente | Verso |
|---|---|---|
| Token | Token | Pedaço de palavra. ~4 caracteres. Limites de uso são em tokens. |
| Prompt | Prompt | A instrução enviada à IA. Qualidade do prompt = qualidade da resposta. |
| Parâmetros | Parâmetros | Os "pesos" aprendidos. Mais parâmetros ≠ modelo melhor. |
| Contexto | Janela de Contexto | Quanto a IA "enxerga" de uma vez. Maior = lê mais código. |
| Temperatura | Temperatura | Controla criatividade. Baixa = mais preciso para código. |
| Alucinação | Alucinação | IA erra com confiança. Sempre revise o output! |

---

### SLIDE 5 — A Virada de 2025
**Tipo:** Comparativo visual "Antes vs. Depois"
**Layout:** Split screen (50/50) com divisor animado no centro

**Lado Esquerdo — Paradigma Anterior (2020–2024):**
- Fundo levemente escurecido
- Título: `"Escalar é Tudo"`
- Contador animado de parâmetros: `1.5B → 175B → 1.8T`
- Conclusão: Badge terracota `" Retornos Decrescentes"`

**Lado Direito — Novo Paradigma (2025–2026):**
- Fundo com destaque verde sutil
- Título: `"Eficiência e Raciocínio"`
- 4 cards verticais empilhados (aparecem em sequência com delay):
1. Chain-of-Thought
2. RLHF (Feedback Humano)
3. Destilação de Conhecimento
4. Synthetic Data
- Conclusão: Badge verde `" Modelo Menor, Mais Capaz"`

**Interatividade:** Botão "Saiba mais" em cada técnica abre modal com explicação detalhada.

---

### SLIDE 6 — LLM, Harness e Agente de IA
**Tipo:** Diagrama visual interativo
**Layout:** Centralizado, diagrama em camadas

**Componente — Diagrama em Camadas (clicar para expandir):**

```
┌─────────────────────────────────────┐
│ AGENTE DE IA │ ← Clicar revela: "LLM + Harness"
│ ┌───────────────────────────────┐ │
│ │ HARNESS │ │ ← Clicar lista os 5 componentes
│ │ ┌─────────────────────────┐ │ │
│ │ │ LLM │ │ │ ← Clicar mostra: "Só gera texto"
│ │ └─────────────────────────┘ │ │
│ └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

**Ao expandir o Harness, aparecem 5 badges flutuando ao redor:**
- Loop de Execução
- Memória Persistente
- Acesso a Ferramentas
- Segurança / HITL
- Observabilidade

**Rodapé do slide:** Equação destacada em tipografia grande:
> **Agente = LLM + Harness**

---

### SLIDE 7 — Dicionário de Conceitos
**Tipo:** Grid de cards interativos com categorias filtráveis
**Layout:** Filtro no topo + grid 3x3 abaixo

**Filtros (botões toggle):**
`Todos` | `Modelos` | `Arquitetura` | `Protocolos` | `Segurança`

**9 Cards (com ícone + nome + tag de categoria + definição curta):**

| Card | Categoria | Ícone |
|---|---|---|
| LLM | Modelos | |
| Harness | Arquitetura | |
| Agente de IA | Arquitetura | |
| MCP | Protocolos | |
| RAG | Arquitetura | |
| Banco Vetorial | Arquitetura | |
| Chain-of-Thought | Modelos | |
| MAS (Multiagente) | Arquitetura | |
| HITL | Segurança | |

**Interatividade:** Clicar em um card expande um painel lateral com a definição completa + analogia visual.

---

### SLIDE 8 — Modelos de Fronteira (Junho 2026)
**Tipo:** Tabs com 3 providers + tabela de status
**Layout:** Tabs no topo, conteúdo dinâmico abaixo

**Tabs:** `OpenAI` | `Anthropic (Claude)` | `Google (Gemini)`

**Conteúdo de cada tab — tabela de modelos com badges de status:**

```
OpenAI:
┌─────────────────┬─────────────────┬──────────────────────────┐
│ Modelo │ Status │ Observação │
├─────────────────┼─────────────────┼──────────────────────────┤
│ GPT-5.6 Sol │ Futuro │ Foco em matemática/lógica│
│ GPT-5.6 Terra │ Futuro │ Foco em CLI e agentes │
│ GPT-5.6 Luna │ Futuro │ Foco em autocomplete leve│
│ GPT-5.5 │ Ativo │ Flagship atual do Codex │
│ GPT-4.5 │ Aposentado │ Aposentado em 27/Jun/2026│
│ o3 │ Aposentando │ Fim: 26/Ago/2026 │
└─────────────────┴─────────────────┴──────────────────────────┘
```

**Badge de Status:**
- Verde → Ativo
- Âmbar → Aposentando em breve
- Terracota → Descontinuado
- Cinza → Acesso limitado

---

### SLIDE 9 — Antigravity (Google DeepMind)
**Tipo:** Card hero + 3 sub-cards de interface + lista de features
**Layout:** Card grande no topo, 3 cards menores abaixo

**Card Hero:**
- Logo/ícone do Antigravity
- Tagline: `"Plataforma Agêntica Completa (CLI + APP + IDE)"`
- Modelo principal: Gemini 3.5 Flash | Contexto: 1M tokens

**3 Cards de Interface (lado a lado):**

| CLI | APP (2.0) | IDE |
|---|---|---|
| Terminal em Go | Desktop Standalone | VS Code Fork |
| Alta velocidade | Orquestração multi-agente | Editor + Manager Surface |
| Substituiu Gemini CLI | Tarefas em background | Tab autocomplete |

**Lista de Features exclusivas** (ícones + texto curto):
- Subagentes dinâmicos em paralelo
- Artefatos verificáveis (planos, diffs)
- Science Skills (AlphaGenome, UniProt)
- SDK Python para agentes customizados

---

### SLIDE 10 — Codex (OpenAI)
**Tipo:** Card hero + 2 sub-cards de interface + alerta de limitação
**Layout:** Similar ao slide do Antigravity

**Card Hero:**
- Tagline: `"Agente Multi-Superfície (CLI + APP)"`
- Modelo: GPT-5.5 | Billing: Créditos rolantes (janela de 5h)

**2 Cards de Interface:**

| CLI | APP (Desktop + Web) |
|---|---|
| Inicia tarefas | Supervisão visual |
| Integra CI/CD | Deploy via "Codex Sites" |
| Transfere ao APP | Goal Management |

**Card de Alerta:**
```
Atenção: Instabilidade em Pico
GPT-5.5 pode apresentar "Model at capacity" em
horários de alta demanda (config. xhigh effort).
```

---

### SLIDE 11 — Claude Code (Anthropic)
**Tipo:** Card hero + 2 sub-cards de interface + destaque de features exclusivas
**Layout:** Similar aos slides anteriores

**Card Hero:**
- Tagline: `"Agente Terminal-First (APP + CLI)"`
- Modelos: Opus / Sonnet 5 / Sonnet 4.6 / Haiku / Fable | Contexto: até 1M tokens

**2 Cards de Interface:**

| CLI | APP (Desktop) |
|---|---|
| `npm install -g claude-code` | Gestão de sessões |
| Modos: safe → autonomous | Visualização de artefatos |
| Comandos `/model`, `/usage` | Review de alterações |

** Card de Mudança Importante (15/Jun/2026):**
```
Uso automatizado (CI/CD, GitHub Actions) foi
separado da cota de assinatura →
cobrado em sistema de créditos próprio.
```

**4 Features exclusivas em badges coloridos:**
`CLAUDE.md` | `MCP Nativo` | `Planning Mode` | `Hooks Automatizados`

---

### SLIDE 12 — Comparativo de Interfaces
**Tipo:** Tabela comparativa visual interativa
**Layout:** Tabela grande com linha por critério e coluna por ferramenta

**Tabela comparativa (linhas clicáveis para expandir detalhe):**

| Critério | Antigravity | Claude Code | Codex | Cursor | Windsurf |
|---|---|---|---|---|---|
| Interfaces | CLI+APP+IDE | CLI+APP | CLI+APP | IDE | IDE |
| Modelos | Multi | Claude | GPT | Multi | Multi |
| Contexto máx. | 1M tokens | 1M tokens | ~200K | Variável | Variável |
| Multi-Agente | Nativo | Limitado | Básico | | Sim (Cascade) |
| Estabilidade | | | | | |

**Interatividade:**
- Hover em célula: tooltip com explicação
- Clique na linha: expande painel com detalhes completos daquela ferramenta
- Botão `"Destacar Melhor"`: ilumina a célula vencedora de cada linha

---

### SLIDE 13 — Preços e Planos
**Tipo:** Cards de pricing lado a lado + tabela de concorrentes
**Layout:** 3 cards de providers no topo, tabela abaixo

**3 Cards de Provider (estilo pricing card moderno):**

```
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ OpenAI │ │ Anthropic │ │ Google │
│ (Codex) │ │ (Claude Code)│ │ (Antigravity)│
│ │ │ │ │ │
│ Plus $20 │ │ Pro $20 │ │ AI Pro $20 │
│ Pro $100 │ │ Max5x $100 │ │ Ultra $100 │
│ Pro $200 │ │ Max20x $200 │ │ Ultra+ $200 │
└──────────────┘ └──────────────┘ └──────────────┘
```

**Toggle interativo:** `Mensal / Anual` (mostra desconto quando aplicável)

**Tabela de Concorrentes abaixo:**

| Ferramenta | Entrada | Teams | Status |
|---|---|---|---|
| Cursor | $20/mês | $60–$200 | Normal |
| Windsurf | $20/mês | Sob consulta | Normal |
| GitHub Copilot | $10/mês* | $39/mês* | Pausado |

**Card de Alerta — Copilot:**
```
GitHub Copilot — Novas assinaturas pausadas desde 20/Abr/2026.
Sem previsão de retorno. Problemas de billing em contas existentes.
NÃO recomendado para novas adoções.
```

---

### SLIDE 14 — A Equipe e Suas IDEs
**Tipo:** Organograma visual interativo
**Layout:** Hierarquia visual com cards de perfil clicáveis

**Organograma com 6 nodes (Gerente + 5 Devs):**

Cada node é um card com:
- Avatar com ícone do papel
- Nome do perfil
- Stack de tecnologias (badges coloridos)
- IDE atual (badge cinza)

**Ao clicar em um node:** O slide anima para revelar o painel de recomendação daquele perfil (pode ser o próximo slide ou um overlay lateral).

---

### SLIDE 15 — Recomendação por Dev (Slide Dinâmico)
**Tipo:** Painel de detalhes com navegação por perfil
**Layout:** Sidebar esquerda com lista de perfis + área de detalhe à direita

**Sidebar (esquerda):** Lista vertical dos 6 membros com avatar e nome. Clicar alterna o painel.

**Painel de Detalhe (direita):** Para cada perfil, exibe:
- **Header:** IDE atual + Stack
- **Solução Primária:** Card verde com ferramenta recomendada
- **Complemento:** Card azul com ferramenta secundária
- **Por que?** Texto explicativo curto (2–3 linhas)
- **Plano / Custo:** Badge com valor mensal
- ** Atenção:** Card âmbar com limitação relevante (se houver)

**Conteúdo dos 6 perfis:**

1. **Gerente** → Codex APP / $20 / "Sem terminal"
2. **Dev Sênior** → JetBrains AI + Claude Code CLI / $20 / "Dois ambientes"
3. **Dev Front-end** → Antigravity IDE / Cursor / $20 / "IDE assistida"
4. **Dev Back-end** → Claude Code CLI / $20 / "Community sem AI nativo"
5. **Full-stack 1** → Antigravity IDE / Cursor / $20 / "Familiaridade com IDE"
6. **Full-stack 2** → Antigravity IDE / Cursor / $20 / "Familiaridade com IDE"

---

### SLIDE 16 — Mapa de Custos da Equipe
**Tipo:** Visualização de custo total com breakdown
**Layout:** Grade de assentos (Seat Grid) com 6 cards + totalizador abaixo

**Assentos por membro (6 licenças individuais de $20/mês):**
- Gestora: Codex APP / Web ($20/mês)
- Dev Sênior: Claude Code CLI ($20/mês)
- Dev Front-end: Antigravity / Cursor ($20/mês)
- Dev Back-end: Claude Code CLI ($20/mês)
- Full-stack 1: Antigravity / Cursor ($20/mês)
- Full-stack 2: Antigravity / Cursor ($20/mês)
─────────────────────
TOTAL: $120/mês

**Cards de contexto abaixo da grade:**
- Card verde: "Equivale a uma assinatura corporativa de ferramentas profissionais de ponta"
- Card azul: "Custo homogêneo e plano para a equipe"
- Card âmbar: "Todos no plano base de $20/mês (Pro) para controle previsível de budget"

---

### SLIDE 17 — Próximos Passos
**Tipo:** Checklist de adoção com status interativo
**Layout:** Lista de ações com checkboxes clicáveis (apresentação participativa)

**Ações agrupadas por fase:**

**Fase 1 — Agora (Semana 1–2):**
- [ ] Criar contas nos providers (Anthropic, Google, OpenAI)
- [ ] Dev Front-end: instalar Antigravity IDE
- [ ] Dev Sênior: ativar JetBrains AI Assistant no IntelliJ Ultimate
- [ ] Dev Back-end: instalar plugin Claude Code no IntelliJ Community
- [ ] Full-stacks: instalar Claude Code CLI (`npm install -g @anthropic-ai/claude-code`)
- [ ] Gerente: criar conta ChatGPT Plus

**Fase 2 — Semana 3–4:**
- [ ] Criar `CLAUDE.md` e `GEMINI.md` nos repositórios principais
- [ ] Treinar equipe em Prompt Engineering básico
- [ ] Primeira sessão agêntica supervisionada (tarefa real, com revisão)

**Fase 3 — Mês 2+:**
- [ ] Integrar Claude Code CLI no pipeline de CI/CD
- [ ] Avaliar upgrade para Claude Max 5x para outros devs (se necessário)
- [ ] Revisar custo vs. produtividade e ajustar planos

**Interatividade:** Os checkboxes podem ser marcados durante a apresentação, tornando-a uma sessão de planejamento participativo.

---

### SLIDE 18 — Conclusão
**Tipo:** Hero de encerramento
**Fundo:** Escuro (`#1A2332`), texto invertido
**Layout:** Centralizado, minimalista

**Conteúdo:**
- Título: `"O Futuro do Desenvolvimento é Agêntico"`
- 3 frases-chave em destaque (aparecem em sequência):
1. `"LLMs são o cérebro. O Harness é o corpo."`
2. `"O papel do dev muda: de escritor de código para arquiteto de agentes."`
3. `"Começar hoje custa menos do que esperar."`
- Rodapé: `"Pesquisa realizada em Junho 2026 — Equipe de Desenvolvimento"`

---

## 4. Navegação e Controles

### Métodos de Navegação
| Método | Ação |
|---|---|
| `→` / `Space` | Próximo slide |
| `←` | Slide anterior |
| `Home` / `End` | Primeiro / Último slide |
| Clique nos dots | Vai direto para o slide |
| Swipe (touch) | Funciona em tablets |
| `F` ou `F11` | Modo fullscreen |

### HUD (Heads-Up Display)
```
Canto inferior esquerdo: Título da seção atual
Centro inferior: Dots de progresso (clicáveis)
Canto inferior direito: "Slide 3 / 18"
Topo direito: Botão de menu (lista todos os slides)
```

### Menu de Navegação Rápida
Botão "≡" no topo direito abre painel lateral com todos os 18 slides listados — clicar vai direto para o slide escolhido. Útil durante a apresentação para pular seções.

---

## 5. Especificações Técnicas

### Layout de Slide
```css
.slide {
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: clamp(24px, 4vw, 64px);
box-sizing: border-box;
position: absolute;
transition: opacity 0.4s ease, transform 0.4s ease;
}
```

### Sistema de Transição entre Slides
```
Tipo: Fade + slide horizontal suave
Duração: 400ms
Easing: ease-in-out
Slides inativos: opacity 0, pointer-events none
Slide ativo: opacity 1
```

### Responsividade
```
> 1440px: Layout desktop (máximo aproveitamento)
1024–1440: Layout notebook (escala proporcional)
768–1024: Layout tablet (reorganização de colunas)
< 768: Layout mobile (slides simplificados, scroll vertical)
```

### Acessibilidade
- `aria-label` em todos os botões de navegação
- `role="region"` e `aria-roledescription="slide"` nos slides
- Contraste mínimo WCAG AA em todos os textos
- Navegação por teclado completa

---

## 6. Ordem de Desenvolvimento Recomendada

```
1. [ ] Setup: estrutura de arquivos + boilerplate HTML
2. [ ] CSS: design system completo (variáveis, tipografia, cores)
3. [ ] JS: sistema de navegação entre slides (teclado + dots)
4. [ ] Slide 1 (Capa) e Slide 18 (Conclusão) — moldura da apresentação
5. [ ] Slide 2 (Agenda) com navegação por cards
6. [ ] Slides 3–7 (Fundamentos) — conteúdo educacional
7. [ ] Slide 7 (Dicionário) — componente de filtro/grid
8. [ ] Slides 8–11 (Ferramentas) — cards de cada produto
9. [ ] Slide 12 (Comparativo) — tabela interativa
10.[ ] Slide 13 (Preços) — pricing cards
11.[ ] Slides 14–15 (Equipe) — organograma + painel dinâmico
12.[ ] Slide 16 (Custos) — visualização de barras
13.[ ] Slide 17 (Próximos Passos) — checklist interativo
14.[ ] Refinamento: animações de entrada + polish visual
15.[ ] Teste em diferentes resoluções + ajustes finais
```
