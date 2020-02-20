/*
    SCOPO DEL GIOCO: Fizz Buzz test:
    Scrivi un programma che stampi i numeri da 1 a 100.
    Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
    Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

// Creare un for per stampare i numeri da 1 a 100
// Controllare se il numero stampato è divisibile per 3
// Se si sostituirlo con Fizz
// Controllare se il numero stampato è divisibile per 5
// Se si sostituirlo con Buzz
// Controllare se il numero è divisibile sia per 3 che per 5
// Se si sostituirlo con FizzBuzz
var resto3;
var resto5;

for (var i = 1; i <= 100; i++) {
    resto3 = i % 3;
    resto5 = i % 5;
    if ((resto3 == 0) && (resto5 != 0)){
        console.log('Fizz');
    } else if ((resto3 != 0) && (resto5 == 0)) {
        console.log('Buzz');
    } else if ((resto3 == 0) && (resto5 == 0)) {
        console.log('FizzBuzz')
    } else {
        console.log(i);
    }
}
