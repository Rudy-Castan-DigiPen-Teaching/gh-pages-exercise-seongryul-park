/*
seong ryul park
5646463
cs099
spring 2020
GitHub Pages Exercise
*/

let x = 0;
let y = 0;


function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  let x1 = map(mouseX, width, 0, 0, 10);
  
  strokeWeight(x1);
  
  circle(200 + 100 * sin(x), 200  - 100 * sin(y), 40 * sin(x) + 100);
  
  x += HALF_PI/100;
  y += HALF_PI/25;
}