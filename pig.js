class Pig{
    constructor(x,y){
        //properties
        var options = {
            restitution: 0.8,
            friction:1.0,
            density:1.0
         }
       this.Body = Bodies.rectangle(x,y,50,50,options);
       this.width = 50;
       this.height = 50;
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
        
        fill("green");
        rect(0,0,this.width,this.height);
       pop();
    }
}