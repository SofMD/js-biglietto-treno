/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)
*/

// chiedere il numero di chilometri 
const kilometri = parseInt( prompt('Inserisci il numero di kilometri'));
console.log(kilometri);

// chiedere età
const etàUtente = parseInt( prompt('Inserisci la tua età'));
console.log(etàUtente);

// calcola il prezzo del biglietto che è definito in base ai km (0.21 € al km)
let prezzoBiglietto = kilometri* 0.21;
console.log(prezzoBiglietto);

// calcolo prezzo per minorenni (sconto 20%)
let prezzoScontato;

if (etàUtente < 18) {
    prezzoScontato = (prezzoBiglietto * 20) / 100;
    console.log(prezzoScontato);
}

// calcolo prezzo per gli over 65 (sconto 40%)
if (etàUtente >= 65) {
    prezzoScontato = (prezzoBiglietto * 40) / 100;
    console.log(prezzoScontato);
}

// prezzo Finale
document.getElementById('prezzoFinale').innerHTML = prezzoScontato.toFixed(2);