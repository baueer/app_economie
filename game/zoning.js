var areaMapColor = new Array();
var mapZoneBgActive = "grey";
var mapZoneBgComplete = "red";

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

    for(let i=1; i<=6; i++)
        if(checkForAreaCompletion(i)) areaMapColor[i]=mapZoneBgComplete;
            else if(i==areaIndex) areaMapColor[i]=mapZoneBgActive;
                else areaMapColor[i]= "black"; 

    ctx.fillStyle = areaMapColor[1];
    ctx.fillRect(zeroX, row1, areaW, areaH);
    ctx.fillStyle = areaMapColor[2];
    ctx.fillRect(zeroX+areaW+3, row1, areaW, areaH);
    ctx.fillStyle = areaMapColor[3];
    ctx.fillRect(zeroX+areaW+3+areaW+3, row1, areaW, areaH);
    ctx.fillStyle = areaMapColor[4];
    ctx.fillRect(mapX+5, row2, areaW, areaH);
    ctx.fillStyle = areaMapColor[5];
    ctx.fillRect(mapX+5+areaW+3, row2, areaW, areaH);
    ctx.fillStyle = areaMapColor[6];
    ctx.fillRect(mapX+5+areaW+3+areaW+3, row2, areaW, areaH);

    ctx.font = "55px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(area, canvas.width/2-18, canvas.height/2);
    
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

function checkForGateExempt() {
    switch(areaIndex) {
        case 1: gateExempt(2); gateExempt(4); break;
        case 2: gateExempt(2); gateExempt(3); gateExempt(4); break;
        case 3: gateExempt(2); gateExempt(3); break;
        case 4: gateExempt(1); gateExempt(4); break;
        case 5: gateExempt(1); gateExempt(2); gateExempt(3); gateExempt(4); break;
        case 6: gateExempt(1); gateExempt(3); break;
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

function gateExempt(pos) {
    if(pos == 1) {
        gateSize = 150;
        gateX = (canvas.width+gateSize)/2-gateSize;
        gateY = 0;
        if(x>=gateX&&x<=gateX+actorSize*2) {
            if(y<=gateY) {
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
                if(areaIndex==5) {
                    console.log('YOU WON');
                    showResults();
                } else {
                    areaIndex+=3;
                    y = borderSize;
                }
            }
        }
    }
    if(pos == 3) {
        gateSize = 100;
        gateX = 0;
        gateY = (canvas.height+gateSize)/2-gateSize;
        if(y==gateY||y==gateY+actorSize) {
            if(x<=gateX) {
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
                areaIndex++;
                x = borderSize;
            }
        }
    }
}