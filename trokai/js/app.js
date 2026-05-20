
const CATEGORIAS = [
  { id: 'roupas',       icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/></svg>`, nome: 'Roupas e Calçados' },
  { id: 'livros',       icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`, nome: 'Livros e Revistas' },
  { id: 'eletronicos',  icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`, nome: 'Eletrônicos' },
  { id: 'moveis',       icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="12" rx="1"/><path d="M3 15h18"/><path d="M8 21V15"/><path d="M16 21V15"/></svg>`, nome: 'Móveis e Decoração' },
  { id: 'brinquedos',   icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14.5v5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><rect x="9" y="10" width="6" height="5" rx="1"/></svg>`, nome: 'Brinquedos' },
  { id: 'esportes',     icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`, nome: 'Esportes' },
  { id: 'jogos',        icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="2"/></svg>`, nome: 'Jogos e HQs' },
  { id: 'outros',       icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`, nome: 'Outros' },
];

const CONDICOES = ['Novo', 'Seminovo', 'Bom estado', 'Com defeito'];
const INTENCOES = ['Trocar', 'Doar', 'Trocar ou Doar'];

const PRODUTOS = [
  { id: 1,  titulo: 'Camiseta Nike Dri-Fit',     categoria: 'roupas',      condicao: 'Seminovo',  intencao: 'Trocar',         bairro: 'Plano Diretor Sul', cidade: 'Palmas', imagem: null, usuario: { nome: 'Ana S.',    nota: 4.8, avatar: 'A' }, descricao: 'Camiseta dry-fit tamanho M, usada poucas vezes. Em ótimo estado.' },
  { id: 2,  titulo: 'Livro: O Alquimista',       categoria: 'livros',      condicao: 'Bom estado', intencao: 'Trocar',        bairro: 'Aureny III',        cidade: 'Palmas', imagem: null, usuario: { nome: 'Pedro M.',  nota: 4.5, avatar: 'P' }, descricao: 'Paulo Coelho. Boa edição, sem rasuras ou rasgos.' },
  { id: 3,  titulo: 'Fone Bluetooth JBL',        categoria: 'eletronicos', condicao: 'Bom estado', intencao: 'Trocar',        bairro: 'Plano Diretor Norte', cidade: 'Palmas', imagem: null, usuario: { nome: 'Lucas R.', nota: 4.9, avatar: 'L' }, descricao: 'JBL T510BT, funciona perfeitamente. Estou trocando por livros ou jogos.' },
  { id: 4,  titulo: 'Conjunto de Lego City',     categoria: 'brinquedos',  condicao: 'Bom estado', intencao: 'Trocar ou Doar', bairro: 'Jardim Aureny',   cidade: 'Palmas', imagem: null, usuario: { nome: 'Marina L.', nota: 5.0, avatar: 'M' }, descricao: 'Conjunto completo com caixa. Filho cresceu e não usa mais.' },
  { id: 5,  titulo: 'Tênis Adidas 42',           categoria: 'roupas',      condicao: 'Bom estado', intencao: 'Trocar',        bairro: 'Taquaralto',        cidade: 'Palmas', imagem: null, usuario: { nome: 'Bruno K.',  nota: 4.2, avatar: 'B' }, descricao: 'Adidas Run Falcon tamanho 42. Pouco uso.' },
  { id: 6,  titulo: 'Violão Giannini',           categoria: 'esportes',    condicao: 'Bom estado', intencao: 'Trocar',        bairro: 'Plano Diretor Sul', cidade: 'Palmas', imagem: null, usuario: { nome: 'Carol A.',  nota: 4.7, avatar: 'C' }, descricao: 'Violão de estudo em bom estado. Troco por notebook ou eletrônico.' },
  { id: 7,  titulo: 'PS4 Slim + 3 Jogos',        categoria: 'eletronicos', condicao: 'Bom estado', intencao: 'Trocar',        bairro: 'Aureny II',         cidade: 'Palmas', imagem: null, usuario: { nome: 'Daniel P.', nota: 4.6, avatar: 'D' }, descricao: 'PS4 Slim 1TB + FIFA 23, GTA V e Uncharted 4.' },
  { id: 8,  titulo: 'Kit de Colorir Infantil',   categoria: 'brinquedos',  condicao: 'Novo',       intencao: 'Doar',          bairro: 'Palmas Norte',      cidade: 'Palmas', imagem: null, usuario: { nome: 'Fernanda B.', nota: 5.0, avatar: 'F' }, descricao: 'Nunca aberto. Ganhei de presente mas tenho em duplicata.' },
  { id: 9,  titulo: 'Mesa de Escritório',        categoria: 'moveis',      condicao: 'Bom estado', intencao: 'Trocar ou Doar', bairro: 'Plano Diretor Norte', cidade: 'Palmas', imagem: null, usuario: { nome: 'Rafael T.', nota: 4.4, avatar: 'R' }, descricao: 'Mesa de madeira 1,2m x 0,6m. Preciso de espaço.' },
  { id: 10, titulo: 'Bicicleta Aro 26',          categoria: 'esportes',    condicao: 'Bom estado', intencao: 'Trocar',        bairro: 'Taquaralto',        cidade: 'Palmas', imagem: null, usuario: { nome: 'Gustavo M.', nota: 4.3, avatar: 'G' }, descricao: 'Bicicleta mtb aro 26, revisada. Troco por eletrônico ou moto.' },
  { id: 11, titulo: 'Livros de Direito – 5 vols', categoria: 'livros',     condicao: 'Bom estado', intencao: 'Trocar ou Doar', bairro: 'Plano Diretor Sul', cidade: 'Palmas', imagem: null, usuario: { nome: 'Juliana C.', nota: 4.8, avatar: 'J' }, descricao: 'Coleção direito constitucional, penal e civil. Edições 2022-2023.' },
  { id: 12, titulo: 'Air Fryer Philco 4L',       categoria: 'eletronicos', condicao: 'Seminovo',   intencao: 'Trocar',        bairro: 'Aureny III',        cidade: 'Palmas', imagem: null, usuario: { nome: 'Tiago F.',   nota: 4.9, avatar: 'T' }, descricao: 'Air Fryer em perfeito estado, uso há 6 meses. Troco por notebook ou tablet.' },
];

