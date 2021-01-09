let order = [];
let clickedOrder = [];
let score = 0;

let perdeuJogo = false;

//0 - verde, 1 - vermelho, 2 - amarelo, 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//Cria ordem aleatória de cores 
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acente a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number - 150);
}

//Checa se os botões clicados são os mesmo gerados no jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length){
        if(perdeuJogo == false){
            alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
            nextLevel();
        }
    }
}

//Função para o clique do usuario
let click = (color) => {
    if(perdeuJogo == false){
        clickedOrder[clickedOrder.length] = color;
        createColorElement(color).classList.add('selected');

        setTimeout(() => {
            createColorElement(color).classList.remove('selected');
            checkOrder();
        }, 150);
    }

}

//Cria função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;
    }
}

//função para proximo level
let nextLevel = () => {
    if(perdeuJogo == false){
        score++;
        shuffleOrder();
    }
}

//função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê Perdeu o jogo\nClique em PLAY! para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    perdeuJogo = true;

}

//Função de inicio do jogo
let playGame = () => {
    perdeuJogo = false;

    alert('Bem vindo ao Genesis! Iniciando novo jogo!');
    score = 0;

    if(perdeuJogo == false){
        nextLevel();
    }
}

//Evento de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);