// class Dustbin{
//     constructor(x,y,width,height){

//         var option = {
//             isStatic:true
//         }

//         this.body = Bodies.rectangle(x,y,width,height,option);
//         this.width = width;
//         this.height = height;
//         this.image = loadImage("sprites/dustbingreen.png");

//         World.add(world, this.body);
//     }

//     display(){
//         var pos = this.body.position;

//         imageMode(CENTER);
        
//         image(this.image,pos.x,pos.y,this.width,this.height);
//     }

// }

class Dustbin { 
    constructor(x,y) { 
        this.x=x; 
        this.y=y; 
        this.dustbinWidth=200; 
        this.dustbinHeight=213; 
        this.wallThickness=20; 
        this.image=loadImage("sprites/dustbingreen.png");

        this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});
        this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true}); 
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true}); 
        World.add(world, this.bottomBody); 
        World.add(world, this.leftWallBody); 
        World.add(world, this.rightWallBody); 
    } 
    
    display() { 
        var posBottom=this.bottomBody.position; 
        var posLeft=this.leftWallBody.position; 
        var posRight=this.rightWallBody.position; 

        push(); 
        translate(posLeft.x, posLeft.y); 
        rectMode(CENTER) 
        // strokeWeight(4); 
        noStroke();
        angleMode(RADIANS); 
        fill(255); 
        rotate(this.angle); 
        rect(0,0,this.wallThickness, this.dustbinHeight); 
        pop(); 
        
        push(); 
        translate(posRight.x, posRight.y); 
        rectMode(CENTER) 
        // strokeWeight(4); 
        noStroke();
        angleMode(RADIANS); 
        fill(255); 
        rotate(-1*this.angle);
         rect(0,0,this.wallThickness, this.dustbinHeight);
        pop();
        
        push();
        translate(posBottom.x, posBottom.y+10); 
        rectMode(CENTER) 
        // strokeWeight(4); 
        // noStroke();
        angleMode(RADIANS); 
        fill("grey");
        imageMode(CENTER); 
        image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
        rect(0,0,this.dustbinWidth, this.wallThickness); 
        pop(); 
    } 
}