const Auth = {
  user: JSON.parse(sessionStorage.getItem('trokai_user') || 'null'),

  login(email, senha) {
    if (!email || !senha) return { ok: false, msg: 'Preencha todos os campos.' };
  
    if (!email.includes('@')) return { ok: false, msg: 'Email inválido.' };
    if (senha.length < 6) return { ok: false, msg: 'Senha deve ter ao menos 6 caracteres.' };
    const user = { nome: email.split('@')[0], email, avatar: email[0].toUpperCase() };
    sessionStorage.setItem('trokai_user', JSON.stringify(user));
    this.user = user;
    return { ok: true };
  },

  cadastrar(dados) {
    const { nome, email, senha, confirmar } = dados;
    if (!nome || !email || !senha || !confirmar) return { ok: false, msg: 'Preencha todos os campos obrigatórios.' };
    if (!email.includes('@')) return { ok: false, msg: 'Email inválido.' };
    if (senha.length < 6) return { ok: false, msg: 'Senha deve ter ao menos 6 caracteres.' };
    if (senha !== confirmar) return { ok: false, msg: 'As senhas não coincidem.' };
    const user = { nome, email, avatar: nome[0].toUpperCase() };
    sessionStorage.setItem('trokai_user', JSON.stringify(user));
    this.user = user;
    return { ok: true };
  },

  logout() {
    sessionStorage.removeItem('trokai_user');
    this.user = null;
    window.location.href = 'index.html';
  },

  requerAuth() {
    if (!this.user) { window.location.href = 'index.html'; return false; }
    return true;
  }
};


