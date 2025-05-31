
//console.log(produtos);

let container = document.querySelector('.produtos');
// loop para criar os cards de produtos
 produtos.forEach(function(produto) {
    let card = document.createElement('div');
    card.classList.add('card');

    let img = document.createElement('img');
    img.src = produto.imagem;
    img.alt = produto.nome;

    let nome = document.createElement('h2');
    nome.textContent = produto.nome;

    let preco = document.createElement('p');
    preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

    let comprar = document.createElement('button');
    comprar.textContent = 'Comprar';

    card.appendChild(img);
    card.appendChild(nome);
    card.appendChild(preco);
    card.appendChild(comprar);

    container.appendChild(card);
}); 

// loop para criar os cards de produtos
/* for (let produto of produtos) {
    let card = document.createElement('div');
    card.classList.add('card');

    let img = document.createElement('img');
    img.src = produto.imagem;
    img.alt = produto.nome;

    let nome = document.createElement('h2');
    nome.textContent = produto.nome;

    let preco = document.createElement('p');
    preco.textContent = `R$ ${produto.preco.toFixed(2)}`;

    let comprar = document.createElement('button');
    comprar.textContent = 'Comprar';

    card.appendChild(img);
    card.appendChild(nome);
    card.appendChild(preco);
    card.appendChild(comprar);

    container.appendChild(card);
} */

    // Outra forma de fazer o loop para criar os cards de produtos
/* for (let produto of produtos) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button>Comprar</button>
    `;

    container.appendChild(card);
} */
