function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  
  fill('red');
  stroke('black');
  square(400, 5, 60);
  
  line(65,320,400,55);
  strokeWeight(2);
  stroke('black');
  
  fill('blue');
  stroke('black');
  square(5,300,60);
}