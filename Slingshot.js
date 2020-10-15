class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 14
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke(48,22,8)
            if (pointA.x < 220) {
                strokeWeight(7);
                image(this.sling3,pointA.x-24,pointA.y-10,10,25);
                line(pointA.x-18, pointA.y, pointB.x-20, pointB.y);
                line(pointA.x-18,pointA.y, pointB.x+20, pointB.y)
            } else {
                strokeWeight(4);
                image(this.sling3,pointA.x+18,pointA.y-10,10,25);
                line(pointA.x+18, pointA.y, pointB.x-20, pointB.y);
                line(pointA.x+18,pointA.y, pointB.x-20, pointB.y)
            }
        }
    }
    
}