class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/hero.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
   
    super.display();
    if(this.body.velocity.x > 5&&this.body.position.x>200){
    var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);
    }
    for(var t= 0;t<this.trajectory.length;t++){
      image(this.image1,this.trajectory[t][0],this.trajectory[t][1]);
    }
    
    
  }
}
