function adicionar() {
    let objeto = document.getElementById("produto").value;
    let valorDoProduto = objeto.split("R$")[1];
    let nomeDoProduto = objeto.split("-")[0];
    let quantidadeDoProduto = document.getElementById("quantidade").value;
    let valorTotal = valorDoProduto*quantidadeDoProduto;

    let carrinhoDeCompras = document.getElementById("lista-produtos");
    let mostrandoCarrinho = carrinhoDeCompras.querySelector("section");

    mostrandoCarrinho.innerHTML += `<br>
    <span class="texto-azul">${quantidadeDoProduto}x</span> ${nomeDoProduto} <span class="texto-azul">R$${valorTotal}</span>`;

    let valorNoTotal = document.getElementById("valor-total");
    valorNoTotal.innerHTML = `R$${parseInt(valorNoTotal.textContent.replace("R$",""))+valorTotal}`
    document.getElementById("quantidade").value = 0; 
}

function limpar(){

    let mostrandoCarrinho = document.getElementById("lista-produtos").querySelector("section");
    mostrandoCarrinho.innerHTML = "";
    let valorNoTotal = document.getElementById("valor-total");
    valorNoTotal.innerHTML = `R$0`
}