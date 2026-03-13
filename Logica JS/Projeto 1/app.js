alert("Bem vindo ao jogo do numero secreto");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log("Numero secreto = " + numeroSecreto)
let numeroDigitado = -1;
let tentativas = 1;
let palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas"

while (numeroSecreto != numeroDigitado){
    numeroDigitado = prompt("Digite um numero entre 1 e " + numeroMaximo + ":");
    palavraTentativa = tentativas == 1 ? "tentativa" : "tentativas"
    if(numeroSecreto == numeroDigitado){
        alert("Deu certo, o numero secreto é: " + numeroSecreto + "\nNumero de "+ palavraTentativa +" até acertar foi: " + tentativas);
        console.log("Deu certo, o numero secreto é: " + numeroSecreto + " Numero de tentativas até acertar foi: " + tentativas);
    }else if(numeroSecreto > numeroDigitado){
        alert("Deu errado, o numero secreto é maior que: " + numeroDigitado + "\nVoce tentou " + tentativas + " vezes");
        console.log("Deu errado, o numero secreto é: " + numeroSecreto + " Voce tentou " + tentativas + " vezes");
        tentativas++;
    }else if(numeroSecreto < numeroDigitado){
        alert("Deu errado, o numero secreto é menor que: " + numeroDigitado + "\nVoce tentou " + tentativas + " vezes");
        console.log("Deu errado, o numero secreto é: " + numeroSecreto + " Voce tentou " + tentativas + " vezes");
        tentativas++;
    }
}