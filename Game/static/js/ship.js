function Ship(){
    this.x = 200;
    this.y = 200;
    this.health = 10;
    this.score = 0 ;
}

Ship.prototype.show = function(){
    this.x = lerp(this.x,map(mouseX,0,width,0,width,true),0.11);
    this.y = lerp(this.y,map(mouseY,0,height,0,height,true),0.11);
    fill(255);
    ellipse(this.x,this.y,100,100);
}
Ship.prototype.status = function(){
    var rcol = map(this.health,0,100,255,0);
    var gcol = map(this.health,0,100,0,255);
    if(this.health <= 0){
        ellipse(10,10,1,1);
    }
    else{
        noStroke();
        fill(rcol,gcol,0);
        rect(10,10,this.health,10);
    }
}