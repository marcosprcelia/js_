
let xBolinha = 300
let yBolinha = 200
let diametro = 15
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6
let raio = diametro / 2

let xRaquete = 5
let yRaquete = 150
let raqueteComprimento = 10
let raqueteAltura = 90
let xRauqeteOponente = 585
let yRaqueteOponente = 150

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  movimentaRaqueteOponente()
  
  function movimentaRaqueteOponente(){
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento
    yRaqueteOponente += velocidadeYOponente

  }
  rect(xRaquete, yRaquete,
raqueteComprimento, raqueteAltura)

let velocidadeYOponente 
 
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;n(DOWN_ARROW)){
 
  }
  if (keyIsDow   yRaquete += 10;
  }
  
  hit = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, diametro);
  if (hit) {
    velocidadeXBolinha*= -1
  }
  

  circle (xBolinha, yBolinha, diametro)
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha
 
  if (xBolinha + raio > width ||
     xBolinha - raio < 0) {
    velocidadeXBolinha *= -1
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0) {
    velocidadeYBolinha *= -1
  }
}