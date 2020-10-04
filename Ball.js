class Paper{
    constructor(x,y){

        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(x,y,20,options);
        this.diameter = 20;
        this.image = loadImage("sprites/paper.png");
        
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,70,70);
    }

}