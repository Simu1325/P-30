class Block{
  constructor(x, y, width, height) 
  thisvisibility=255
}
  {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
    if(this.body.speed<3){
      super.display()
    }
    else{
      push()
         World.remove(world,this.body)
         tint(255,this.visibility)
         this.visibility-=5
         image(this.image,this.body.position.x,this.body.position.y,50,50)
         pop()
    }