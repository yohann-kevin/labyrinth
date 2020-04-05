var nbLine = 4;
var nbColumn = 4;

var positionPlayer = [0,0];

const labyrinth = document.querySelector("#labyrinthe");

var line1 = [createBox(5),createBox(10),createBox(1),createBox(7)];
var line2 = [createBox(5),createBox(14),createBox(5),createBox(5)];
var line3 = [createBox(4),createBox(1),createBox(8),createBox(5)];
var line4 = [createBox(14),createBox(9),createBox(12),createBox(9)];
var tabGames = [line1,line2,line3,line4];

displayLabyrinth(tabGames);

function createBox(image){
    var box = {
        image : image,
        left : getLeft(image),
        top : getTop(image),
        right : getRight(image),
        bot : getBot(image)
    }
    return box;
}

function getLeft(image){
    if(image === 0 || image === 1 || image === 2 || image === 3 || image === 6 || image === 7 || image === 8 || image === 12) return true;
    return false;
}
function getTop(image){
    if(image === 0 || image === 2 || image === 3 || image === 4 || image === 5 || image === 8 || image === 9 || image === 14) return true;
    return false;
}
function getRight(image){
    if(image === 0 || image === 1 || image === 3 || image === 4 || image === 6 || image === 9 || image === 10 || image === 13) return true;
    return false;
}
function getBot(image){
    if(image === 0 || image === 1 || image === 2 || image === 4 || image === 5 || image === 7 || image === 10 || image === 11) return true;
    return false;
}

function displayLabyrinth(tabGames){
    labyrinth.innerHTML = "";
    var content ="<table>";
    for (var i = 0 ; i < tabGames.length;i++){
        content += "<tr>";
        for (var j = 0 ; j < tabGames[i].length;j++){
            content += "<td>";
                content += "<img src='images/"+tabGames[i][j].image+".png' />";
                if(i === nbLine -1 && j === nbColumn -1){
                    var pandaLine = 25 + 100 * i;
                    var pandaColumn = 25 + 100 * j;
                    content += "<img src='images/panda.png' style='width:50px;height:50px;position:absolute;left:"+pandaColumn+"px;top:"+pandaLine+"px'/>";
                }
                if(i === positionPlayer[0] && j === positionPlayer[1]){
                    var bearLine = 25 + 100 * positionPlayer[0];
                    var bearColumn = 25 + 100 * positionPlayer[1];
                    content += "<img src='images/bear.png' style='width:50px;height:50px;position:absolute;left:"+bearColumn+"px;top:"+bearLine+"px'/>";
                }
            content += "</td>";
        }
        content += "</tr>";
    }
    content +="</table>";
    labyrinth.innerHTML = content;
}

function getBox(i,j){
    return tabGames[i][j];
}

addEventListener("keyup",function(event){
    var linePlayer = positionPlayer[0];
    var columnPlayer = positionPlayer[1];
    if(event.keyCode === 81 && columnPlayer>0){//déplacement vers la gauche
        if(getBox(positionPlayer[0],positionPlayer[1]).left){
            columnPlayer--;
        }
    }
    if(event.keyCode === 90 && linePlayer > 0){ // déplacement vers le haut
        if(getBox(positionPlayer[0],positionPlayer[1]).top){
            linePlayer--;
        }
    }
    if(event.keyCode === 68 && columnPlayer < nbColumn - 1){ //déplacement vers la droite
        if(getBox(positionPlayer[0],positionPlayer[1]).right){
            columnPlayer++;
        }
    }
    if(event.keyCode === 83 && linePlayer < nbLine - 1){ //déplacement vers le bas
        if(getBox(positionPlayer[0],positionPlayer[1]).bot){
            linePlayer++;
        }
    }
    positionPlayer = [linePlayer,columnPlayer];
    displayLabyrinth(tabGames);
    verifyWin();
});

function verifyWin(){
    if(positionPlayer[0] === nbLine-1 && positionPlayer[1] === nbColumn-1){
        alert("Win");
    }
}
