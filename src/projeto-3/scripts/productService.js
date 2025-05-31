export async function carregarProdutos() {
    // buscar os produtos
    let response = await fetch('data/data.json')
    let produtos = await response.json();
    return produtos;
}