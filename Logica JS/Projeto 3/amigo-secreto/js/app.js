let listaAmigos = [];
let listaNumeros = [];

function adicionar(){

    let amigo = document.getElementById("nome-amigo").value;

    if(!listaAmigos.includes(amigo) && amigo != ""){
        listaAmigos.push(amigo);
    }else{
        alert("O nome não pode ser repetido, nem vazio");
        return;
    }

    let mostraListaAmigos = document.getElementById("lista-amigos");
    mostraListaAmigos.textContent = listaAmigos;

    document.getElementById("nome-amigo").value = "";

}

function sorteiaNumero() {

    if (listaNumeros.length === listaAmigos.length) {
        return null;
    }

    let numeroEscolhido = Math.floor(Math.random() * listaAmigos.length);

    if (!listaNumeros.includes(numeroEscolhido)) {
        listaNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    } else {
        return sorteiaNumero();
    }
}

function sortear() {

    if(listaAmigos.length<4){
        alert("Adicione mais pessoas");
        return;
    }

    let nomeSorteado = document.getElementById("lista-sorteio");
    let primeiroAmigo = listaAmigos[sorteiaNumero()];
    let segundoAmigo;

    for (let i = 0; i < listaAmigos.length; i++) {
        segundoAmigo = listaAmigos[sorteiaNumero()];
        nomeSorteado.innerHTML += `<p id="lista-sorteio">${primeiroAmigo} -> ${segundoAmigo != undefined ? segundoAmigo : listaAmigos[listaNumeros[0]]}</p><br>`;
        primeiroAmigo = segundoAmigo;
    }
}

function reiniciar(){
    document.getElementById("lista-sorteio").textContent = "";
    listaAmigos = [];
    document.getElementById("lista-amigos").textContent = listaAmigos;
    document.getElementById("nome-amigo").value = "";

}