class Dustbin{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;

        var dustbin_options = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,dustbin_options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        
        fill(255);
        stroke(255);

        rect(pos.x,pos.y,this.width,this.height);
    }
}