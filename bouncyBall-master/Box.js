class Box{
    constructor(x,y,width,height){
     var Boxoptions={restitution: 0.5,density: 1, friction: 1}
     this.body=Bodies.rectangle(x,y,width,height,Boxoptions);
     this.x=x;
     this.y=y;
     this.width=width;
     this.height=height;
     World.add(world,this.body); 
    }
    display(){
    push ();
    translate (this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    rectMode(CENTER);
    fill("blue")
    rect(0,0,this.width,this.height);
    console.log(this.body);
    pop ();
    }
}