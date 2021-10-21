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
console.log(etàUtente)