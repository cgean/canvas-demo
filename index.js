console.log("Started")

let canvas
let ctx
let width
let height
var figures = []

function start() {  
    create()
    render()
}

function create() {
    canvas = document.getElementById('mycanvas')
    ctx = canvas.getContext("2d")
    width = ctx.canvas.clientWidth
    height = ctx.canvas.clientHeight
    createFigures()
}

function createFigures() {
    let fig1 = new Ball(ctx, posRand(0, width), posRand(0, height), "rgb(80,80,80)");
    let fig2 = new Ball(ctx, posRand(0, width), posRand(0, height), "rgb(10,80,80)");
    let fig3 = new Square(ctx, posRand(width, 2*width), posRand(0, height), "rgb(" + posRand(0,255) + "," + posRand(0,255) +"," + posRand(0,255) + ")");
    let fig4 = new Square(ctx, posRand(width, 2*width), posRand(0, height), "rgb(" + posRand(0,255) + "," + posRand(0,255) +"," + posRand(0,255) + ")");
 
    clouds = []
    for(i = 0; i <= 10; i++){
        clouds.push(new Cloud(ctx, posRand(0, width), posRand(0, height)));
    }
    figures = [fig1, fig2, fig3, fig4];
    figures = figures.concat(clouds)
    figures.forEach(function(fig) {
        fig.setStep(posRand(1, 8))
    });
}

function render() {    
    requestAnimationFrame(render); 
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    draw()
}

function draw() { 
    figures.forEach(function(fig) {
        fig.draw();        
    });
}

function posRand(min, max) {
    return Math.random() * (max - min) + min;
}

document.addEventListener('keydown', (event) => {
    const fig1  = figures[0];
    if (event.key === 'ArrowUp') {
        fig1.up()
    } else if (event.key === 'ArrowDown') {
        fig1.down()      
    } else if (event.key === 'ArrowLeft') {
        fig1.left()
    } else if (event.key === 'ArrowRight') {
        fig1.right()     
    }
 });