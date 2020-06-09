class Ball {

    constructor(ctx) {
        this.step = 10
        this.ctx = ctx
        this.canvasWidth = ctx.canvas.clientWidth
        this.canvasHeight = ctx.canvas.clientHeight
        this.width = this.canvasWidth / this.step
        this.height = this.width
        this.radius = this.width / 2
        this.x = 50
        this.y = 50
        console.log("Ball created")
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
        this.ctx.lineWidth = 3
        this.ctx.fillStyle = "rgb(80,80,80)"
        this.ctx.fill()
        this.ctx.strokeStyle = "rgb(150,150,150)"
        this.ctx.stroke()
    }

    up(){
        if (this.y - this.radius > 0){
            this.y -= this.step
        }
    }

    down(){
        if (this.y + this.radius < this.canvasHeight){
            this.y += this.step
        }       
    }
    
    left(){
        if (this.x - this.radius > 0){
            this.x -= this.step
        }
    }

    right(){
        if (this.x + this.radius < this.canvasWidth){
            this.x += this.step
        }
    }
}
