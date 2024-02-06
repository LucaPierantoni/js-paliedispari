// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma
// (ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro,
// farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false in base all'esito)

//creo una funzione per capire se la parola è palindroma
function palindroma(parola) {

    //indico una variabile che mi calcola la lunghezza della parola
    let lunghezzaParola = parola.length;

    //inizializzo il ciclo for per dividere a metà la parola
    for (let i = 0; i < Math.floor(lunghezzaParola / 2); i++) {

        //controllo se i caratteri opposti NON corrispondano
        if (parola[i] !== parola[lunghezzaParola - 1 - i]) {

            return false;
            //se i caratteri non corrispondono la parola non è palindroma

        }

    }

    //se tutti i caratteri corrispondono la parola è palindroma
    return true;

}

//creo un'altra funzione per verificare e visualizzare il risultato ottenuto
function verifica() {

    //inserisco una costante per ottenere l'input dell'utente
    const inputParola = document.getElementById('parolaInput').value;

    //ora verifico che la parola sia palindroma attraverso la funzione palindroma
    if (palindroma(inputParola)) {

        //se la parola è palindroma visualizza il messaggio
        document.getElementById('risultato').innerText = `La parola "${inputParola}" è palindroma.`;

    } else {

        //se la parola non è palindroma visualizza il messaggio
        document.getElementById('risultato').innerText = `La parola "${inputParola}" non è palindroma.`;

    }
    
}