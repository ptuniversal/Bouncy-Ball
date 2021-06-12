class Ground{
    constructor(){
        var ground_options ={
            isStatic: true
        }
    
        this.ground = Bodies.rectangle(200,390,400,20,ground_options);
        this.width=400;
        this.height=20;
        this.x=200;
        this.y=390;
        World.add(world,this.ground);
    }
    display(){

        rectMode(CENTER);
        fill ("Pink")
    rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
    
    }
}