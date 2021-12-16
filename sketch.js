var bg,bg2, bg_treasure, form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  bg2 = loadImage("aladdin_cave2.jpg");
  bg_treasure = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Puntaje: " + score, 450, 50);
// add code for changing the background to the treasure background
  
  if(score === 2) {
    background(bg2);
    clues();
  }

  if(score === 3) {
    clear()
    background(bg_treasure);
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}