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
