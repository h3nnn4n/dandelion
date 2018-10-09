/*jshint esversion: 6 */

var seeds = [];

var wind;
var phyllotaxis;

function setup() {
  createCanvas(700, 600);

  phyllotaxis = new Phyllotaxis(
    width * 0.25,
    height * 0.67,
    50
  );

  wind = new Wind(10);
  //wind.show();
}

function draw() {
  background(255);

  //wind.show();
  //ellipse(width * 0.25, height * 0.67, 7);

  for (var p in seeds) {
    seeds[p].update();
    seeds[p].show();
  }
}
