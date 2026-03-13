function comprar(){
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidadeIngressos = parseInt(document.getElementById("qtd").value);
    
    if(tipoIngresso == "inferior"){
        logica("inferior",quantidadeIngressos);
    }else if(tipoIngresso == "superior"){
        logica("superior",quantidadeIngressos);
    }else if(tipoIngresso == "pista"){
        logica("pista",quantidadeIngressos);
    }
}

function logica(local,quantidadeComprar) {
    let ingressos = document.getElementById(`qtd-${local}`);
    let quantidadeIngressos = parseInt(ingressos.textContent);
    if(quantidadeIngressos>=quantidadeComprar){
        ingressos.textContent = quantidadeIngressos-quantidadeComprar;
    }else{
        alert(`Quantidade indisponivel para cadeiras ${local == "pista" ? "na" : "no"} ${local}`);
    }
}