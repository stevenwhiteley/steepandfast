let bg;
function preload() {
	  bg = loadImage ("download.jpg");
}
function setup() {
  // put setup code here
  createCanvas(1500, 800);
  image(bg, 500, 500)
}

function draw() {
  // put drawing code here
  //background(400, 30, 200);
  background(bg);
  ellipse(mouseX, mouseY, 200, 200);
}