class Mangoes{
    constructor(x,y){
        var options={
            restitution : 0.3,
            friction : 1,
            isStatic : true
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.r = 20;
        this.image = loadImage("mango.png");
        World.add(world,this.body);    
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,40,40);
        pop();
        
    }

}
