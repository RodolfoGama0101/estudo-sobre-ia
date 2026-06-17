/* apresentacao-ia-2026/js/components.js */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. SLIDE 2 — Agenda Clicks
  const agendaCards = document.querySelectorAll('.agenda-link-card');
  agendaCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const targetIndex = parseInt(card.getAttribute('data-slide-index'), 10);
      if (window.slideshow && !isNaN(targetIndex)) {
        window.slideshow.goToSlide(targetIndex);
      }
    });
  });

  // 2. SLIDE 3 — Timeline Interativa
  const timelineNodes = document.querySelectorAll('.timeline-node');
  const progressLine = document.querySelector('.timeline-progress-line');
  const timelineDetail = document.querySelector('.timeline-detail-card');
  
  // Timeline Data
  const timelineData = {
    "1950": {
      title: "Teste de Turing",
      desc: "Alan Turing propõe o famoso 'Jogo da Imitação' para definir formalmente se uma máquina é capaz de pensar. Estabeleceu as fundações teóricas da ciência da computação e da IA."
    },
    "1956": {
      title: "Conferência de Dartmouth",
      desc: "John McCarthy, Marvin Minsky e outros organizam o workshop onde o termo 'Inteligência Artificial' é oficialmente cunhado. A IA nasce como campo acadêmico."
    },
    "1960": {
      title: "IA Simbólica",
      desc: "Sistemas baseados em lógica matemática e regras escritas à mão por humanos. Tentava representar o conhecimento como árvores de decisão estruturadas ('se X então Y')."
    },
    "1980": {
      title: "Inverno da IA",
      desc: "Promessas exageradas e falta de poder de processamento levam ao corte massivo de verbas de pesquisa. Período de esfriamento nas expectativas comerciais."
    },
    "1990": {
      title: "Machine Learning Clássico",
      desc: "Mudança de paradigma: em vez de programar regras, ensina-se computadores a extrair padrões estatísticos a partir de dados (algoritmos como SVM, Random Forests)."
    },
    "2012": {
      title: "Deep Learning Explode",
      desc: "A rede neural convolucional AlexNet vence o desafio ImageNet por larga margem de acerto, impulsionada pelo uso de GPUs comerciais. Redes profundas tornam-se o padrão em visão computacional."
    },
    "2017": {
      title: "Transformer",
      desc: "Pesquisadores do Google publicam o artigo 'Attention is All You Need'. O mecanismo de Atenção permite que computadores processem sequências longas em paralelo, servindo de base para todos os LLMs."
    },
    "2020": {
      title: "GPT-3",
      desc: "A OpenAI lança o primeiro grande modelo de linguagem com 175 bilhões de parâmetros. Mostra capacidades inéditas de geração textual coerente e poucas amostras (few-shot learning)."
    },
    "2022": {
      title: "ChatGPT",
      desc: "Interface de chat sobre o GPT-3.5 atinge 1 milhão de usuários em apenas 5 dias. Democratizou o acesso à IA geradora de código e texto, iniciando a corrida armamentista tecnológica."
    },
    "2023": {
      title: "Corrida das LLMs",
      desc: "Google, Anthropic e Meta entram na disputa com Gemini, Claude e Llama. Foco intenso em aumentar o contexto de tokens e o número bruto de parâmetros."
    },
    "2025": {
      title: "Era Agêntica",
      desc: "A indústria percebe os limites da escalabilidade e foca em raciocínio lógico (Chain-of-Thought) e infraestrutura agêntica (Harness). A IA deixa de apenas conversar e passa a operar ferramentas no terminal."
    }
  };

  timelineNodes.forEach((node, idx) => {
    node.addEventListener('click', () => {
      // Set active nodes
      timelineNodes.forEach((n, i) => {
        n.classList.toggle('active', i <= idx);
      });
      
      // Update progress line
      const percent = (idx / (timelineNodes.length - 1)) * 100;
      if (progressLine) progressLine.style.width = `${percent}%`;
      
      // Show event detail card
      const year = node.getAttribute('data-year');
      const data = timelineData[year];
      if (data && timelineDetail) {
        timelineDetail.style.display = 'block';
        timelineDetail.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <h3 style="color: var(--color-primary); font-family: var(--font-headings); font-weight: 700;">${year} — ${data.title}</h3>
            <span class="badge ${year === '2025' ? 'badge-secondary' : 'badge-dark'}">${year === '2025' ? 'ERA ATUAL' : 'MARCO'}</span>
          </div>
          <p>${data.desc}</p>
        `;
      }
    });
  });

  // 3. SLIDE 4 — Flip Cards (Conceitos LLM)
  const flipCards = document.querySelectorAll('.flip-card-container');
  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  // 4. SLIDE 5 — Split Screen Modals (A Virada de 2025)
  const modalOpenBtns = document.querySelectorAll('.modal-open-btn');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalContentBody = document.querySelector('.modal-content-body');
  const modalCloseBtn = document.querySelector('.modal-overlay .modal-close');

  const modalData = {
    cot: {
      title: "🧠 Chain-of-Thought (Cadeia de Raciocínio)",
      desc: "Instrui a IA a desmembrar problemas em etapas lógicas sequenciais antes de fornecer o veredito final. Em vez de calcular a resposta instantaneamente, o modelo 'ensaia' no rascunho de texto.<br><br><strong>Impacto prático:</strong> Aumenta drasticamente o acerto em depuração de código, permitindo que o modelo rastreie variáveis e encontre bugs lógicos que seriam ignorados em inferência direta rápida."
    },
    rlhf: {
      title: "👥 RLHF (Reinforcement Learning from Human Feedback)",
      desc: "Técnica de alinhamento onde revisores humanos ranqueiam respostas da IA. O modelo de recompensa treina o gerador principal para preferir clareza, formatação e veracidade.<br><br><strong>Impacto prático:</strong> Reduz drasticamente as respostas rudes, enviesadas ou confusas, gerando saídas de código limpo e formatadas nos padrões exigidos pela indústria."
    },
    distillation: {
      title: "📦 Destilação de Conhecimento",
      desc: "Processo técnico onde o comportamento de um modelo gigante (ex: 2 trilhões de parâmetros) é transferido para um modelo muito menor (ex: 8-15 bilhões) através do treino nas probabilidades de saída.<br><br><strong>Impacto prático:</strong> Fornece modelos ultra-rápidos e eficientes (como Gemini 3.5 Flash) que rodam com baixíssimo custo, mantendo 90% da inteligência dos gigantes de fronteira."
    },
    synthetic: {
      title: "🧪 Dados Sintéticos (Synthetic Data)",
      desc: "Consiste no treinamento de modelos usando conjuntos de dados que foram gerados, filtrados e validados por outras IAs especialistas, resolvendo a escassez de dados reais legíveis na web.<br><br><strong>Impacto prático:</strong> Fornece dados altamente limpos de raciocínio lógico e matemático, ajudando a quebrar os gargalos técnicos que limitavam o aprendizado profundo tradicional."
    }
  };

  modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const type = btn.getAttribute('data-modal-type');
      const data = modalData[type];
      if (data && modalOverlay && modalContentBody) {
        modalContentBody.innerHTML = `
          <h2 style="margin-bottom: 16px; color: var(--color-primary);">${data.title}</h2>
          <p style="color: var(--text-main); font-size: 1rem; line-height: 1.6;">${data.desc}</p>
        `;
        modalOverlay.classList.add('active');
      }
    });
  });

  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
    
    // Close on clicking overlay background
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // 5. SLIDE 6 — Diagram Layers (Agentes / Harness)
  const diagramLayers = document.querySelectorAll('.diagram-layer');
  diagramLayers.forEach(layer => {
    layer.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = layer.classList.contains('active');
      
      // Toggle current layer
      layer.classList.toggle('active', !isActive);
    });
  });

  // 6. SLIDE 7 — Dicionário de Conceitos Filtrável
  const filterBtns = document.querySelectorAll('.filter-btn');
  const dictCards = document.querySelectorAll('.dict-card');

  const dictData = {
    "llm": {
      title: "🧠 Large Language Model (LLM)",
      analogy: "O Cérebro no Frasco.",
      definition: "Modelo matemático baseado na arquitetura Transformer treinado para prever os próximos fragmentos de palavras (tokens). Sozinho, não possui memória persistente, não consegue rodar scripts no terminal nem navegar na internet."
    },
    "harness": {
      title: "⚙️ Harness (Suporte Agêntico)",
      analogy: "O Corpo e Sistema Nervoso.",
      definition: "A infraestrutura de código que envolve a LLM, provendo loop de execução (Pensar → Agir → Observar), acesso a ferramentas (terminal, editores de arquivo, navegadores) e controles de segurança contra execução de scripts maliciosos."
    },
    "agente": {
      title: "🤖 Agente de IA",
      analogy: "O Trabalhador Autônomo.",
      definition: "A união da LLM (raciocínio) com o Harness (ações). O agente recebe um objetivo de alto nível e trabalha de forma cíclica e autônoma, analisando erros, adaptando seus planos e persistindo até atingir a meta."
    },
    "mcp": {
      title: "🔌 Model Context Protocol (MCP)",
      analogy: "O USB-C das Ferramentas.",
      definition: "Protocolo universal e aberto que padroniza a conexão de agentes de IA com servidores de dados externos (Slack, GitHub, Postgres, Jira), evitando integrações complexas e customizadas para cada ferramenta."
    },
    "rag": {
      title: "🧵 Retrieval-Augmented Generation (RAG)",
      analogy: "A Consulta Rápida à Biblioteca.",
      definition: "Técnica que busca informações relevantes em base de dados externa e injeta os arquivos no contexto da LLM antes da resposta ser gerada, garantindo respostas atualizadas sobre documentações internas sem custos de re-treinamento."
    },
    "vetorial": {
      title: "🗄️ Banco Vetorial (Vector DB)",
      analogy: "A Memória de Longo Prazo Semântica.",
      definition: "Banco de dados especializado que converte textos em vetores matemáticos e os localiza através de similaridade semântica (significado). Crucial para armazenar históricos de chats longos e recuperar contextos via RAG."
    },
    "cot": {
      title: "🪢 Chain-of-Thought (Cadeia de Pensamento)",
      analogy: "O Rascunho de Ideias.",
      definition: "Processo onde a IA explica passo a passo o raciocínio intermediário antes de entregar a resposta final. Melhora consideravelmente a consistência lógica do código gerado."
    },
    "mas": {
      title: "👥 Multi-Agent System (MAS)",
      analogy: "A Equipe de Programação.",
      definition: "Arquitetura de sistemas onde múltiplos agentes especializados (planejador, escritor de código, revisor de segurança, testador) colaboram em paralelo para solucionar problemas complexos, reportando progresso a um orquestrador."
    },
    "hitl": {
      title: "🛡️ Human-in-the-Loop (HITL)",
      analogy: "O Supervisor de Segurança.",
      definition: "Padrão de engenharia que insere verificações manuais de aprovação em ações potencialmente críticas tomadas por agentes, tais como commits em repositório master, exclusão de arquivos ou deploys de produção."
    }
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active classes
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      dictCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  dictCards.forEach(card => {
    card.addEventListener('click', () => {
      const conceptKey = card.getAttribute('data-concept');
      const data = dictData[conceptKey];
      if (data && modalOverlay && modalContentBody) {
        modalContentBody.innerHTML = `
          <h2 style="color: var(--color-primary); font-family: var(--font-headings); font-weight: 700; margin-bottom: 8px;">${data.title}</h2>
          <div style="font-style: italic; color: var(--text-secondary); margin-bottom: 16px; font-weight: 500;">
            Analogia: ${data.analogy}
          </div>
          <h4 style="margin-bottom: 8px; font-family: var(--font-headings); font-weight: 600;">Definição Técnica</h4>
          <p style="color: var(--text-main); font-size: 0.95rem; line-height: 1.6;">${data.definition}</p>
        `;
        modalOverlay.classList.add('active');
      }
    });
  });

  // 7. SLIDE 8 — Modelos de Fronteira (Tabs)
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      const provider = btn.getAttribute('data-provider');
      const targetContent = document.getElementById(`tab-${provider}`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // 8. SLIDE 12 — Comparativo: Accordion e Button "Destacar Melhor"
  const compRows = document.querySelectorAll('.table-responsive tbody tr');
  compRows.forEach(row => {
    row.addEventListener('click', () => {
      // Toggle highlighting click
      row.classList.toggle('highlight-row');
    });
  });

  const highlightBtn = document.getElementById('highlight-best-btn');
  if (highlightBtn) {
    highlightBtn.addEventListener('click', () => {
      const isHighlighted = highlightBtn.classList.contains('active');
      highlightBtn.classList.toggle('active', !isHighlighted);
      
      // Let's toggle classes on cells that have best performance
      const bestCells = document.querySelectorAll('[data-best]');
      bestCells.forEach(cell => {
        if (!isHighlighted) {
          cell.style.backgroundColor = 'rgba(74, 124, 89, 0.2)';
          cell.style.fontWeight = '700';
          cell.style.border = '2px solid var(--color-primary)';
        } else {
          cell.style.backgroundColor = '';
          cell.style.fontWeight = '';
          cell.style.border = '';
        }
      });
      
      highlightBtn.textContent = !isHighlighted ? "Limpar Destaques" : "Destacar Melhor";
    });
  }

  // 9. SLIDE 13 — Pricing Toggle
  const billingToggle = document.getElementById('billing-toggle');
  const priceValues = {
    codex: { monthly: ["$20", "$100", "$200"], annual: ["$17", "$85", "$170"] },
    claude: { monthly: ["$20", "$100", "$200"], annual: ["$17", "$80", "$160"] },
    antigravity: { monthly: ["$19", "$99", "$199"], annual: ["$15", "$80", "$160"] }
  };

  if (billingToggle) {
    billingToggle.addEventListener('change', () => {
      const isAnnual = billingToggle.checked;
      
      // Update values
      const type = isAnnual ? 'annual' : 'monthly';
      const suffix = isAnnual ? ' / ano (mês)' : ' / mês';
      
      // Update Codex prices
      const codexPriceEls = document.querySelectorAll('.pricing-card[data-provider="codex"] .pricing-card-price');
      codexPriceEls.forEach((el, idx) => {
        el.innerHTML = `${priceValues.codex[type][idx]}<span>${suffix}</span>`;
      });
      
      // Update Claude prices
      const claudePriceEls = document.querySelectorAll('.pricing-card[data-provider="claude"] .pricing-card-price');
      claudePriceEls.forEach((el, idx) => {
        el.innerHTML = `${priceValues.claude[type][idx]}<span>${suffix}</span>`;
      });
      
      // Update Antigravity prices
      const antigravityPriceEls = document.querySelectorAll('.pricing-card[data-provider="antigravity"] .pricing-card-price');
      antigravityPriceEls.forEach((el, idx) => {
        el.innerHTML = `${priceValues.antigravity[type][idx]}<span>${suffix}</span>`;
      });
    });
  }

  // 10. SLIDE 14 — Organograma Clicks
  const orgCards = document.querySelectorAll('.org-card');
  orgCards.forEach(card => {
    card.addEventListener('click', () => {
      const devId = card.getAttribute('data-dev-id');
      if (window.slideshow) {
        // Go to Slide 15 (Index 14)
        window.slideshow.goToSlide(14);
        
        // Wait shortly for slide transition to finish, then activate dev tab
        setTimeout(() => {
          const sidebarItem = document.querySelector(`.dev-rec-sidebar-item[data-dev-id="${devId}"]`);
          if (sidebarItem) sidebarItem.click();
        }, 100);
      }
    });
  });

  // 11. SLIDE 15 — Dev Recommendations Sidebar
  const devSidebarItems = document.querySelectorAll('.dev-rec-sidebar-item');
  const devPanes = document.querySelectorAll('.dev-rec-pane');

  devSidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      devSidebarItems.forEach(i => i.classList.remove('active'));
      devPanes.forEach(p => p.classList.remove('active'));

      item.classList.add('active');
      const devId = item.getAttribute('data-dev-id');
      const targetPane = document.getElementById(`dev-pane-${devId}`);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // 12. SLIDE 16 — Cost Chart Animations (Listens to slide changes)
  document.addEventListener('slideChanged', (e) => {
    const slideIndex = e.detail.index;
    
    // Slide 16 is index 15 (0-indexed)
    if (slideIndex === 15) {
      const chartBars = document.querySelectorAll('.chart-bar');
      chartBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-percentage');
        // Small delay to let slide become visible before animating
        setTimeout(() => {
          bar.style.width = targetWidth;
        }, 200);
      });
    } else {
      // Reset widths when exiting slide to allow re-animation on return
      const chartBars = document.querySelectorAll('.chart-bar');
      chartBars.forEach(bar => {
        bar.style.width = '0%';
      });
    }

    // Auto-close any sidebar/drawer panels when moving away
  });

  // 13. SLIDE 17 — Checklist Persistent
  const checklistItems = document.querySelectorAll('.checklist-item');
  
  // Load saved checklist states
  checklistItems.forEach((item, index) => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    const savedState = localStorage.getItem(`checklist-item-${index}`);
    
    if (savedState === 'checked' && checkbox) {
      checkbox.checked = true;
      item.classList.add('checked');
    }
    
    // Support clicking anywhere on card
    item.addEventListener('click', (e) => {
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
      }
      
      const isChecked = checkbox.checked;
      item.classList.toggle('checked', isChecked);
      localStorage.setItem(`checklist-item-${index}`, isChecked ? 'checked' : 'unchecked');
    });
  });
});
