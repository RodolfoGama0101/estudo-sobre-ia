# Estudo sobre IA — Ferramentas Agênticas para Desenvolvimento (2026)

Este repositório contém uma pesquisa aprofundada e uma apresentação interativa sobre o panorama das ferramentas agênticas de Inteligência Artificial para desenvolvimento de software em **2026**, com foco em **Antigravity** (Google DeepMind), **Codex** (OpenAI), e **Claude Code** (Anthropic).

---

## 📁 Estrutura do Projeto

O projeto é dividido entre documentos de pesquisa e a aplicação web da apresentação:

*   **[plano_de_pesquisa_ia_2026.md](file:///c:/Users/rodolfo/Desktop/Estudo%20sobre%20IA/pesquisa/plano_de_pesquisa_ia_2026.md)**: Planejamento inicial contendo os objetivos, escopo, metodologia e perguntas-chave a serem respondidas pela pesquisa.
*   **[resultados_pesquisa_ia_2026.md](file:///c:/Users/rodolfo/Desktop/Estudo%20sobre%20IA/pesquisa/resultados_pesquisa_ia_2026.md)**: Compilado detalhado das informações coletadas, estruturado em seções que vão dos fundamentos da IA e história até a análise técnica profunda e o processo de adoção.
*   **[plano_apresentacao_html.md](file:///c:/Users/rodolfo/Desktop/Estudo%20sobre%20IA/pesquisa/plano_apresentacao_html.md)**: Documento de design que define o fluxo de slides, a paleta de cores (Design System) e a estrutura interativa da apresentação em HTML.
*   **[apresentacao-ia-2026/](file:///c:/Users/rodolfo/Desktop/Estudo%20sobre%20IA/apresentacao-ia-2026)**: Diretório contendo a aplicação web interativa da apresentação.
    *   `index.html`: Estrutura principal dos slides.
    *   `css/`: Design system, layouts específicos dos slides e estilos dos componentes (cards, badges, botões, tabelas).
    *   `js/`: Scripts de navegação pelos slides (suporte a teclado, botões e gestos), animações de entrada e lógica de componentes dinâmicos (como abas e comparativos).

---

## 🎨 Apresentação Interativa

A apresentação foi desenvolvida utilizando tecnologias web modernas sem o uso de frameworks externos (**Vanilla HTML/CSS/JavaScript**), garantindo leveza e controle total sobre a experiência visual.

### Principais Funcionalidades da Apresentação
*   **Navegação Fluida**: Navegue entre os slides utilizando as teclas de seta (`←` e `→`), botões de paginação integrados ou gestos em dispositivos móveis.
*   **Design System Curado**: Paleta de cores moderna (baseada em tons de bege claro, marrom e azul navy) combinando estética vintage minimalista com elementos modernos de interface de usuário.
*   **Animações de Entrada**: Efeitos sutis e elegantes que trazem dinamismo aos conteúdos ao mudar de slide.
*   **Componentes Interativos**: Seções dinâmicas como comparativos em abas e matrizes de decisão para facilitar a absorção das informações.

---

## 🚀 Como Executar a Apresentação

Para visualizar a apresentação de slides:

1.  Clone este repositório (caso ainda não o tenha feito localmente).
2.  Abra o arquivo `apresentacao-ia-2026/index.html` diretamente em qualquer navegador moderno.
3.  *Recomendado*: Para garantir que todas as fontes do Google Fonts e caminhos funcionem sem restrições do navegador sobre arquivos locais, execute um servidor local simples no diretório raiz ou dentro de `apresentacao-ia-2026/`:
    *   **Python**:
        ```bash
        python -m http.server 8000
        ```
        Acesse `http://localhost:8000/apresentacao-ia-2026` no seu navegador.
    *   **Node.js / npx**:
        ```bash
        npx http-server
        ```
    *   **VS Code**: Use a extensão *Live Server*.

---

## 📊 Tópicos Abordados na Pesquisa

*   **Fundamentos de IA**: Breve história, o que são LLMs, a diferença entre *Generative AI* e *Agentic AI*.
*   **Deep Dive Técnico**:
    *   **Antigravity** (Google DeepMind): CLI, APP e IDE integrados, suporte a múltiplos modelos.
    *   **Codex** (OpenAI): CLI, APP, limites de cotas e orquestração.
    *   **Claude Code** (Anthropic): Adoção rápida via CLI, custos com API.
*   **Matriz Comparativa**: Confronto direto de capacidades, preços, facilidade de adoção e limites.
*   **Boas Práticas de Adoção**: Estratégias para adoção *Greenfield* por times de engenharia.
