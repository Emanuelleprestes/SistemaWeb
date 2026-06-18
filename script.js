let produtos = [];

const campoId = document.getElementById("produtoId");
const campoNome = document.getElementById("nome");
const campoCategoria = document.getElementById("categoria");
const campoQuantidade = document.getElementById("quantidade");
const campoPreco = document.getElementById("preco");
const campoStatus = document.getElementById("status");
const campoBusca = document.getElementById("busca");
const tabelaProdutos = document.getElementById("tabelaProdutos");
const mensagemVazia = document.getElementById("mensagemVazia");
const botaoSalvar = document.getElementById("btnSalvar");
const botaoLimpar = document.getElementById("btnLimpar");
const botaoLimparTudo = document.getElementById("btnLimparTudo");
const totalProdutos = document.getElementById("totalProdutos");
const valorTotal = document.getElementById("valorTotal");
const baixoEstoque = document.getElementById("baixoEstoque");

botaoSalvar.addEventListener("click", salvarProduto);
botaoLimpar.addEventListener("click", limparFormulario);
botaoLimparTudo.addEventListener("click", limparTudo);
campoBusca.addEventListener("input", filtrarProdutos);

function apiFakeListarProdutos() {
  const dados = localStorage.getItem("produtos_senac");
  return dados ? JSON.parse(dados) : [];
}

function apiFakeSalvarProdutos() {
  localStorage.setItem("produtos_senac", JSON.stringify(produtos));
}

function validarFormulario() {
  const nome = campoNome.value.trim();
  const categoria = campoCategoria.value;
  const quantidade = Number(campoQuantidade.value);
  const preco = Number(campoPreco.value);

  if (nome === "") {
    alert("Informe o nome do produto.");
    campoNome.focus();
    return false;
  }

  if (categoria === "") {
    alert("Selecione uma categoria.");
    campoCategoria.focus();
    return false;
  }

  if (campoQuantidade.value === "" || quantidade < 0) {
    alert("Informe uma quantidade válida.");
    campoQuantidade.focus();
    return false;
  }

  if (campoPreco.value === "" || preco < 0) {
    alert("Informe um preço válido.");
    campoPreco.focus();
    return false;
  }

  return true;
}

function montarProdutoDoFormulario() {
  return {
    id: campoId.value ? Number(campoId.value) : Date.now(),
    nome: campoNome.value.trim(),
    categoria: campoCategoria.value,
    quantidade: Number(campoQuantidade.value),
    preco: Number(campoPreco.value),
    status: campoStatus.value
  };
}

function salvarProduto() {
  if (!validarFormulario()) {
    return;
  }

  const produto = montarProdutoDoFormulario();
  const estaEditando = campoId.value !== "";

  if (estaEditando) {
    produtos = produtos.map(item => (item.id === produto.id ? produto : item));
  } else {
    produtos.push(produto);
  }

  apiFakeSalvarProdutos();
  renderizarProdutos(produtos);
  atualizarResumo();
  limparFormulario();
}

function renderizarProdutos(lista) {
  tabelaProdutos.innerHTML = "";

  if (lista.length === 0) {
    mensagemVazia.style.display = "block";
    return;
  }

  mensagemVazia.style.display = "none";

  lista.forEach(produto => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${produto.nome}</td>
      <td>${produto.categoria}</td>
      <td>${produto.quantidade}</td>
      <td>${formatarMoeda(produto.preco)}</td>
      <td><span class="status">${produto.status}</span></td>
      <td>
        <div class="acoes">
          <button class="botao-editar" type="button" onclick="editarProduto(${produto.id})">Editar</button>
          <button class="botao-excluir" type="button" onclick="excluirProduto(${produto.id})">Excluir</button>
        </div>
      </td>
    `;
    tabelaProdutos.appendChild(linha);
  });
}

function editarProduto(id) {
  const produto = produtos.find(item => item.id === id);

  if (!produto) {
    alert("Produto não encontrado.");
    return;
  }

  campoId.value = produto.id;
  campoNome.value = produto.nome;
  campoCategoria.value = produto.categoria;
  campoQuantidade.value = produto.quantidade;
  campoPreco.value = produto.preco;
  campoStatus.value = produto.status;
  botaoSalvar.textContent = "Atualizar";
  campoNome.focus();
}

function excluirProduto(id) {
  const confirmar = confirm("Deseja realmente excluir este produto?");

  if (!confirmar) {
    return;
  }

  produtos = produtos.filter(item => item.id !== id);
  apiFakeSalvarProdutos();
  renderizarProdutos(produtos);
  atualizarResumo();
  limparFormulario();
}

function filtrarProdutos() {
  const termo = campoBusca.value.toLowerCase();
  const produtosFiltrados = produtos.filter(produto => {
    return (
      produto.nome.toLowerCase().includes(termo) ||
      produto.categoria.toLowerCase().includes(termo) ||
      produto.status.toLowerCase().includes(termo)
    );
  });

  renderizarProdutos(produtosFiltrados);
}

function atualizarResumo() {
  totalProdutos.textContent = produtos.length;

  const soma = produtos.reduce((total, produto) => {
    return total + produto.preco * produto.quantidade;
  }, 0);

  valorTotal.textContent = formatarMoeda(soma);

  const itensBaixos = produtos.filter(produto => {
    return produto.status === "Baixo estoque" || produto.quantidade <= 3;
  });

  baixoEstoque.textContent = itensBaixos.length;
}

function limparFormulario() {
  campoId.value = "";
  campoNome.value = "";
  campoCategoria.value = "";
  campoQuantidade.value = "";
  campoPreco.value = "";
  campoStatus.value = "Disponível";
  botaoSalvar.textContent = "Cadastrar";
}

function limparTudo() {
  const confirmar = confirm("Deseja apagar todos os produtos cadastrados?");

  if (!confirmar) {
    return;
  }

  produtos = [];
  apiFakeSalvarProdutos();
  renderizarProdutos(produtos);
  atualizarResumo();
  limparFormulario();
  campoBusca.value = "";
}

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function iniciarSistema() {
  produtos = apiFakeListarProdutos();
  renderizarProdutos(produtos);
  atualizarResumo();
}

iniciarSistema();