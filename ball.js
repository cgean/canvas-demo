class Ball {

    constructor(ctx) {
        this.ctx = ctx;
        this.width = ctx.canvas.clientWidth / 10;
        this.height = this.width;
        this.x = 50;
        this.y = 50;
        console.log("Ball created");
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.width / 2, 0, 2 * Math.PI, false);
        this.ctx.lineWidth = 3;
        this.ctx.fillStyle = "#00FF00";
        this.ctx.fill();
        this.ctx.strokeStyle = '#FF0000';
        this.ctx.stroke();
        console.log("Ball drawned");
    }
}
