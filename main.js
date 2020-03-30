var nbLine = 4;
var nbColumn = 4;

const labyrinthe = document.getElementById("labyrinthe");

var line1 = [5,10,1,7];
var line2 = [5,14,5,5];
var line3 = [4,1,8,5];
var line4 = [14,9,12,9];
var tabGames = [line1,line2,line3,line4]

displayLabyrinthe(tabGames);

function displayLabyrinthe(tabGames) {
    labyrinthe.innerHTML = " ";
    var content = "<table class='labyrintheTable'>";
    for(var i = 0; i < tabGames.length;i++) {
        content += "<tr>";
        for(var j = 0; j < tabGames[i].length;j++) {
            content += "<td>";
                content += "<img src='images/"+tabGames[i][j]+".png' />"
            content += "</td>";
        }
        content += "</tr>";
    }
    content += "</table>";
    labyrinthe.innerHTML = content;
}

// var nbLigne = 4;
// var nbColonne = 4;

// const monJeu = document.querySelector("#labyrinthe");

// var ligne1 = [5,10,1,7];
// var ligne2 = [5,14,5,5];
// var ligne3 = [4,1,8,5];
// var ligne4 = [14,9,12,9];
// var tabJeu = [ligne1,ligne2,ligne3,ligne4];

// afficherLabyrinthe(tabJeu);

// function afficherLabyrinthe(tabJeu){
//     monJeu.innerHTML = "";
//     var content ="<table>";
//     for (var i = 0 ; i < tabJeu.length;i++){
//         content += "<tr>";
//         for (var j = 0 ; j < tabJeu[i].length;j++){
//             content += "<td>";
//                 content += "<img src='images/"+tabJeu[i][j]+".png' />";
//             content += "</td>";
//         }
//         content += "</tr>";
//     }
//     content +="</table>";
//     monJeu.innerHTML = content;
// }