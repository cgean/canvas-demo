class Cloud extends Figure {

    constructor(ctx, x, y) {
       super(ctx, x, y, "#FFFFFF");
    }
    
    draw() {
        super.draw();
        this.left();        
    }

    setContextForm() {
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
        this.ctx.arc(this.x - 20, this.y, this.radius * 0.6, 0, 2 * Math.PI, false)
        this.ctx.arc(this.x + 20, this.y, this.radius * 0.6, 0, 2 * Math.PI, false)
    }

    setStrokeStyle() {
        return "rgb(255, 255, 255)";
    }

    left() {
        if (this.x + this.width < 0) {
            this.x = posRand(this.ctx.canvas.clientWidth, 2 * this.ctx.canvas.clientWidth);
            this.y = posRand(0, this.ctx.canvas.clientHeight);
        }
        this.x -= this.step;
    }
}