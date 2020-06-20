class Ball extends Figure {

    constructor(ctx, x, y, color) {
       super(ctx, x, y, color);
    }

    drawFigure() {
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
    }

    setStrokeStyle() {
        return "rgb(0, 150, 0)";
    }

    up() {
        if (this.y - this.radius > 0) {
            this.y -= this.step
        }
    }

    down() {
        if (this.y + this.radius < this.canvasHeight){
            this.y += this.step
        }       
    }
    
    left() {
        if (this.x - this.radius > 0){
            this.x -= this.step
        }
    }

    right() {
        if (this.x + this.radius < this.canvasWidth){
            this.x += this.step
        }
    }
}