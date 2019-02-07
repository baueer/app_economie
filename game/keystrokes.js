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
        case " ":
            console.log(`[`+areaIndex+`, `+x+`, `+y+`, 1]`);
            break;
    } 
});

function moveRight() {
    x+=actorSize;

    checkForGateExempt();
    checkForPickup();
    if (x>canvas.width-actorSize-borderSize) x=canvas.width-actorSize-borderSize;
}
function moveLeft() {
    x-=actorSize;

    checkForGateExempt();
    checkForPickup();
    if (x<borderSize) x=borderSize;
}
function moveFwd() {
    y-=actorSize;

    checkForGateExempt();
    checkForPickup();
    if (y<borderSize) y=borderSize;
}
function moveBwd() {
    y+=actorSize;

    checkForGateExempt();
    checkForPickup();
    if (y>canvas.height-actorSize-borderSize) y=canvas.height-actorSize-borderSize;
}