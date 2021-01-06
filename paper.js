class paper {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution: 0.2,
          friction:0.3,
          density:1.0
          
      }
      this.radius - radius
      this.body = Bodies.circle(x, y, radius, options);
      
      World.add(world, this.body);
    }
    display(){
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);
}
}