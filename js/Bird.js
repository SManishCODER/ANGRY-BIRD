class Bird {
    constructor(x,y){
        var options={

            "restitution":0.8,
            "friction":1,
            "density":1.0
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
          this.width=50;
          this.height=50;

          this.image = loadImage("bird.png");
          this.smoke = loadImage("smoke.png");
          this.trajectory = [];
          World.add(world,this.body);

    }




    display(){
        var pos =this.body.position;
        var angle = this.body.angle;

        if(this.body.velocity.x>10 && this.body.position.x>200){


            var position=[this.body.position.x,this.body.position.y];

        this.trajectory.push(position);

        }

        

        for(var i=0;i<this.trajectory.length;i++){

            image(this.smoke,this.trajectory[i][0],this.trajectory[i][1])
        }
       
       push();
       translate(pos.x,pos.y);
        rotate(angle);
       strokeWeight(4);
       stroke("blue")
       fill("red");
     imageMode(CENTER);
     image(this.image,0,0,this.height,this.width);
        pop();
    }
}