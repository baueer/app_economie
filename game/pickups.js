var pickups = [
    //  zone(0)    x(1)    y(2)     isActive(3)
        [1, 170, 170, 1],
        [1, 120, 270, 1],
        [1, 470, 120, 1],
        [1, 420, 220, 1],
        [1, 420, 370, 1],
        [2, 120, 120, 1],
        [2, 270, 270, 1],
        [2, 220, 420, 1],
        [2, 520, 320, 1],
        [2, 470, 120, 1],
        [3, 170, 70, 1],
        [3, 270, 220, 1],
        [3, 220, 420, 1],
        [3, 520, 370, 1],
        [3, 520, 220, 1],
        [4, 170, 70, 1],
        [4, 120, 220, 1],
        [4, 170, 420, 1],
        [4, 370, 270, 1],
        [4, 470, 170, 1],
        [5, 170, 120, 1],
        [5, 270, 220, 1],
        [5, 270, 420, 1],
        [5, 470, 420, 1],
        [5, 520, 270, 1],
        [6, 170, 70, 1],    
        [6, 220, 220, 1],
        [6, 570, 420, 1],
        [6, 420, 270, 1],
        [6, 570, 120, 1]
    ];
    var pickupsBg = "#6C6C6C";
    
    function drawPickups() {
        for(let i = 0; i < pickups.length; i++) {
            if(pickups[i][3] && areaIndex == pickups[i][0]) {
                ctx.fillStyle = pickupsBg;
                ctx.fillRect(pickups[i][1], pickups[i][2], 50, 50);
            }
        }
    }
    
    var pickupData = [
    //  total area(0)   correct area(1)    wrong area(2)
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    var correct = true;
    function checkForPickup() {
        for(let i = 0; i < pickups.length; i++) {
            if(x==pickups[i][1] && y==pickups[i][2] && pickups[i][3] && pickups[i][0]==areaIndex) {
                pickups[i][3]=0;
                pickupData[areaIndex-1][0]++;

                // INTREBAREA
                rollQuestion();

                if(correct) pickupData[areaIndex-1][1]++;
                    else pickupData[areaIndex-1][2]++;
            }
        }
    }
    
    function checkForAreaCompletion(areaIndex) {
        if(pickupData[areaIndex-1][0]==5) return true;
            else return false;
    }
    