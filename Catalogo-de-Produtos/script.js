const listaProdutos = document.getElementById("listaProdutos");
const quantidadeProdutos = document.getElementById("quantidadeProdutos");
const campoPesquisa = document.querySelector(".pesquisa input");


// FUNÇÃO PARA EXIBIR OS PRODUTOS
function mostrarProdutos(lista) {

    // Apaga os produtos que estavam na tela
    listaProdutos.innerHTML = "";

    // Atualiza a quantidade
    quantidadeProdutos.innerText =
        lista.length + " Produtos Cadastrados";


    // Se não encontrar nenhum produto
    if (lista.length === 0) {

        listaProdutos.innerHTML =
            "<p>Nenhum produto encontrado.</p>";

        return;
    }


    // Mostra os produtos
    for (let i = 0; i < lista.length; i++) {

        listaProdutos.innerHTML += `
        
        <article class="card">

            <div class="icone">
                <img src="${lista[i].icone}" alt="${lista[i].nome}">
            </div>

            <div class="card-conteudo">

                <span class="categoria">
                    ${lista[i].cetegoria}
                </span>

                <h2>
                    ${lista[i].nome}
                </h2>

                <p class="preco">
                    R$ ${lista[i].preco.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    })}
                </p>

                <button onclick="alert('Parabéns Pela Compra!')">
                    Comprar
                </button>

            </div>

        </article>

        `;
    }
}


// PRIMEIRO MOSTRA TODOS OS PRODUTOS
mostrarProdutos(produtos);


// QUANDO O USUÁRIO DIGITAR NA PESQUISA
campoPesquisa.addEventListener("input", function () {

    const textoDigitado = campoPesquisa.value.toLowerCase();

    const produtosFiltrados = produtos.filter(function (produto) {

        const nomeProduto = produto.nome.toLowerCase();

        const categoriaProduto = produto.cetegoria.toLowerCase();

        return nomeProduto.includes(textoDigitado) ||
               categoriaProduto.includes(textoDigitado);

    });


    mostrarProdutos(produtosFiltrados);

});