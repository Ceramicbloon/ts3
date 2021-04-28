class Box {
    constructor(x, y, width, height, options) {
        var options = {
            isStatic: false,
            restitution: 0.8,
            friction: 1.0,
            density: 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width
        this.height = height
        World.add(world, this.body)

    }
    display() {
        if (this.body.speed < 5) {
            strokeWeight(2)
            push();
            translate(this.body.position.x, this.body.position.y)
            rectMode(CENTER)
            //fill(random)
            rect(0, 0, this.width, this.height)
            pop();
        } else {
            World.remove(world, this.body)
        }
    }
}