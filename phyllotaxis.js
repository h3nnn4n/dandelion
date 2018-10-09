/*jshint esversion: 6 */

class Phyllotaxis {
  constructor(x, y, amount) {
    this.center_x = x;
    this.center_y = y;
    this.amount = amount;

    this.radius_scale = 1.0;
    this.base_radius = 12.5;
    this.angle_step = radians(137.508);
    this.radius_step = Math.sqrt(amount) * this.radius_scale;

    this.init();
  }

  init() {
    var angle = 0;
    var radius = this.base_radius;
    for (var i = 0; i < this.amount; i++) {
      var x = this.center_x + radius * Math.cos(angle);
      var y = this.center_y + radius * Math.sin(angle);

      angle += this.angle_step;
      radius += Math.log(i + 1) * this.radius_scale;

      var seed = new Seed(x, y, angle);
      seed.to_the_wind = true;
      seeds.push(seed);
    }
  }
}
