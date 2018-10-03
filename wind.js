/*jshint esversion: 6 */

class Wind {
  constructor(block_width) {
    this.block_width = block_width;
    this.time = 0;
    this.divisor = width / 50;

    this.flow_field = [];

    for (var x = 0; x < width / block_width; x++) {
      this.flow_field[x] = [];

      for (var y = 0; y < height / block_width; y++) {
        this.flow_field[x][y] = 0;
      }
    }

    this.set_field();
  }

  set_field() {
    for (var x = 0; x < width / this.block_width; x++) {
      for (var y = 0; y < height / this.block_width; y++) {
        this.flow_field[x][y] = noise(
          x / this.divisor,
          y / this.divisor,
          this.time
        ) * TWO_PI;
      }
    }
  }

  get_force(x, y) {
    var force = createVector(0, this.block_width);
    force.rotate(this.flow_field[x][y]);
    return force;
  }

  show() {
    colorMode(HSB);

    var pos = createVector(0, 0);
    var diff = createVector(0, 0);

    for (var x = 0; x < width / this.block_width; x++) {
      for (var y = 0; y < height / this.block_width; y++) {
        diff.x = 0;
        diff.y = this.block_width;
        diff.rotate(this.flow_field[x][y]);

        pos.x = x * this.block_width;
        pos.y = y * this.block_width;

        drawArrow(pos, diff, color(234, 200, 200));
      }
    }
  }
}

function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(-vec.x / 2, -vec.y / 2, vec.x / 2, vec.y / 2);
  rotate(vec.heading());
  var arrowSize = 2;
  translate(vec.mag() / 2 - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}
