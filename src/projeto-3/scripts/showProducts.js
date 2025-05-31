export async function exibirProdutos(listaProdutos) {
    let container = document.querySelector(".produtos");
    let containerCountCards = document.querySelector(".card-count");
    
    // se não tiver produtos na lista, exibe uma mensagem
    if (!listaProdutos) {
        console.log("Objeto null ou indefinido.");
        container.innerHTML = "<p>Nenhum produto encontrado.</p>";
        containerCountCards.innerHTML = ""; // Limpa o conteúdo anterior
        return;
    }
    else if (listaProdutos.length == 0) {
        console.log(listaProdutos.length + " produtos encontrados.");
        container.innerHTML = "<p>Nenhum produto encontrado.</p>";
        containerCountCards.innerHTML = ""; // Limpa o conteúdo anterior
        return;
    }
    else {
        container.innerHTML = "";
        // se tiver produtos, exibe os produtos na tela
        for (let produto of listaProdutos) {
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button>Comprar</button>
            `;
            container.appendChild(card);
        }
        let cardCount = document.createElement("div");
        cardCount.innerHTML = `<p>Total de Produtos: ${listaProdutos.length} </p>`;
        containerCountCards.innerHTML = ""; // Limpa o conteúdo anterior
        containerCountCards.append(cardCount);
    }

    console.log("Exibindo produtos...");
    console.log(listaProdutos.length + " produtos encontrados.");
}