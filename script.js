const tabuleiro = document.querySelectorAll(".casa");
const casinha = document.querySelector(".casa");
const modal = document.querySelector(".modal");
const btnModal = document.querySelector(".btn-modal");

// for(casa in tabuleiro){
//     tabuleiro[casa].onclick = insertText;
// }

for(casa of tabuleiro){
    casa.addEventListener("click", insertText);
}

var cont = 0;
function insertText(){
    cont++;

    if(cont % 2){
        this.innerHTML = "X";
        this.style.color = "blue"
    }
    else {
        this.innerHTML = "O";
        this.style.color = "green";
    }
    this.removeEventListener("click", insertText);
    // this.onclick = null;

    if(cont >=5){
        verificar();
    }
}

function comparar(casa1,casa2,casa3){
    if((casa1.innerHTML === casa2.innerHTML) 
    && (casa2.innerHTML === casa3.innerHTML) &&
    (casa1.innerHTML !== "")
    ){
        return true;
    }
    return false;
}

function verificar(){
    if(comparar(tabuleiro[0], tabuleiro[1], tabuleiro[2]) ||
    comparar(tabuleiro[3], tabuleiro[4], tabuleiro[5]) ||
    comparar(tabuleiro[6], tabuleiro[7], tabuleiro[8]) ||
    comparar(tabuleiro[0], tabuleiro[3], tabuleiro[6]) ||
    comparar(tabuleiro[1], tabuleiro[4], tabuleiro[7]) ||   
    comparar(tabuleiro[2], tabuleiro[5], tabuleiro[8]) ||  
    comparar(tabuleiro[0], tabuleiro[4], tabuleiro[8]) ||  
    comparar(tabuleiro[2], tabuleiro[4], tabuleiro[6])
    ){
        modal.classList.add("active");
        btnModal.addEventListener("click", closeModal);
        for(casa of tabuleiro){
            casa.removeEventListener("click", insertText);
        }
    }
}

function closeModal(){
    modal.classList.remove("active");
}


// //PROXIMOS PASSOS
// -Perguntar o nome de cada jogador e qual simbolo ele quer jogar (ele deve jogar com apenas 1 caractere)
// -Colocar um botao para iniciar a partida
// -Exibir no modal o nome do jogador vencedor ou se empatou
// -Colocar um botao para reiniciar a partida
// -Implementar contador de vitorias