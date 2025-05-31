import { exibirProdutos } from "./showProducts.js";

export function ativarBusca(listaProdutos) {
    let input = document.getElementById("searchInput");

    input.addEventListener("input", (event) => {
        let busca = event.target.value.toLowerCase();
        let produtosFiltrados = listaProdutos.filter((produto) =>
            produto.nome.toLowerCase().includes(busca)
        );
        exibirProdutos(produtosFiltrados);
    })
}