const ProdutosDB = {
  _lista: [...PRODUTOS],

  listar(filtros = {}) {
    let lista = [...this._lista];
    if (filtros.categoria) lista = lista.filter(p => p.categoria === filtros.categoria);
    if (filtros.intencao)  lista = lista.filter(p => p.intencao === filtros.intencao);
    if (filtros.q) {
      const q = filtros.q.toLowerCase();
      lista = lista.filter(p =>
        p.titulo.toLowerCase().includes(q) ||
        p.descricao?.toLowerCase().includes(q) ||
        p.categoria.toLowerCase().includes(q)
      );
    }
    return lista;
  },

  buscarPorId(id) {
    return this._lista.find(p => p.id === Number(id)) || null;
  },

  adicionar(dados) {
    const id = Math.max(...this._lista.map(p => p.id)) + 1;
    const produto = {
      id,
      ...dados,
      usuario: Auth.user ? {
        nome: Auth.user.nome,
        nota: 5.0,
        avatar: Auth.user.avatar
      } : { nome: 'Usuário', nota: 5.0, avatar: 'U' }
    };
    this._lista.unshift(produto);
    return produto;
  },

  editar(id, dados) {
    const idx = this._lista.findIndex(p => p.id === Number(id));
    if (idx === -1) return null;
    this._lista[idx] = { ...this._lista[idx], ...dados };
    return this._lista[idx];
  },

  remover(id) {
    const idx = this._lista.findIndex(p => p.id === Number(id));
    if (idx === -1) return false;
    this._lista.splice(idx, 1);
    return true;
  }
};


function showToast(msg, tipo = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const icons = { success: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`, error: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`, info: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>` };
  const toast = document.createElement('div');
  toast.className = `toast toast-${tipo}`;
  toast.innerHTML = `<span>${icons[tipo]}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}


function renderNavbar(opts = {}) {
  const user = Auth.user;
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.innerHTML = `
    <div class="navbar-logo" onclick="window.location.href='home.html'" style="cursor:pointer">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#00C853"/>
        <path d="M20 8L28 14V22L20 28L12 22V14L20 8Z" fill="white" opacity="0.3"/>
        <rect x="15" y="17" width="10" height="8" rx="2" fill="white"/>
        <path d="M17 17V14C17 12.3 18.3 11 20 11C21.7 11 23 12.3 23 14V17" stroke="white" stroke-width="2"/>
        <path d="M10 30C10 30 15 26 20 26C25 26 30 30 30 30" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <span>Trokaí</span>
    </div>

    <form class="navbar-search" id="searchForm" onsubmit="return handleSearch(event)">
      <button type="button" style="background:none;border:none;color:#9E9CB8;padding:0">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>
      </button>
      <input type="text" id="searchInput" placeholder="Pesquisar itens para trocar ou receber..." value="${opts.q || ''}">
      <button type="submit" class="navbar-search-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </button>
    </form>

    <div class="navbar-actions">
      ${user ? `
        <button class="nav-icon-btn" title="Notificações" onclick="showToast('Nenhuma notificação no momento','info')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span class="nav-badge">2</span>
        </button>
        <button class="btn-novo" onclick="window.location.href='novo-produto.html'">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span>Publicar item</span>
        </button>
        <div class="nav-avatar" onclick="window.location.href='perfil.html'" title="${user.nome}">${user.avatar}</div>
      ` : `
        <a href="index.html" class="btn btn-ghost btn-sm">Entrar</a>
        <a href="cadastro.html" class="btn btn-green btn-sm">Cadastrar</a>
      `}
    </div>
  `;
}

function handleSearch(e) {
  e.preventDefault();
  const q = document.getElementById('searchInput').value.trim();
  window.location.href = `home.html?q=${encodeURIComponent(q)}`;
  return false;
}


const Icons = {
  location: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  star: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
};
