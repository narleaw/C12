var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
 ship1 = loadImage("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista
pista = createSprite(200,200);
//adicione uma imagem para a pista
pista.add = (pathImg);
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
pista.y = pista.width/2;
path.scale=1.2;

//crie um sprite de menino
boy = createSprite(200,370);
//adicione uma animação de corrida para ele
boy.addAnimation = (ship1);

boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible =false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
 boy = mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.colide(rightBoundary);
  boy.colide(leftBoundary);
  //código para redefinir o fundo
    if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
