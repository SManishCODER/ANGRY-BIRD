class Pig1{
    constructor(x,y){
        var options={
            "restitution":0.3,
            "friction":1.0,
            "density":1.0
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("KingPig.png");
        this.image2 = loadImage("pgiout.png");
        this.visiblity = 255;
        World.add(world,this.body);

    }
    display(){

   
        if(this.body.speed<3){

            var pos = this.body.position;
            var angle = this.body.angle;
    
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            fill("green");
            image(this.image,0,0,this.width,this.height);
            pop();
    
        }
        else{
    
    
            World.remove(world,this.body);
            push();
            this.visiblity = this.visiblity=-2;
           tint(255,this.visiblity);
           image(this.image2,this.body.position.x,this.body.position.y,50,50);
          pop();
        }
    
            
        }
    
        Score(){
            if(this.visiblity<0 && this.visiblity>50){
                score=score+1;
            }
        }
    }