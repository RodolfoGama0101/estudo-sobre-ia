# Plano de Pesquisa: Ferramentas Agênticas de IA para Desenvolvimento (2026)

Este plano de pesquisa estabelece os objetivos, escopo e metodologia para investigar e consolidar informações precisas sobre os agentes de Inteligência Artificial voltados ao desenvolvimento de software, com foco em **Antigravity**, **Codex** e **Claude Code**, além de compará-los com outros players do mercado (Cursor, Devin, etc.).

---

## Objetivo da Pesquisa
Obter informações atualizadas e corretas sobre a arquitetura, interfaces, modelos compatíveis, limites de uso, precificação e adequação para fluxos de trabalho agênticos em equipes de desenvolvimento.

---

## Escopo de Investigação das Ferramentas e Interfaces

A pesquisa deve analisar as ferramentas com base nas seguintes interfaces reais:

```mermaid
grid
title Distribuição de Interfaces por Ferramenta
Antigravity : CLI | APP | IDE
Codex : CLI | APP
Claude Code : APP | CLI
```

### 1. Antigravity (Google DeepMind)
* **Interfaces a investigar:** CLI (Command Line Interface), APP (Aplicativo dedicado) e IDE (Ambiente de Desenvolvimento Integrado).
* **Compatibilidade de Modelos:** Pesquisar suporte a modelos do ecossistema Google (Gemini), Anthropic (Claude), OpenAI e outros modelos de mercado.
* **Pontos Críticos:** Como a ferramenta gerencia a orquestração de subagentes nas três interfaces e quais os limites de uso impostos por cada ambiente.

### 2. Codex (OpenAI)
* **Interfaces a investigar:** CLI (Command Line Interface) e APP (Aplicativo dedicado).
* **Compatibilidade de Modelos:** Pesquisar suporte a modelos da OpenAI e de outros parceiros.
* **Pontos Críticos:** Limites de cota, problemas de capacidade dos modelos em horários de pico e a utilidade prática do ambiente APP versus a agilidade da CLI.

### 3. Claude Code (Anthropic)
* **Interfaces a investigar:** APP (Aplicativo dedicado) e CLI (Command Line Interface).
* **Compatibilidade de Modelos:** Pesquisar suporte a modelos da família Claude (Anthropic) e eventuais integrações externas.
* **Pontos Críticos:** Gerenciamento de janelas de contexto, cobrança via chaves de API comparado a planos de assinatura nos ambientes APP e CLI.

---

## Perguntas-Chave a Serem Respondidas

### A. Modelos e Capacidades
* Quais são os modelos de ponta mais recentes fornecidos pela **OpenAI**, **Anthropic (Claude)**, **Google (Gemini)** e outros concorrentes que alimentam cada uma dessas ferramentas em 2026?
* Quais os tamanhos máximos de janela de contexto que cada ferramenta suporta sem perda de desempenho nas diferentes interfaces?

### B. Limites Físicos e Gargalos Operacionais
* Quais são as restrições de concorrência, limites de chamadas por minuto (RPM) e limites de tokens por minuto (TPM) para cada uma das interfaces de cada ferramenta?
* Existem limitações de ambiente (por exemplo, necessidade de rodar em containers específicos ou restrições de sistema operacional)?

### C. Precificação e Modelos de Negócio
* Qual é o custo atualizado das assinaturas e planos pagos de cada ferramenta?
* Como funciona a estrutura de custos de consumo de tokens/API versus assinaturas planas em 2026 para cada agente?
* Qual é a situação atual de mercado de ferramentas como o **GitHub Copilot** (problemas de assinatura/limites) e alternativas viáveis?

### D. Adoção Greenfield (Adoção Inicial por Equipes)
* Qual das interfaces (CLI, APP ou IDE) e ferramentas apresenta a menor curva de aprendizado para desenvolvedores que nunca usaram agentes de IA de forma ativa?
* Como estruturar um fluxo de trabalho onde a IA atua de forma agêntica (planejando e executando) em vez de apenas autocomplete?

---

## ️ Metodologia e Fontes de Informação
1. **Documentação Oficial e Repositórios:** Analisar as documentações mais recentes do Antigravity, Anthropic (Claude Code) e OpenAI (Codex).
2. **Monitoramento de Status e Lançamentos:** Pesquisar comunicados de atualizações recentes em blogs oficiais e changelogs das empresas de IA para o ano de 2026.
3. **Comunidades e Fóruns de Desenvolvedores:** Investigar relatos práticos de usuários no Reddit, GitHub Issues e fóruns especializados sobre limitações de cota, instabilidades e problemas de assinatura do Copilot e outros agentes.
4. **Análise Comparativa:** Compilar os dados em uma tabela matricial de decisão baseada nos critérios de atrito de adoção, custo e autonomia do agente.
