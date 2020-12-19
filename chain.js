class chain{
    constructor(body1,body2){
        options = {bodyA: body1,
            bodyB: body2,
            stffness: 0.03,
            length: 100};
 this.chain = Constraint.create(options);
 World.add(world,this.chain);


    }
    display(){
    var birdpos = this.chain.bodyA.position
    var log6pos = this.chain.bodyB.position
    line(birdpos.x,birdpos.y,log6pos.x,log6pos.y)
    }
}