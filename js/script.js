/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

/*
0 - Impostare prezzo fisso a chilometro
0a - Definire sconto per minorenni
0b - Definire sconto per over 65
1 - Richiedere numero chilometri
2 - Richiedere età del passeggero
3 - Calcolare prezzo a chilometro
4 - Definire se si applica sconto
5 - Applicare sconto se minorenne o over 65
6 - Visualizzare prezzo finale con centesimi
*/

//Prezzo fisso a chilometro
const kmPrice = 0.21;

//Sconti per minorenni e over 65
const underAgeDiscount = 0.2;
const overAgeDiscount = 0.4;

//Variabile di controllo
let valid = true;

//Richiesta numero chilometri

const userKm = parseInt(prompt('Quanti chilometri vuoi percorrere?').trim());

//Verifica inserimento chilometri validi

if (isNaN(userKm) | userKm === 0) {
    valid = false;
    alert('Prego inserire il numero di chilometri da percorrere');
}

//Richiesta età del passeggero

const userAge = parseInt(prompt('Quanti anni hai?').trim());

//Verifica inserimento età valida

if (isNaN(userAge) | userAge === 0) {
    valid = false;
    alert('Prego inserire l\'età corretta');
}

//Calcolare prezzo al chilometro

const routePrice = kmPrice * userKm;


//Definire se si applica sconto e applicarlo se minorenne o over 65

if (valid === true) {
    let finalPrice = routePrice.toFixed(2);

    if (userAge < 18) {
        const totalDiscount = routePrice * underAgeDiscount;
        finalPrice = (routePrice - totalDiscount).toFixed(2);
    } else if (userAge >= 65) {
        const totalDiscount = routePrice * overAgeDiscount;
        finalPrice = (routePrice - totalDiscount).toFixed(2);
    }

    console.log(finalPrice);
}

//BONUS

//Richiesta nome utente e stampa in pagina
const userName = prompt('Come ti chiami?');
document.getElementById('user-name').innerText = userName;

//Stampa km da percorrere
document.getElementById('user-km').innerText = `La tratta che vuoi percorrere è di: ${userKm} km. `


//Stampa prezzo al km
document.getElementById('km-price').innerText = `Il prezzo per la tratta è di ${kmPrice}€ al km.`

//Stampa prezzo biglietto
document.getElementById('route-price').innerText = `Il prezzo del biglietto è di ${routePrice}€`
