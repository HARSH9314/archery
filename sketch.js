var bg;

function preload(){
  bg=loadImage("images/bg.jpg")
}
function setup() {
  createCanvas(windowWidth-50,windowHeight-30);
  button =createButton("PLAY")
  button.position(windowWidth/2,windowHeight/6)
  button.size(200)
  button.mousePressed()
}

function draw() {

  background(bg); 
}