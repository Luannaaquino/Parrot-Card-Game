var numeroDeCartas;
var papagaios;
var todosOsPapagaios = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];
var papagaiosUsadosNoJogo = [];
var cartasAleatorias;
var cartaUm = 0;
var cartaDois = 0;


while(numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas % 2 !== 0 ){
    numeroDeCartas = parseInt(prompt("Com quantas cartas voce deseja jogar?"));
};

var n = 0;
while( n < numeroDeCartas/2){
    papagaios = todosOsPapagaios[n];
    papagaiosUsadosNoJogo.push(papagaios);
    papagaiosUsadosNoJogo.push(papagaios);
    n++;
};

function comparador(){
    return Math.random() - 0.5;
}
cartasAleatorias = papagaiosUsadosNoJogo.sort(comparador);

var n = 0;
while( n < cartasAleatorias.length){
    var papagaio = cartasAleatorias[n]
    cartasNoTabluleiro(papagaio),
    n++;
};

function cartasNoTabluleiro (papagaio){
    var carta = document.createElement("div");
    carta.classList.add("carta");
    carta.innerHTML = "<div class = 'frente'><img src='imagens/front.png'></div><div class = 'verso'><img src='imagens/" + papagaio + "parrot.gif'></div>";

    carta.setAttribute("onclick", "selecionarCarta(this)")

    var tabuleiro = document.querySelector(".jogo")
    tabuleiro.appendChild(carta);
}


function selecionarCarta(carta){
    if(cartaUm === 0 || cartaDois === 0){
    carta.classList.add("virarCarta")
    }

    if(cartaUm === 0){
        cartaUm = carta;
        console.log("Carta um", cartaUm)
    }else if (cartaDois === 0) {
        cartaDois = carta;
        if(cartaUm.innerHTML === cartaDois.innerHTML){
            cartaUm = 0;
            cartaDois = 0;

        }else{
            setTimeout(desselecionarCarta, 1000)

        }
    }
}

function desselecionarCarta(){
    cartaUm.classList.remove("virarCarta");
    cartaDois.classList.remove("virarCarta");
    cartaUm = 0;
    cartaDois = 0;
}