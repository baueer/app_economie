document.addEventListener("keypress", function(evt) {
    switch(evt.key) {
        case "w":
            moveFwd();
            break;
        case "a":
            moveLeft();
            break;
        case "s":
            moveBwd();
            break;
        case "d":
            moveRight();
            break;
    } 
});

function moveRight() {
    x+=actorSize;

    checkForGateExempt();
    if (x>canvas.width-actorSize-borderSize) x=canvas.width-actorSize-borderSize;
}
function moveLeft() {
    x-=actorSize;

    checkForGateExempt();
    if (x<borderSize) x=borderSize;
}
function moveFwd() {
    y-=actorSize;

    checkForGateExempt();
    if (y<borderSize) y=borderSize;
}
function moveBwd() {
    y+=actorSize;

    checkForGateExempt();
    if (y>canvas.height-actorSize-borderSize) y=canvas.height-actorSize-borderSize;
}