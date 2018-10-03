/*jshint esversion: 6 */

class Seed {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.max_velocity = 4;
    this.max_force = 0.25;

    this.target = createVector(0, 0);

    this.desired_velocity = createVector(0, 0);

    this.seek = false;
  }

  set_target(x, y) {
    this.target.x = x;
    this.target.y = y;

    this.seek = true;
  }

  update() {
    this.update_desired_velocity();
    this.steer();
    this.move();
  }

  update_desired_velocity() {
    p5.Vector.sub(this.target, this.position, this.desired_velocity);
    this.desired_velocity.setMag(this.max_velocity);
  }

  steer() {
    var steer = p5.Vector.sub(this.desired_velocity, this.velocity);
    steer.setMag(this.max_force);
    this.acceleration.add(steer);
  }

  move () {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.max_velocity);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  show() {
    colorMode(HSB);

    if (this.seek) {
      stroke(color(170, 150, 150));
      line(this.position.x, this.position.y, this.target.x, this.target.y);

      stroke(color(200, 150, 150));
      line(this.position.x, this.position.y, this.position.x + this.desired_velocity.x, this.position.y + this.desired_velocity.y);
    }

    stroke(color(230, 150, 150));
    line(this.position.x, this.position.y, this.position.x + this.velocity.x, this.position.y + this.velocity.y);

    ellipse(this.position.x, this.position.y, 5);
  }
}
