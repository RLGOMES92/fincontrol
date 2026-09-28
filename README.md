# 💰 FinControl — Gestão Financeira PWA

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PWA](https://img.shields.io/badge/PWA-Progressive_Web_App-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![Service Worker](https://img.shields.io/badge/Service_Worker-Offline--Ready-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

## 🎯 Visão geral

Aplicação web progressiva para organização financeira, reunindo receitas, despesas, dívidas, reservas, projeções e recursos de assistência em uma única experiência.

O projeto demonstra construção de uma **dashboard web rica em funcionalidades**, com arquitetura client-side e experiência semelhante a aplicativo.

## 💼 Problema de negócio

Informações financeiras normalmente ficam espalhadas entre planilhas, extratos e anotações, dificultando acompanhamento e tomada de decisão.

### Solução

Centralizar os dados financeiros em uma interface única com módulos de acompanhamento, importação de dados, projeções, backup e ferramentas de análise.

## ✨ Funcionalidades

- Dashboard financeira
- Receitas e despesas
- Importação OFX/CSV
- Controle de dívidas
- Parcelas
- Reservas e fundos
- Projeções
- Ferramentas de análise
- Backup e restauração
- Integração com Google Drive
- PWA
- Service Worker
- Assistente IA

## 🏗️ Arquitetura

```
Browser
│
├── index.html
│   ├── UI
│   ├── módulos financeiros
│   └── lógica client-side
│
├── manifest.json
│   └── configuração PWA
│
├── service-worker.js
│   └── cache / experiência offline
│
└── assets
    ├── ícones
    └── favicon
```

## 📁 Estrutura

```
fincontrol/
├── index.html
├── manifest.json
├── service-worker.js
├── apple-touch-icon.png
├── icon-192.png
├── icon-512.png
├── icon-maskable-512.png
├── .gitignore
└── README.md
```

## 🚀 Execução

Requer Python 3 ou outro servidor HTTP local.

```bash
git clone https://github.com/RLGOMES92/fincontrol.git
cd fincontrol
python -m http.server 8000
```

Acesse `http://localhost:8000`.

## 🔐 Privacidade

Dados financeiros devem ser tratados como informação sensível. Ao evoluir este projeto para produção, recomenda-se separar credenciais, aplicar armazenamento seguro e revisar integrações externas antes de disponibilizá-lo para usuários reais.

## 📌 Aplicação comercial

A arquitetura demonstra capacidade para construir **dashboards operacionais, sistemas internos e PWAs**, podendo ser adaptada para indicadores de vendas, estoque, atendimento, CRM e operações.

---

**Rodrigo Gomes — Desenvolvedor Full Stack & Especialista em Agentes de IA**