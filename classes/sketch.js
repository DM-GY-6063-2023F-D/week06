let circles = [];
let numCircles = 16;

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < numCircles; i++) {
    let myObject = {
      x: 0,
      y: random(30, height - 30),
      v: random(2, 4),
      r: random(15, 40),
    };
    circles.push(myObject);
  }
}

function draw() {
  background("lightblue");
  fill(220, 10, 100);

  for (let i = 0; i < circles.length; i += 1) {
    let myObject = circles[i];

    // draw circles
    ellipse(myObject.x, myObject.y, 2 * myObject.r, 2 * myObject.r);
    myObject.x += myObject.v;

    // if reset is needed: pick random diameter and reset x
    if (myObject.x > width + myObject.r) {
      myObject.r = random(15, 40);
      myObject.x = 0 - myObject.r;
    }
  }
}
