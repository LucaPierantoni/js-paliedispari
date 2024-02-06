// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.

let randomNumber = 0;
let numUtente = 0;

function pariODispari(somma) {

    const risultato = somma % 2 === 0;
    return risultato;

}

function randomico(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function inserisciUnNumero() {

    numUtente = Number(prompt("Inserisci un numero da 1 a 5: "));

}

const prosegui = document.getElementById('prosegui');
const pariElement = document.getElementById('pari');
const dispariElement = document.getElementById('dispari');

prosegui.addEventListener('click', function() {
    
    inserisciUnNumero();
    const NumeroComputer = randomico(1, 5);
    document.body.innerHTML += `<p>il Computer ha "buttato" il numero: ${NumeroComputer}</p>`;
    
    const somma = numUtente + NumeroComputer;
    if (pariODispari(somma) && pariElement.checked) {
        document.body.innerHTML += "<p>Hai vinto!</p>";
    } else if (!pariODispari(somma) && dispariElement.checked) {
        document.body.innerHTML += "<p>Hai vinto!</p>";
    } else {
        document.body.innerHTML += "<p>Hai perso!</p>";
    }
});