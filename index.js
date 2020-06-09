console.log("Started")

let canvas
let ball

function start() {
    canvas = document.getElementById('mycanvas')
    let ctx = canvas.getContext("2d")
    ball = new Ball(ctx)
    draw()
}

function draw() { 
    let ctx = canvas.getContext("2d") 
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ball.draw()
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        ball.up()
    } else if (event.key === 'ArrowDown') {
        ball.down()      
    } else if (event.key === 'ArrowLeft') {
        ball.left()
    } else if (event.key === 'ArrowRight') {
        ball.right()     
    }
    draw()
 });