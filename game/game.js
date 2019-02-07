var canvas = document.getElementById("gameZone");
var ctx = canvas.getContext("2d");
var borderSize = 20;
var areaIndex = 1; // game actor first spawned in 'A' area
var area;
var gameZoneBg = "cyan";

// game actor assets
var actorSize = 50;
var x = borderSize;
var y = borderSize;

function drawActor() {
    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, actorSize, actorSize);
}

function render() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = gameZoneBg;
    ctx.fillRect(borderSize, borderSize, canvas.width-borderSize*2, canvas.height-borderSize*2);
    drawActor();
    drawMap();
    drawGates(areaIndex);
    drawPickups();
}
setInterval(render, 10);