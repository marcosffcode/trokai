#  Trokaí — Plataforma de Trocas e Doações

> Plataforma web voltada para a **economia circular**, conectando vizinhos e pessoas da mesma região para trocar ou doar itens (roupas, livros, eletrônicos) **sem transações financeiras**.

---

##  Descrição do Projeto

O **Trokaí** preenche a lacuna deixada por grandes marketplaces (que focam em vendas) ao priorizar a **proximidade geográfica** e a **confiança entre usuários**. A plataforma evita o desperdício e o descarte incorreto de objetos em bom estado, promovendo a sustentabilidade.

**Projeto desenvolvido para a disciplina de Programação para Web I — TADS 3º Período — UFT Palmas**

---

##  Integrantes do Grupo

| Nome | Responsabilidade |
|------|-----------------|
| Elson Roberto Figueiredo Caldas | Desenvolvimento Frontend |
| Marcos Feitoza Alves | Engenharia de Requisitos |
| Janilson Andrade dos Santos | Banco de Dados |

---

##  Tecnologias Utilizadas

- **HTML5** — Estrutura semântica das páginas
- **CSS3** — Estilização com variáveis CSS, Flexbox e Grid Layout
- **JavaScript (ES6+)** — Lógica de negócio, manipulação de DOM e navegação
- **Google Fonts** — Fontes: Nunito e Outfit
- **SVG** — Ícones inline sem dependências externas

> **Stack:** 100% front-end puro, sem frameworks ou dependências npm — apenas abrir no navegador.

---

##  Como Executar o Projeto Localmente

### Pré-requisitos
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- **Opcional:** extensão Live Server no VS Code para auto-reload

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/marcosffcode/trokai.git

# Entre na pasta do projeto
cd trokai

# Abra a página inicial no navegador
# Opção 1: clique duplo em index.html
# Opção 2: via VS Code com Live Server
code .
# → botão "Go Live" no rodapé do VS Code
```

### Fluxo de navegação
```
index.html       → Tela de Login
cadastro.html    → Criar conta
home.html        → Listagem de itens com filtros
produto.html?id=N → Detalhe de um item
novo-produto.html → Publicar / editar item
perfil.html      → Perfil do usuário
```

>  O projeto usa `sessionStorage` para simular autenticação. Os dados são reiniciados ao fechar o navegador (comportamento intencional para demonstração).

---

##  Funcionalidades Implementadas

### Autenticação
- [x] Tela de Login com validação de email e senha
- [x] Tela de Cadastro com validação completa (nome, email, senha, confirmação, aceite de termos)
- [x] Logout
- [x] Redirecionamento automático se já autenticado

### Listagem e Busca
- [x] Listagem de todos os itens em grid responsivo
- [x] Busca por texto (título, descrição, categoria)
- [x] Filtro por categoria (sidebar + chips rápidos)
- [x] Filtro por tipo (Trocar / Doar)
- [x] Estado vazio quando nenhum resultado

### Cadastro/Edição de Items
- [x] Formulário completo com título, categoria, descrição, condição, intenção e localização
- [x] Pré-visualização em tempo real do card
- [x] Modo de edição de item existente (`?edit=ID`)
- [x] Upload simulado de imagens (6 slots)
- [x] Validação de campos obrigatórios

### Detalhe do Item
- [x] Informações completas do produto
- [x] Informações do usuário anunciante com estrelas de avaliação
- [x] Localização por bairro (privacidade LGPD — sem endereço exato)
- [x] Modal para propor troca
- [x] Botão de mensagem (chat — em desenvolvimento)
- [x] Dicas de segurança

### Perfil do Usuário
- [x] Edição de dados do perfil
- [x] Listagem dos itens publicados pelo usuário
- [x] Opção de editar e remover itens
- [x] Histórico de trocas (mockado)
- [x] Avaliações recebidas
- [x] Seção de favoritos

---

##  Estrutura de Pastas

```
trokai/
├── index.html          # Tela de Login
├── cadastro.html       # Cadastro de usuário
├── home.html           # Página inicial com listagem e filtros
├── produto.html        # Detalhe de um item
├── novo-produto.html   # Publicar/editar item
├── perfil.html         # Perfil do usuário logado
│
├── css/
│   └── style.css       # Estilos globais (variáveis, componentes, layout)
│
├── js/
│   └── app.js          # Dados mock, autenticação, utilitários e navbar
│
└── README.md           # Este arquivo
```

---

##  Identidade Visual

| Elemento | Valor |
|---------|-------|
| Cor primária (azul) | `#1400E8` |
| Cor de destaque (verde) | `#00C853` |
| Tipografia principal | Nunito |
| Tipografia de títulos | Outfit |
| Border radius padrão | `14px` |

---

##  Responsividade

O projeto adota a abordagem **Mobile-First**:
- Em telas menores que 768px, a sidebar se oculta
- O grid de produtos se adapta para 2 colunas em mobile
- A navbar simplifica os elementos no mobile

---

##  Observações

- Os dados são **mockados em JavaScript** (`js/app.js`) para simular um banco de dados
- A autenticação usa `sessionStorage` (simulada, sem back-end real)
- A geolocalização exibe apenas o **bairro**, protegendo a privacidade dos usuários conforme a **LGPD**
- O projeto está preparado para integração futura com uma API REST (Node.js + MySQL)
