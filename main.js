var nbLine = 4;
var nbColumn = 4;
var positionPlayer = [0,0];

const labyrinth = document.getElementById("labyrinthe");

var line1 = [5,10,1,7];
var line2 = [5,14,5,5];
var line3 = [4,1,8,5];
var line4 = [14,9,12,9];
var tabGames = [line1,line2,line3,line4]

displayLabyrinth(tabGames);

function displayLabyrinth(tabGames) {
    labyrinth.innerHTML = " ";
    var content = "<table class='labyrintheTable'>";
    for(var i = 0; i < tabGames.length;i++) {
        content += "<tr>";
        for(var j = 0; j < tabGames[i].length;j++) {
            content += "<td>";
                content += "<img src='images/"+tabGames[i][j]+".png' />"
                if(i === nbLine -1 && j === nbColumn -1) {
                    var pandaLine = 25 + 100 * i;
                    var pandaColumn = 25 + 100 * j;
                    content += "<img src='images/panda.png' id='panda' style='left:"+pandaColumn+"px;top:"+pandaLine+"px;'/>";
                }
                if(i === positionPlayer[0] && j === positionPlayer[1]) {
                    var bearLine = 25 + 100 * positionPlayer[0];
                    var bearColumn = 25 + 100 * positionPlayer[1];
                    content += "<img src='images/bear.png' id='bear' style='left:"+bearColumn+"px;top:"+bearLine+"px;'/>";
                }
            content += "</td>";
        }
        content += "</tr>";
    }
    content += "</table>";
    labyrinth.innerHTML = content;
}

addEventListener("keyup", function(event) {
    var linePlayer = positionPlayer[0];
    var columnPlayer = positionPlayer[1];
    if(event.keyCode === 81 && columnPlayer > 0) { //déplacement vers la gauche
        columnPlayer--;
    }
    if(event.keyCode === 68 && columnPlayer < nbColumn - 1) { //déplacement vers la droite
        columnPlayer++;
    }
    if(event.keyCode === 83 && linePlayer < nbLine - 1) { //déplacement vers le bas
        linePlayer++;
    }
    if(event.keyCode === 90 && linePlayer > 0) { // déplacement vers le haut
        linePlayer--;
    }
    positionPlayer = [linePlayer,columnPlayer];
    displayLabyrinth(tabGames);
    this.console.log(event.keyCode);
}) 


