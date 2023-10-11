let circles = [];
let numCircles = 16;

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < numCircles; i++) {
    let myObject = {
      x: random(0, width),
      y: random(0, height),
      v: random(-0.6, -0.1),
      r: random(40, 80),
    };
    circles.push(myObject);
  }
}

function isVisible(circle) {
  return (circle.r > 0);
}

function compareRadius(circleA, circleB) {
  return circleA.r - circleB.r;
}

function draw() {
  background("lightblue");
  fill(220, 10, 100);

  circles = circles.filter(isVisible);
  circles.sort(compareRadius);

  for (let i = circles.length - 1; i >= 0; i -= 1) {
    let myObject = circles[i];

    // draw circles
    ellipse(myObject.x, myObject.y, 2 * myObject.r, 2 * myObject.r);

    myObject.r = max(myObject.r + myObject.v, 0);
  }
}

function mouseClicked() {
  for (let i = 0; i < 24; i++) {
    let myObject = {
      x: random(0, width),
      y: random(0, height),
      v: random(-0.6, -0.1),
      r: random(40, 80),
    };
    circles.push(myObject);
  }
}
