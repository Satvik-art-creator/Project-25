class Ground{
    constructor(x,y){

        var option = {
            isStatic: true
        }

       this.body = Bodies.rectangle(x,y,1200,25,option);
       this.width = 1200;
       this.height = 25;
       
       World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        rectMode(CENTER);
        fill("grey");
        rect(pos.x, pos.y, 1500, 18);
    }

}