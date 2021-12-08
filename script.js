const canvas = document.getElementById('gameScreen');
const ctx = canvas.getContext("2d");
//vw = (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) * 0.9) 
//vh = (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) ) 
//canvas.width = vw;
//canvas.height = vh; 
canvas.width = 400;
canvas.height = 400;


const haduken = new Image();
haduken.src = "assets\\haduken_strip10.png";
const idle = new Image();
idle.scr = "assets\\idle_strip9.png";
const idle2 = new Image();
idle2.scr = "assets\\idle2_strip6.png";
const kick = new Image();
kick.scr = "assets\\kick_strip3.png";
const kick2 = new Image();
kick2.scr = "assets\\kick2_strip6.png";
const punch = new Image();
punch.scr = "assets\\punch1_strip2.png";
const punch2 = new Image();
punch2.scr = "assets\\punch2_strip6.png";
const uppercut = new Image();
uppercut.scr = "assets\\uppercut_strip6.png";

const larguraImagem = 70;
const alturaImagem = 80;

let acao = 0 , quadro = 0;

let personagem = {
    x: 80,
    y: 80,
    POSES: [
        { posicao: 0, nFrames: 4, vFrame:7 },
        { posicao: 1, nFrames: 4, vFrame:7 },
        { posicao: 2, nFrames: 3, vFrame:4 },
        { posicao: 3, nFrames: 4, vFrame:7 },
        { posicao: 6, nFrames: 5, vFrame:4 },
        { posicao: 7, nFrames: 5, vFrame:7 },
        { posicao: 8, nFrames: 7, vFrame:7 },  
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
            larguraImagem*2,
            alturaImagem*2   
        );

    }
}

let t0 , dt;

requestAnimationFrame(loop);
function loop(t){
    t0 = t0 ?? t;
    dt = (t - t0)/1000;

    personagem.desenha();
    quadro = (quadro >= personagem.POSES[acao].nFrames)? quadro = 0 : quadro + personagem.POSES[acao].vFrame*dt;
    
    
    requestAnimationFrame(loop);
    t0 = t;
}
