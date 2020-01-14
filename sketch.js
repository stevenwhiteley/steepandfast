PImage bg;

function setup() {
  // put setup code here
  createCanvas(1500, 800);
  bg = loadImage ("download.jpg");
}

function draw() {
  // put drawing code here
  //background(400, 30, 200);
  background(bg);
  ellipse(mouseX, mouseY, 200, 200);
}