class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    //this.visibility = 0;
  }
  display(){
     //tint(220) 
    super.display();
    
  
 }
};
