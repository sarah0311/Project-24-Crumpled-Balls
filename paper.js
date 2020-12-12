class Paper{
    constructor(x,y,radius){
        var paper_options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.radius = radius;

        this.body = Bodies.circle(x,y,radius,paper_options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        fill("lightblue")
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}