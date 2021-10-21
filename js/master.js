// chiedere il numero di chilometri 
const chilometri = parseInt( prompt('Inserisci il numero di kilometri'));
console.log(chilometri);

// chiedere età
const etàUtente = parseInt( prompt('Inserisci la tua età'));
console.log(etàUtente);

// calcola il prezzo del biglietto che è definito in base ai km (0.21 € al km)
let prezzoBiglietto = chilometri * 0.21;
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
if ((etàUtente < 18) || (etàUtente >= 65)) {
    document.getElementById('prezzoFinale').innerHTML =  ('Il prezzo del biglietto è:' + prezzoScontato.toFixed(2) + '€' );
}
else{
    document.getElementById('prezzoFinale').innerHTML = ('Il prezzo del biglietto è:' + prezzoBiglietto.toFixed(2) + '€' );
}