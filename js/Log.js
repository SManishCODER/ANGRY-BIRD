class Log{

    constructor(x,y,h,angle){
        var options={
            "restitution":0.3,
            "friction":1.0,
            "density":1.0
           
           
        }
        this.body = Bodies.rectangle(x,y,30,h,options)
        this.width=20;
        this.height=h;
        this.image = loadImage("wood2.png");
        Matter.Body.setAngle(this.body,angle)

        World.add(world,this.body)


    }
    display(){
        var pos=this.body.position;
        var angle = this.body.angle;

        push();
       translate(pos.x,pos.y);
       imageMode(CENTER);
       rotate(angle);
       strokeWeight(4);
       stroke("green");
       fill("white");
       image(this.image,0,0,this.width,this.height);
       pop();
    }
}