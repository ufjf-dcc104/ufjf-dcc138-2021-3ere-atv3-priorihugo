const canvas = document.getElementById('gameScreen');
const ctx = canvas.getContext("2d");
vw = (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) * 0.9) 
vh = (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) ) 
canvas.width = vw;
canvas.height = vh; 

const ken = new Image();
ken.src = "assets\\ken.png";

const larguraImagem = 70;
const alturaImagem = 80;

let acao , quadro;

let personagem = {
    x: 80,
    y: 80,
    POSES: [
        { posicao: 0, nFrames: 4, vFrame:2 },
        { posicao: 1, nFrames: 4, vFrame:2 },
        { posicao: 2, nFrames: 3, vFrame:2 },
        { posicao: 3, nFrames: 4, vFrame:2 },
        { posicao: 6, nFrames: 5, vFrame:2 },
        { posicao: 7, nFrames: 5, vFrame:2 },
        { posicao: 8, nFrames: 7, vFrame:2 },  
    ],
    desenha(){

        ctx.clearRect(0 , 0 , canvas.width , canvas.height);
        ctx.drawImage(
            ken,///source
            ///posicao na sprite sheet
            larguraImagem*Math.floor(quadro), //sx
            alturaImagem*personagem.POSES[acao].posicao,
            larguraImagem,
            alturaImagem,
            ///posicao na tela;
            personagem.x,
            personagem.y,
            larguraImagem,
            alturaImagem   
        );

    }
}

