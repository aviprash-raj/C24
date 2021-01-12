class Bird{
    constructor(x,y){
        //properties
        var options = {
            restitution: 0.5,
            friction:1.0,
            density:1.5
         }
       this.Body = Bodies.rectangle(x,y,50,50,options);
       this.width = 50;
       this.height = 50;
       World.add(myWorld,this.Body);
    } 

    //function
    display(){
        var pos = this.Body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.Body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4)
        stroke("blue")
        fill("red");
        rect(0,0,this.width,this.height);
       pop();
    }
}