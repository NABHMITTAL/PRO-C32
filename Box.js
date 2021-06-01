class Box  {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.width = width
  this.height = height
    this.body = Bodies.rectangle(x,y,width,height)
    this.image = loadImage("images/Glasses.png")
    this.Visiblity = 255;
    World.add(world,this.body)
  }

  score(){
    if (this.body.position.y>800 && this.body.position.y<850) {
      score++
    }
  }

 display(){
  
  
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
};
