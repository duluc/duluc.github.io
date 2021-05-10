var listeATrier = [],
    nbEch = 0,
    nbComp = 0;
const taille = 5,
    valMax = 100
let butOkComp = document.getElementById("OkComp"),
    inputPremierIndexComp = document.getElementById("premierIndexComp"),
    inputSecondIndexComp = document.getElementById("secondIndexComp"),
    divResComp = document.getElementById("compRes"),
    butOkEch = document.getElementById("OkEch"),
    inputPremierIndexEch = document.getElementById("premierIndexEch"),
    inputSecondIndexEch = document.getElementById("secondIndexEch"),
    divResEch = document.getElementById("echRes"),
    butOkFini = document.getElementById("OkFini"),
    intro = document.getElementById("introduction");



function initialize() {
    for (let i = 0; i < taille; i = i + 1) {
        listeATrier[i] = Math.floor(Math.random() * valMax)
    }
    nbEch = 0
    nbComp = 0
    intro.innerHTML = "<p>L est un tableau de " + taille + " nombre entiers (les indices vont de 0 à " + (taille - 1) + " ). Le but de cette activité est de le trier en ordre croissant en faisant le moins de comparaisons et d'échanges possibles.</p>"

}

function estTrié(uneListe) {
    for (let i = 0; i < uneListe.length - 1; i = i + 1) {
        if (uneListe[i] > uneListe[i + 1]) {
            return false
        }
    }
    return true
}

function echange(uneListe, i, j) {
    let temp = uneListe[i];
    uneListe[i] = uneListe[j]
    uneListe[j] = temp
    nbEch++
}

function comparer(uneListe, i, j) {
    nbComp++
    return uneListe[i] <= uneListe[j]
}

function butOkCompCallback() {
    if (comparer(listeATrier, Number(inputPremierIndexComp.value), Number(inputSecondIndexComp.value))) {
        divResComp.innerHTML = " L[" + inputPremierIndexComp.value + "] <= L[" + inputSecondIndexComp.value + "]"
    }
    else {
        divResComp.innerHTML = " L[" + inputPremierIndexComp.value + "] > L[" + inputSecondIndexComp.value + "]"
    }
    divResComp.innerHTML += "<br>"
    divResComp.innerHTML += "Vous avez fait " + nbComp + " comparaisons."
}

function butOkEchCallback() {
    echange(listeATrier, Number(inputPremierIndexEch.value), Number(inputSecondIndexEch.value))
    divResEch.innerHTML = "Echange éffectué<br>Vous avez fait " + nbEch + " échanges."
    if (estTrié(listeATrier)) {
        document.getElementById("fini").innerHTML += "\n Bravo, vous avez trié la liste en " + nbEch + " échanges et " + nbComp + " comparaisons."
        document.getElementById('id01').style.display = 'block'
    } else {
        divResEch.innerHTML += " La liste n'est pas encore triée."
    }
}

function butOkFiniCallback() {
    initialize();
    document.getElementById('id01').style.display = 'None'
}

butOkComp.addEventListener("click", butOkCompCallback)
butOkEch.addEventListener("click", butOkEchCallback)
butOkFini.addEventListener("click", butOkFiniCallback)
initialize()