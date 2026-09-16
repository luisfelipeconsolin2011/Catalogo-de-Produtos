const listaProdutos = document.getElementById("listaProdutos");

document.getElementById("quantidadeProdutos").innerText = produtos.length + " Produtos Cadastrados";

for(let i = 0; i < produtos.length; i ++){

    listaProdutos.innerHTML += `
    <article class="card">

    <div class="icone">

    ${produtos[i].icone}
    </div>

    <div class = "card-conteudo">

        <span class = "categoria">
            ${produtos[i].cetegoria}
        </span>

        <h2>
            ${produtos[i].nome}        
        </h2>

        <p class = "preco">
            R$ ${produtos[i].preco.toLocaleString("pt-BR",{
                minimumFractionDigits:2,
                maximumFractionDigits:2
            })}
        </p>

        <button>
            Comprar
        </button>
    </div>






    </article>
    `;
}