/*jshint esversion: 6 */

class Phyllotaxis {
  constructor(x, y, amount) {
    this.center_x = x;
    this.center_y = y;
    this.amount = amount;

    this.radius_scale = 0.25;
    this.angle_step = 2.399967348;
    this.radius_step = Math.sqrt(amount) * this.radius_scale;

    this.init();
  }

  init() {
    var angle = 0;
    var radius = 0;
    for (var i = 0; i < this.amount; i++) {
      var x = this.center_x + radius * Math.cos(angle);
      var y = this.center_y + radius * Math.sin(angle);

      //console.log(x, y);

      var seed = new Seed(x, y);
      seed.to_the_wind = true;

      seeds.push(seed);

      angle += this.angle_step;
      radius += this.radius_step;
    }
  }
}
