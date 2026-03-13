function alterarStatus(identidadeJogo) {
    let jogo = document.getElementById(`game-${identidadeJogo}`);
    let botao = jogo.querySelector("a");
    let opacidade = jogo.querySelector("div");
    if(botao.classList.contains("dashboard__item__button--return")){
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
        opacidade.classList.remove("dashboard__item__img--rented");
    }else{
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        opacidade.classList.add("dashboard__item__img--rented");
    }    
}
