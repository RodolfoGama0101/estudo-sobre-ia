# 🌌 Estudo sobre IA — Ferramentas Agênticas para Desenvolvimento (2026)

Este repositório reúne uma pesquisa técnica aprofundada e uma apresentação interativa sobre o ecossistema de **ferramentas agênticas de Inteligência Artificial** para engenharia de software em **2026**. O foco da análise está em ferramentas líderes como **Antigravity** (Google DeepMind), **Codex** (OpenAI), e **Claude Code** (Anthropic), apresentando também projetos práticos criados através desse novo paradigma de desenvolvimento colaborativo.

---

## 📁 Estrutura do Projeto

O repositório está organizado de forma modular, dividindo-se entre a fundamentação teórica/pesquisa e o artefato interativo de apresentação:

*   **📂 [pesquisa/](file:///c:/Users/rodolfo/Desktop/Estudo%20sobre%20IA/pesquisa)**: Documentação e planejamento da pesquisa.
    *   📄 [plano_de_pesquisa_ia_2026.md](file:///c:/Users/rodolfo/Desktop/Estudo%20sobre%20IA/pesquisa/plano_de_pesquisa_ia_2026.md): Definição de escopo, objetivos de negócios, perguntas de pesquisa e metodologia.
    *   📄 [resultados_pesquisa_ia_2026.md](file:///c:/Users/rodolfo/Desktop/Estudo%20sobre%20IA/pesquisa/resultados_pesquisa_ia_2026.md): Deep dive técnico com a análise comparativa de custos, modelos de fronteira, alucinações e estratégias de adoção organizacional.
    *   📄 [plano_apresentacao_html.md](file:///c:/Users/rodolfo/Desktop/Estudo%20sobre%20IA/pesquisa/plano_apresentacao_html.md): Design system da apresentação, incluindo a estrutura de slides planejada e definições de paleta de cores.
*   **📂 [apresentacao-ia-2026/](file:///c:/Users/rodolfo/Desktop/Estudo%20sobre%20IA/apresentacao-ia-2026)**: Aplicação web interativa da apresentação de slides.
    *   🌐 [index.html](file:///c:/Users/rodolfo/Desktop/Estudo%20sobre%20IA/apresentacao-ia-2026/index.html): Estrutura semântica dos slides e painéis interativos.
    *   🎨 `css/`: Design System curado, layouts responsivos e animações de transição.
    *   ⚡ `js/`: Lógica de navegação via teclado/mouse/toque, gerenciamento de temas (Dark/Light mode) e controle dinâmico de mídias.

---

## 🎨 Apresentação Interativa (Vanilla Web)

A apresentação de slides foi desenvolvida utilizando tecnologias nativas da web (**Vanilla HTML5, CSS3 e JavaScript ES6**) para garantir o máximo desempenho, portabilidade e controle estético, sem a sobrecarga de frameworks externos.

### Recursos Destacados:
*   **Navegação Inteligente**: Suporte completo a navegação via setas do teclado (`←` e `→`), botões na tela e gestos de arrastar em dispositivos móveis.
*   **Design System Moderno**: Cores sofisticadas (tons de bege claro, marrom quente e azul-marinho profundo) com transições dinâmicas de tema claro/escuro.
*   **Elementos Interativos**: Abas comparativas de ferramentas, matrizes de decisão interativas e controles deslizantes.
*   **Modo Apresentador Integrado**: Cursor vermelho de destaque ativado por botão (ou tecla `C`) e menu de atalho de índice lateral (gaveta) para saltar rapidamente entre tópicos.

---

## 🛠️ Projetos Criados com Agentes de IA

Para validar a eficiência das ferramentas agênticas analisadas, foram criados e estruturados quatro projetos representativos de diferentes plataformas e tecnologias:

### 1. 📱 Bookself App — Plataforma de Leitura Compartilhada
Aplicativo mobile premium focado no gerenciamento colaborativo de metas literárias, estantes de livros virtuais e progresso de estudos conjuntos.
*   **Tech Stack**: Flutter, Firebase Auth, Cloud Firestore, Provider.
*   **Destaque**: Sincronização em tempo real e feed de atividades compartilhadas com gráficos de progresso.
*   **Como a IA ajudou**: Geração e refinação de layouts complexos e mapeamento semântico de coleções no Firestore.
*   🔗 **Repositório**: [RodolfoGama0101/bookself-app](https://github.com/RodolfoGama0101/bookself-app.git)

---

### 2. 💻 YT Downloader — Utilitário Desktop Portable
Interface desktop intuitiva e simplificada para baixar áudio e vídeo da web com conversão sob demanda.
*   **Tech Stack**: Python, CustomTkinter, `yt-dlp`, FFmpeg autogerido.
*   **Destaque**: Compilado em executável portátil `.exe` de arquivo único funcional sem dependências locais externas.
*   **Como a IA ajudou**: Escrita acelerada dos widgets do CustomTkinter e scripts de empacotamento com PyInstaller.
*   🔗 **Repositório**: [RodolfoGama0101/yt-downloader](https://github.com/RodolfoGama0101/yt-downloader.git)

---

### 3. ⚖️ ADVO — Gestão Jurídica & Landing Page
Plataforma web integrada para escritórios de advocacia que automatiza o controle de prazos judiciais, fluxo de caixa e agenda institucional.
*   **Tech Stack**: Java 25, Spring Boot 4, React 19, Vite 8, MariaDB.
*   **Destaque**: Arquitetura modular robusta baseada em **Ports & Adapters (Hexagonal)** com Landing Page institucional otimizada para SEO.
*   **Como a IA ajudou**: Estruturação de contratos de domínio, migrations automatizadas com Flyway e testes unitários com mocks.
*   🔗 **Repositório**: [RodolfoGama0101/advo](https://github.com/RodolfoGama0101/advo.git)
*   🌐 **Deploy**: [advo-landing-page.vercel.app](https://advo-landing-page.vercel.app/)

---

### 4. ⚙️ Refatoração de Microsserviços Legados
Projeto corporativo de migração e modernização arquitetural de microsserviços legados em produção.
*   **Tech Stack**: Java 25, Spring Boot 4.1.0, Keycloak.
*   **Destaque**: Atualização de Java 11 para Java 25 e Spring Boot 2.5.0 para 4.1.0, resolvendo dependências circulares e integrando novos fluxos OAuth2.
*   **Como a IA ajudou**: Análise automatizada de logs de compilação e refatoração de configurações de segurança deprecadas do Spring Security.

---

## 📈 Principais Insights da Pesquisa

> [!NOTE]
> **A Grande Virada de 2025/2026**: A indústria migrou da mentalidade de "modelos cada vez maiores" (Scaling Laws) para "modelos mais eficientes com raciocínio integrado" (Chain-of-Thought e Reinforcement Learning).

A pesquisa detalha a equação fundamental das ferramentas agênticas de hoje:

$$\boxed{\text{Agente de IA} = \text{LLM (Cérebro)} + \text{Harness (Corpo)}}$$

### Análise Comparativa das Ferramentas:

| Ferramenta | Provedor | Interface Principal | Foco Técnico | Vantagens |
| :--- | :--- | :--- | :--- | :--- |
| **Antigravity** | Google DeepMind | CLI + APP + IDE | Suporte multimoldelo local e nuvem | Integração nativa com Workspace Google e contexto de 2M tokens |
| **Codex** | OpenAI | CLI + API | Geração rápida de blocos de código | Altíssima precisão em algoritmos matemáticos e lógica lógica |
| **Claude Code** | Anthropic | CLI Agêntica | Resolução de bugs complexos em bases de código | Raciocínio em cadeia exemplar (CoT) para depuração |

---

## 🚀 Como Executar a Apresentação Localmente

Para visualizar a apresentação interativa de slides com todos os recursos e fontes otimizados:

1.  Certifique-se de ter o repositório clonado localmente.
2.  Inicie um servidor HTTP local simples no diretório da apresentação para evitar bloqueios de CORS por arquivos locais:
    *   **Usando Python**:
        ```bash
        cd apresentacao-ia-2026
        python -m http.server 8000
        ```
    *   **Usando Node.js / npx**:
        ```bash
        cd apresentacao-ia-2026
        npx http-server -p 8000
        ```
3.  Acesse `http://localhost:8000` em seu navegador de preferência.

---

## 📝 Licença

Este projeto é desenvolvido para fins educacionais e corporativos. Todos os direitos reservados aos respectivos autores dos subprojetos associados.
