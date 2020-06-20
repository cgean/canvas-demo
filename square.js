class Square extends Figure {

    constructor(ctx, x, y, color) {       
        super(ctx, x, y, color);
        this.widthSquare = 40;
    }

    draw() {
        super.draw();
        this.left();        
    }

    drawFigure() {
        this.ctx.rect(this.x, this.y, this.widthSquare, this.widthSquare)
    }
    
    setStrokeStyle() {
        return "rgb(0,150,150)";
    }

    left() {
        if (this.x + this.widthSquare < 0) {
            this.x = posRand(this.ctx.canvas.clientWidth, 2 * this.ctx.canvas.clientWidth);
            this.y = posRand(0, this.ctx.canvas.clientHeight);
        }
        this.x -= this.step;
    }
}