//déclaration des variables ciblées
var inputText = document.getElementById("txt"),
    items = document.querySelectorAll("#list li"),
    tab = [],
    index;


function refreshArray() {

    //remise à zéro du tableau
    tab.length = 0;
    items = document.querySelectorAll("#list li");
    // remplissage du taleau
    for (var i = 0; i < items.length; i++) {
        tab.push(items[i].innerHTML);
    }

}

function ajouter() {

    //déclaration de la valeur à ajouter dans la liste
    var liste = document.getElementById("list"),
        contenu = document.createTextNode(inputText.value),
        li= document.createElement("LI");

    //ajout de la valeur dans la liste
    li.appendChild(contenu);
    liste.appendChild(li);

    //fonction refresh
    refreshArray();

}

function choix() {

    //recherche de gagnant aléatoire
    var randomWinner = Math.floor(Math.random() * (items.length));

    if (tab[randomWinner] == undefined) {
        //affichage erreur en alert
        alert("Aucun nom rentré");
    } else {
        //affichage du gagnant en alert
        alert("Le Gagnant est le numéro: " + (randomWinner + 1) + "  " +tab[randomWinner] );
    }

}
