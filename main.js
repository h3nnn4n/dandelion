/*jshint esversion: 6 */

var seeds = [];

var wind;

function setup() {
  createCanvas(700, 600);

  for (var i = 0, len = 5; i < len; i++) {
    seeds.push(new Seed(random(width), random(height)));
  }

  for (var p in seeds) {
    seeds[p].random_target();
  }

  wind = new Wind(20);
}

function draw() {
  background(255);

  for (var p in seeds) {
    seeds[p].update();
    seeds[p].show();
  }
}
