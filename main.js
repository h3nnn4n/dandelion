/*jshint esversion: 6 */

seeds = [];

function setup() {
  createCanvas(700, 600);

  for (var i = 0, len = 5; i < len; i++) {
    seeds.push(new Seed(random(width), random(height)));
  }

  for (var p in seeds) {
    seeds[p].set_target(random(width), random(height));
    seeds[p].velocity.x = random(-10, 10);
    seeds[p].velocity.y = random(-10, 10);
  }
}

function draw() {
  background(255);

  for (var p in seeds) {
    seeds[p].update();
    seeds[p].show();
  }
}
