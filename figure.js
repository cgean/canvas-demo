class Figure {
    
    constructor(ctx, x, y, color) {
        this.color = color;
        this.step = 0;
        this.ctx = ctx;
        this.canvasWidth = ctx.canvas.clientWidth;
        this.canvasHeight = ctx.canvas.clientHeight;
        this.width = this.canvasWidth / 10;
        this.height = this.width;
        this.radius = this.width / 2;
        this.x = x;
        this.y = y
        this.color = color;
        console.log("Figure created");
    }

    draw() {
        this.ctx.beginPath();
        this.setContextForm();
        this.ctx.lineWidth = 3;
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.strokeStyle = this.setStrokeStyle();
        this.ctx.stroke();
    }

    setContextForm() {
        throw new Error('Method must be implemented in the subclass!');
    }

    setStrokeStyle() {
        return "rgb(150,150,150)";
    }

    step(){
        return this.step
    }

    setStep(step) {
        this.step = step
    }
}