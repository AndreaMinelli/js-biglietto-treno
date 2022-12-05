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

//Richiesta numero chilometri

const userKm = parseInt(prompt('Quanti chilometri vuoi percorrere?').trim());