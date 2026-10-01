# 💰 FinControl — Gestão Financeira PWA

Aplicação web progressiva para **organização financeira, dashboards e automação de rotinas**, demonstrando capacidade de transformar processos complexos em uma experiência digital centralizada.

## 🎯 Problema de negócio

Dados financeiros podem ficar espalhados entre planilhas, extratos e anotações. Isso dificulta acompanhamento, análise e organização das informações.

## 💡 Solução desenvolvida

Uma PWA com dashboard e módulos financeiros para centralizar receitas, despesas, dívidas, reservas, projeções, importações e recursos de assistência.

## ✨ Funcionalidades

- Dashboard financeira
- Receitas e despesas
- Importação OFX/CSV
- Controle de dívidas e parcelas
- Reservas e fundos
- Projeções
- Ferramentas de análise
- Backup e restauração
- Integração com Google Drive
- PWA e Service Worker
- Assistente de IA

## 🧱 Arquitetura

```
Browser
├── index.html
│   ├── Interface
│   ├── módulos financeiros
│   └── lógica client-side
├── manifest.json
│   └── configuração PWA
├── service-worker.js
│   └── cache / experiência offline
└── assets/
```

## 🛠️ Tecnologias

- JavaScript
- HTML/CSS
- PWA
- Service Worker
- APIs de navegador
- Integrações externas

## 🚀 Execução local

```bash
git clone https://github.com/RLGOMES92/fincontrol.git
cd fincontrol
python -m http.server 8000
```

Acesse `http://localhost:8000`.

## 💼 Aplicação comercial

A arquitetura pode ser adaptada para **dashboards empresariais, sistemas internos, indicadores de vendas, estoque, atendimento, CRM e operações**.

> Este projeto é apresentado como demonstração técnica. Dados financeiros reais devem receber armazenamento, autenticação e controles de segurança adequados antes de uso em produção.

---

**Rodrigo Gomes — Desenvolvedor Full Stack & Especialista em Agentes de IA**
