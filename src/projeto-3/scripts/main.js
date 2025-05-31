import { carregarProdutos } from "./productService.js";
import { exibirProdutos } from "./showProducts.js";
import { ativarBusca } from "./searchProducts.js";

async function main() {
    console.log("Iniciando o projeto 3...");

    // função para carregar os produtos
    let produtos = await carregarProdutos();
    
    // função para exibir os produtos na tela
    exibirProdutos(produtos);

    // função para ativar a busca de produtos
    ativarBusca(produtos);
}

main();