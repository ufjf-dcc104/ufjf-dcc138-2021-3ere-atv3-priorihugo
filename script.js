const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");
//vw = (Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) * 0.9)
//vh = (Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) )
//canvas.width = vw;
//canvas.height = vh;
canvas.width = 400;
canvas.height = 400;

document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    quadro = 0;
    acao = (acao + 1) % 8;
  }
});

const hadouken = new Image();
hadouken.src = "assets\\hadouken_strip10.png";
const idle = new Image();
idle.src = "assets\\idle_strip9.png";
const idle2 = new Image();
idle2.src = "assets\\idle2_strip6.png";
const kick = new Image();
kick.src = "assets\\kick_strip3.png";
const kick2 = new Image();
kick2.src = "assets\\kick2_strip6.png";
const punch = new Image();
punch.src = "assets\\punch1_strip2.png";
const punch2 = new Image();
punch2.src = "assets\\punch2_strip6.png";
const uppercut = new Image();
uppercut.src = "assets\\uppercut_strip6.png";

let acao = 0,
  quadro = 0;

let personagem = {
  x: 80,
  y: 80,
  POSES: [
    { img: idle, largura: 75, nFrames: 9, vFrame: 9 },
    { img: idle2, largura: 73, nFrames: 6, vFrame: 6 },
    { img: kick, largura: 123, nFrames: 3, vFrame: 3 },
    { img: kick2, largura: 114, nFrames: 6, vFrame: 6 },
    { img: punch, largura: 112, nFrames: 2, vFrame: 2 },
    { img: punch2, largura: 114, nFrames: 6, vFrame: 6 },
    { img: uppercut, largura: 83, nFrames: 6, vFrame: 6 },
    { img: hadouken, largura: 149, nFrames: 10, vFrame: 10 },
  ],
  desenha() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.font = "20px Impact";
    ctx.fillText("Aperte espaço", 20, 20, canvas.width);
    ctx.drawImage(
      personagem.POSES[acao].img, ///source
      ///posicao na sprite sheet
      personagem.POSES[acao].largura * Math.floor(quadro), //sx
      0,
      personagem.POSES[acao].largura,
      personagem.POSES[acao].img.height,
      ///posicao na tela;
      personagem.x,
      canvas.height - personagem.POSES[acao].img.height - 20,
      personagem.POSES[acao].largura,
      personagem.POSES[acao].img.height
    );
  },
};

let t0, dt;

requestAnimationFrame(loop);
function loop(t) {
  t0 = t0 ?? t;
  dt = (t - t0) / 1000;

  personagem.desenha();
  ctx.fillText;
  ///esse 0.2 é uma gambiarra pra animação não flickar
  quadro =
    quadro >= personagem.POSES[acao].nFrames - 0.2
      ? (quadro = 0)
      : quadro + personagem.POSES[acao].vFrame * dt;

  requestAnimationFrame(loop);
  t0 = t;
}
