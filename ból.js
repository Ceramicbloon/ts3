class Ball {
    constructor(x, y, radius, options) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 3
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        World.add(world, this.body)
    }
    display() {
        fill("white")
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS)
        ellipse(0, 0, this.radius)
        pop();
    }
}