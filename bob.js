class Bob{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:1,
            friction:0,
            density:0.8
        }
        this.r=r;
        this.body=Bodies.circle(x,y,r,option);
        //this.image = loadImage("paper.png")
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS)
        fill("green");
        ellipse(0,0,this.r,this.r)
        pop();
    }
}