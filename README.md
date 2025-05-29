# Projeto Opina+ (Frontend)

Este diretório contém o código-fonte inicial para o frontend da plataforma Opina+, desenvolvido com React (usando Vite) e Material UI (MUI).

## Estrutura de Pastas

```
opina-plus-frontend/
├── public/             # Arquivos estáticos (ex: logo_opina_plus.png)
├── src/
│   ├── assets/         # Imagens, fontes, etc. (ainda vazio)
│   ├── components/     # Componentes reutilizáveis
│   │   └── Header/       # Componente Header (Header.jsx)
│   ├── contexts/       # Contextos React (ex: AuthContext - ainda vazio)
│   ├── hooks/          # Hooks customizados (ainda vazio)
│   ├── pages/          # Componentes de página (HomePage, LoginPage, etc.)
│   ├── routes/         # Configuração das rotas (index.jsx)
│   ├── services/       # Funções para API (ainda vazio)
│   ├── styles/         # CSS global (global.css)
│   ├── App.jsx         # (Movido para routes/index.jsx como AppRoutes)
│   └── main.jsx        # Ponto de entrada, configura MUI Theme e Router
├── .gitignore          # Arquivos ignorados pelo Git
├── index.html          # HTML principal
├── package.json        # Dependências e scripts
├── todo.md             # Lista de tarefas (para referência)
└── vite.config.js      # Configuração do Vite
```

## Tecnologias Utilizadas

*   **React:** Biblioteca principal para construção da UI.
*   **Vite:** Ferramenta de build e servidor de desenvolvimento rápido.
*   **React Router DOM:** Para gerenciamento das rotas e navegação.
*   **Material UI (MUI):** Biblioteca de componentes UI para estilização e layout.
*   **React Icons:** Para ícones.

## Como Executar o Projeto

1.  **Pré-requisitos:** Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.
2.  **Navegue até o diretório:** Abra o terminal e vá para a pasta `opina-plus-frontend`.
3.  **Instale as dependências:** Execute o comando:
    ```bash
    npm install
    ```
    *Observação:* Se você encontrar problemas com tabelas ou gráficos nos painéis, pode ser necessário instalar pacotes adicionais do MUI:
    ```bash
    npm install @mui/x-data-grid @mui/x-charts
    ```
4.  **Inicie o servidor de desenvolvimento:** Execute o comando:
    ```bash
    npm run dev
    ```
5.  **Acesse a aplicação:** Abra seu navegador e acesse o endereço fornecido pelo Vite (geralmente `http://localhost:5173`).

## Próximos Passos Sugeridos

*   **Detalhar Componentes:** Refinar os componentes de página (gráficos, tabelas, formulários) com dados reais ou interações mais complexas.
*   **Estilização Fina:** Ajustar o tema do MUI e adicionar CSS customizado conforme necessário para alinhar perfeitamente com a identidade visual desejada.
*   **Integração com Backend:** Conectar os formulários (Login, Cadastro, Novo Feedback) e a exibição de dados (Feedbacks, Painéis) com as APIs do backend quando estiverem disponíveis.
*   **Gerenciamento de Estado:** Implementar um gerenciador de estado (como Context API ou Redux Toolkit) para gerenciar o estado de autenticação do usuário e outros dados globais.
*   **Testes:** Adicionar testes unitários e de integração.

Este é um ponto de partida. Sinta-se à vontade para modificar e expandir conforme as necessidades do projeto Opina+ evoluem!
