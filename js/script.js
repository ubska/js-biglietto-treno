/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/


// CHIEDERE IL NUMERO DI CHILOMETRI CHE SI VUOLE PERCORRERE
let chilometri = parseInt(prompt("Quanti km vuole percorrere?"));
console.log(chilometri);


// CHIEDERE L'ETà
let userAge = parseInt(prompt("Quanti anni ha?"));
console.log(userAge);

//PREZZO AL KM (0.21 € KM) * MOLTIPLICARE AI KM DA PERCORRERE = (PREZZO DEL BIGLIETTO SENZA SCONTO)
let prezzo = chilometri * 0.21;
console.log(prezzo + "€"); 

//APPLICARE LO SCONTO IN BASE ALL'ETà
  //se l'età è minore di 18 allora applica sconto del 20%
  //se l'età è maggiore di 65 allora applica sconto del 40%
  //se no rimane prezzo senza sconto

if (userAge < 18) {
    document.getElementById("mio_id").innerHTML = ((prezzo / 100) * 80);
}else if (userAge > 65) {
    document.getElementById("mio_id").innerHTML = ((prezzo / 100) * 60);
}else{
    document.getElementById("mio_id").innerHTML = prezzo;
}

  