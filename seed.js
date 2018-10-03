/*jshint esversion: 6 */

class Seed {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.max_velocity = 4;
    this.max_force = 0.125;

    this.target = createVector(0, 0);
    this.steering_force = createVector(0, 0);
    this.desired_velocity = createVector(0, 0);

    this.seek = false;

    this.debug = false;
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

    if (this.desired_velocity.mag() < 2.0) {
      this.random_target();
    }

    this.desired_velocity.setMag(this.max_velocity);
  }

  steer() {
    p5.Vector.sub(this.desired_velocity, this.velocity, this.steering_force);
    this.steering_force.setMag(this.max_force);
    this.acceleration.add(this.steering_force);
  }

  move () {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.max_velocity);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  random_target() {
    this.set_target(
      random(100, width - 100),
      random(100, height - 100)
    );
  }

  show() {
    colorMode(HSB);

    if (this.seek && this.debug) {
      stroke(color(170, 150, 150));
      line(this.position.x, this.position.y, this.target.x, this.target.y);

      stroke(color(200, 150, 150));
      line(
        this.position.x,
        this.position.y,
        this.position.x + this.desired_velocity.x * 4,
        this.position.y + this.desired_velocity.y * 4
      );

      stroke(color(25, 150, 150));
      line(
        this.position.x,
        this.position.y,
        this.position.x + this.steering_force.x * 100,
        this.position.y + this.steering_force.y * 100
      );
    }

    if (this.debug) {
      stroke(color(230, 150, 150));
      line(
        this.position.x,
        this.position.y,
        this.position.x + this.velocity.x,
        this.position.y + this.velocity.y
      );
    }

    stroke(color(0, 0, 0));
    fill(color(0));
    ellipse(this.position.x, this.position.y, 5);
  }
}
