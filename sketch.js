// // let bg;
// // function preload() {
// // 	  bg = loadImage ("https://verns.world/ANIblackcat.gif");
// }

let face;

function preload() {
  // Load model with normalise parameter set to true
    face = loadModel('assets/me.OBJ', true);
}

function setup() {
  // put setup code here
  createCanvas(1000, 1000, WEBGL);
  //image(bg, 1000, 1000);

}

function draw() {
  background(200);
  scale(0.4); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(face);
}