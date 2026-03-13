let listaNumerosSorteados = [];

function sortear(){
    let quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
    let numeroInicial = parseInt(document.getElementById("de").value);
    let numeroFinal = parseInt(document.getElementById("ate").value);

    let numeroEscolhido;

    for (let i = 0; i < quantidadeDeNumeros; i++) {
        numeroEscolhido = obterNumeroAleatorio(numeroInicial,numeroFinal);
        if(!listaNumerosSorteados.includes(numeroEscolhido)){
            listaNumerosSorteados.push(numeroEscolhido);
        }else{
            i--;
        }
    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaNumerosSorteados} </label>`
    alterarStatusBotao();
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if(botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    }else{
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo"> Aguardando sorteio </label>`
    listaNumerosSorteados = [];
    alterarStatusBotao();    
}

function obterNumeroAleatorio(max,min) {
    return Math.floor(Math.random() * ( max - min + 1)) + min;
}