function drawMap() {
    ctx.globalAlpha = 0.5;

    let mapX = 584-borderSize;
    let mapY = 0+borderSize;
    
    ctx.fillStyle = "green";
    ctx.fillRect(mapX, mapY, 106, 63);

    // layout
    // 5px + 30px + 3px + 30px + 3px + 30px + 5px (horizontal)
    // 5px + 25px + 3px + 25px + 5px (vertical)

    let areaH = 25;
    let areaW = 30;
    let zeroX = mapX+5;
    let row1 = mapY+5;
    let row2 = row1+areaH+3;

    ctx.fillStyle = "black";
    ctx.fillRect(zeroX, row1, areaW, areaH);
    ctx.fillRect(zeroX+areaW+3, row1, areaW, areaH);
    ctx.fillRect(zeroX+areaW+3+areaW+3, row1, areaW, areaH);
    
    ctx.fillRect(mapX+5, row2, areaW, areaH);
    ctx.fillRect(mapX+5+areaW+3, row2, areaW, areaH);
    ctx.fillRect(mapX+5+areaW+3+areaW+3, row2, areaW, areaH);

    areaCheck();
    ctx.font = "45px Arial";
    ctx.fillText(area, 250, 250);
    
    ctx.globalAlpha = 1;
}

function areaCheck() {
    switch(areaIndex) {
        case 1: area = "A"; break;
        case 2: area = "B"; break;
        case 3: area = "C"; break;
        case 4: area = "D"; break;
        case 5: area = "E"; break;
        case 6: area = "F"; break;
    }
}

function drawGates(areaIndex) {
    switch(areaIndex) {
        case 1: drawGate(2); drawGate(4); break;
        case 2: drawGate(2); drawGate(3); drawGate(4); break;
        case 3: drawGate(2); drawGate(3); break;
        case 4: drawGate(1); drawGate(4); break;
        case 5: drawGate(1); drawGate(2); drawGate(3); drawGate(4); break;
        case 6: drawGate(1); drawGate(3); break;
    }
}

function drawGate(pos) {
    // 1 -> UP | 2 -> DOWN | 3 -> LEFT | 4 -> RIGHT
    if(pos == 1) {
        gateSize = 150;
        gateX = (canvas.width+gateSize)/2-gateSize;
        gateY = 0;
        ctx.fillStyle = gameZoneBg;
        ctx.fillRect(gateX, gateY, gateSize, borderSize); 
    }
    if(pos == 2) {
        gateSize = 150;
        gateX = (canvas.width+gateSize)/2-gateSize;
        gateY = canvas.height-borderSize;
        ctx.fillStyle = gameZoneBg;
        ctx.fillRect(gateX, gateY, gateSize, borderSize);
    }
    if(pos == 3) {
        gateSize = 100;
        gateX = 0;
        gateY = (canvas.height+gateSize)/2-gateSize;
        ctx.fillStyle = gameZoneBg;
        ctx.fillRect(gateX, gateY, borderSize, gateSize);
    }
    if(pos == 4) {
        gateSize = 100;
        gateX = canvas.width-borderSize;
        gateY = (canvas.height+gateSize)/2-gateSize;
        ctx.fillStyle = gameZoneBg;
        ctx.fillRect(gateX, gateY, borderSize, gateSize);
    }
};

function checkForGateExempt() {
    if(areaIndex==1) {
        gateExempt(2);
        gateExempt(4);
    }
    if(areaIndex==2) {
        gateExempt(2);
        gateExempt(3);
        gateExempt(4);
    }
    if(areaIndex==3) {
        gateExempt(2);
        gateExempt(3);
    }
    if(areaIndex==4) {
        gateExempt(1);
        gateExempt(4);
    }
    if(areaIndex==5) {
        gateExempt(1);
        gateExempt(3);
        gateExempt(4);

        // gameOverCheck();
    }
    if(areaIndex==6) {
        gateExempt(1);
        gateExempt(3);
    }
}

function gateExempt(pos) {
    if(pos == 1) {
        gateSize = 150;
        gateX = (canvas.width+gateSize)/2-gateSize;
        gateY = 0;
        if(x>=gateX&&x<=gateX+actorSize*2) {
            if(y<=gateY) {
                console.log("rocking the sky up");
                areaIndex-=3;
                y = canvas.height-borderSize-actorSize;
            }
        }
    }
    if(pos == 2) {
        gateSize = 150;
        gateX = (canvas.width+gateSize)/2-gateSize;
        gateY = canvas.height-borderSize;
        if(x>=gateX&&x<=gateX+actorSize*2) {
            if(y==gateY) {
                console.log("down we go");
                areaIndex+=3;
                y = borderSize;
            }
        }
    }
    if(pos == 3) {
        gateSize = 100;
        gateX = 0;
        gateY = (canvas.height+gateSize)/2-gateSize;
        if(y==gateY||y==gateY+actorSize) {
            console.log("da");
            if(x<=gateX) {
                console.log("left behind");
                areaIndex--;
                x = canvas.width-borderSize-actorSize;
            }
        }
    }
    if(pos == 4) {
        gateSize = 100;
        gateX = canvas.width-borderSize;
        gateY = (canvas.height+gateSize)/2-gateSize;
        if(y==gateY||y==gateY+actorSize) {
            if(x==gateX) {
                console.log("here we are");
                areaIndex++;
                x = borderSize;
            }
        }
    }
}