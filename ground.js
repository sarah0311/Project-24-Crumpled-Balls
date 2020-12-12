class Ground{
    constructor(x,y,width,height){
        var ground_options = {
            isStatic: true,
            friction: 0.5,
            density: 1.2
        }

        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        push();
        fill("lightgreen");
        stroke("lightgreen");
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rect(0,0,this.width,this.height);
        pop();
    }
}