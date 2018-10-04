/*jshint esversion: 6 */

var seeds = [];

var wind;

function setup() {
  createCanvas(700, 600);

  for (var i = 0, len = 25; i < len; i++) {
    seeds.push(new Seed(random(width), random(height)));
  }

  for (var p in seeds) {
    //seeds[p].random_target();
    seeds[p].to_the_wind = true;
  }

  wind = new Wind(10);
  //wind.show();
}

function draw() {
  background(255);

  //wind.show();

  for (var p in seeds) {
    seeds[p].update();
    seeds[p].show();
  }
}
