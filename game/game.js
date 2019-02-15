var canvas = document.getElementById("gameZone");
var ctx = canvas.getContext("2d");
var borderSize = 20;
var areaIndex = 1; // game actor first spawned in 'A' area
var area;
var gameZoneBg = "#f8f8f8";
var answered = 0;
var correctAnswered = 0;
var wrongAnswered = 0;

// game actor assets
var actorSize = 50;
var x = borderSize;
var y = borderSize;

function drawActor() {
    ctx.fillStyle = "#acacac";
    ctx.fillRect(x, y, actorSize, actorSize);
}

function render() {
    areaCheck();
    // basic map rendering
    ctx.fillStyle = "#b7b7b7";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = gameZoneBg;
    ctx.fillRect(borderSize, borderSize, canvas.width-borderSize*2, canvas.height-borderSize*2);

    // complex rendering
    drawMap();
    drawGates(areaIndex);
    drawPickups();

    if(areaIndex == 5) {
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = "black";
        ctx.font = "30px Arial";
        ctx.fillText('FINISH', canvas.width/2-borderSize-28, canvas.height-borderSize);
        ctx.globalAlpha = 1;
    }

    drawActor();
}
setInterval(render, 10);