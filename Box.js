class Box{
    constructor(x,y,width,height){
        //properties
        var options = {
            restitution: 0.8,
            friction:1.0,
            density:1.0
         }
       this.Body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(myWorld,this.Body);
    } 

    //function
    display(){
        var pos = this.Body.position;
        var angle = this.Body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4)
        stroke("blue")
        fill("white");
        rect(0,0,this.width,this.height);
       pop();
    }
}