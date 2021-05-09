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
    divResEch = document.getElementById("echRes");


function initialize() {
    for (let i = 0; i < taille; i = i + 1) {
        listeATrier[i] = Math.floor(Math.random() * valMax)
    }
    nbEch = 0
    nbComp = 0
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
        document.getElementById('id01').style.display='block'
    } else {
        divResEch.innerHTML += " La liste n'est pas encore triée."
    }
}

butOkComp.addEventListener("click", butOkCompCallback)
butOkEch.addEventListener("click", butOkEchCallback)
document.getElementById("OkFini").addEventListener("click",initialize)
initialize()