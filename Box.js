class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':0.2,
          'isStatic':false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color(random(0,255),random(0,255),random(0,255));
      this.Visibility = 255;
      World.add(world, this.body);
    }

    score(){
      if(this.Visibility<0 && this.Visibility > -1005){
        score++;
      }
    }

    display(){
      var pos =this.body.position;
      //console.log(this.body.speed);
      if(this.body.speed<3.6){
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x,pos.y,this.width, this.height);
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        pop(); 
      }
    }
  }
  