/*
    SCOPO DEL GIOCO: Fizz Buzz test:
    Scrivi un programma che stampi i numeri da 1 a 100.
    Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
    Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

// Creare un array vuoto
// Creare un for per pushare i numeri da 1 a 100
// Controllare se il numero è divisibile sia per 3 che per 5
// Se si sostituirlo con FizzBuzz
// Controllare se il numero è divisibile per 3
// Se si sostituirlo con Fizz
// Controllare se il numero è divisibile per 5
// Se si sostituirlo con Buzz
// Creare un ciclo per stampare tutti i valori ottenuti

var array = []; //Definisco un array vuoto
// Creo un ciclo che da 1 a 100 mi pushi nell'array il valore corretto
// Considerando la regola del gioco FizzBuzz
for (var i = 1; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');
        array.push('FizzBuzz');
    } else if (i % 3 == 0) {
        console.log('Fizz');
        array.push('Fizz');
    } else if (i % 5 == 0) {
        console.log('Buzz');
        array.push('Buzz');
    } else {
        console.log(i);
        array.push(i);
    }
}
// Per ogni valore generato in precedenza nell'array credo un div figlio del div #output
// con all'interno il valore corrispondente dell'elemento dell'array
for (var x = 0; x < array.length; x ++) {
    document.getElementById('output').innerHTML += "<div>" + array[x] + "</div>";
}
