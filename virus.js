class Vaccine {
    constructor(y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(1600,y,200,200,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("virus.png");
        this.visibility = 255;
        World.add(world,this.body);
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y,200,200);
    }
}