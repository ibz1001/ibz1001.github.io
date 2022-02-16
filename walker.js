class Walker {
  constructor(x, y) {
    if (arguments.length == 2) {
      this.pos = createVector(x, y);
      this.stuck = true;
    } 
    else {
      this.stuck = false;
      this.pos = createVector(random(width), random(height));

      let posChoosing = random(1)
      if (posChoosing < 0.25){
        this.pos = createVector(random(width), 0);
      }
      else if(posChoosing < 0.5){
        this.pos = createVector(width, random(height));
      }
      else if(posChoosing < 0.75){
        this.pos = createVector(random(width), height);
      }
      else{
        this.pos = createVector(0, random(height));
      }
    }
    
    this.r = 5;
    this.colour = colour
    this.stuckRef = 0;
  }

  walk() {
    this.pos.add(random(-1,1),random(-1,1));
    this.pos.x = constrain(this.pos.x, 0, width);
    this.pos.y = constrain(this.pos.y, 0, height);
  }


  checkStuck(currentTree) {
    for (var i = 0; i < currentTree.length; i++) {
      let dist = this.distSq(this.pos, currentTree[i].pos);
      if (dist < (this.r * this.r + currentTree[i].r * currentTree[i].r + 2 * currentTree[i].r * this.r)) {
        this.stuck = true;
        this.stuckRef = i
        return true;
      }
    }
    return false;
  }



  show() {
    // if (this.stuck){
    //   stroke(this.colour)
    //   strokeWeight(this.r)
    //   line(tree[this.stuckRef].pos.x,tree[this.stuckRef].pos.y,this.pos.x,this.pos.y)
    // }
    // else{
      noStroke();
      fill(this.colour);
      ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    // }

  }
  
  distSq(a, b) {
    var dx = b.x - a.x;
    var dy = b.y - a.y;
    return dx * dx + dy * dy;
  }


}