class Ball{
    constructor(x,y){
        var options={
            'restitution':0.8,
            'friction':1,
            'density':1.5
        }
        this.body = Bodies.polygon(x,y,6,60);
        this.image = loadImage("Images/polygon.png");
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,60,60);
    }
}