class Box {

    constructor(x,y,w,h){
        var options={

            "restitution":0.3,
            "friction":1.0,
            "density":1.0
           
            
          }
        
          this.body = Bodies.rectangle(x,y,w,h,options);
          this.width=w;
          this.height=h;
          this.image = loadImage("wood1.png");

          World.add(world,this.body);
    }
    display(){
        
        var angle=this.body.angle;

        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        
        strokeWeight(4);
        stroke("green")
        fill(255);
        imageMode(CENTER);
        image(this.image,0,0,this.height,this.width);
        pop();
    }




}