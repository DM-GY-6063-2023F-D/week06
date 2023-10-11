class Asteroid {
  constructor() {
    this.x = 0;
    this.y = random(30, height - 30);
    this.v = random(2, 4);
    this.r = random(15, 40);
  }

  update() {
    this.x += this.v;

    if (this.x > width + this.r) {
      this.r = random(15, 40);
      this.x = 0 - this.r;
    }
  }

  draw() {
    fill(80);
    stroke(0);
    ellipse(this.x, this.y, 2 * this.r, 2 * this.r);
  }
}

class Spaceship {
  constructor(_color) {
    this.x = random(0, width);
    this.y = random(0, height);
    this.vx = random(-5, 5);
    this.vy = random(-5, 5);
    this.color = _color;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0) {
      this.x += width;
      this.vx = random(-2, 2);
    }
    if (this.x > width) {
      this.x -= width;
      this.vx = random(-2, 2);
    }

    if (this.y < 0) {
      this.y += height;
      this.vy = random(-2, 2);
    }
    if (this.y > height) {
      this.y -= height;
      this.vy = random(-2, 2);
    }
  }

  draw() {
    noStroke();
    fill(this.color);
    let rotAngle = atan2(this.vy, this.vx);

    push();
    translate(this.x, this.y);
    rotate(rotAngle);
    triangle(-40, -20, -40, 20, 40, 0);
    pop();
  }
}

let asteroidArray = [];
let maxAsteroids = 32;

let spaceshipArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < maxAsteroids; i++) {
    asteroidArray.push(new Asteroid());
  }

  spaceshipArray.push(new Spaceship("steelblue"));
  spaceshipArray.push(new Spaceship("silver"));
}

function draw() {
  background(0);

  for (let i = 0; i < asteroidArray.length; i += 1) {
    let anAsteroid = asteroidArray[i];
    anAsteroid.update();
    anAsteroid.draw();
  }

  for (let i = 0; i < spaceshipArray.length; i += 1) {
    let aSpaceShip = spaceshipArray[i];
    aSpaceShip.update();
    aSpaceShip.draw();
  }
}
