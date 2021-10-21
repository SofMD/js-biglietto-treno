// chiedere il numero di chilometri 
const chilometri = parseInt( prompt('Inserisci il numero di kilometri'));

// chiedere età
const etàUtente = parseInt( prompt('Inserisci la tua età'));

// calcola il prezzo del biglietto che è definito in base ai km (0.21 € al km)
let prezzoBiglietto = chilometri * 0.21;

// calcolo prezzo per minorenni (sconto 20%)
let prezzoScontato;

if (etàUtente < 18) {
    prezzoScontato = (prezzoBiglietto * 20) / 100;
}

// calcolo prezzo per gli over 65 (sconto 40%)
if (etàUtente >= 65) {
    prezzoScontato = (prezzoBiglietto * 40) / 100;
}

// prezzo Finale
if ((etàUtente < 18) || (etàUtente >= 65)) {
    document.getElementById('prezzoFinale').innerHTML =  ('Il prezzo del biglietto è:' + prezzoScontato.toFixed(2) + '€' );
}
else{
    document.getElementById('prezzoFinale').innerHTML = ('Il prezzo del biglietto è:' + prezzoBiglietto.toFixed(2) + '€' );
}