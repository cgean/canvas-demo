console.log("Started");

let ball;

function start() {
    let canvas = document.getElementById('mycanvas');
    let ctx = canvas.getContext("2d");
    let ball = new Ball(ctx);
    ball.draw();
}

