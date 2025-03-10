"use strict";
//1. Parašykite TypeScript kodą, kuris deklaruoja kintamąjį name
// ir priskiria jam string reikšmę. Taip pat deklaruokite
// kintamąjį amžius ir priskirkite jam skaičių. Galiausiai atspausdinkite vardo ir amžiaus reikšmes.
const vardas = 'Artiom';
const metai = 33;
console.log('Vardas:', vardas);
console.log('Amzius:', metai);
// Parašykite TypeScript kodą, kuris deklaruoja konkretaus
// uomenų tipo masyvą. Parašykite įprastas masyvo operacijas,
// tokias kaip elementų pridėjimas ar pašalinimas iš masyvo, taip pat
// masyvo elementų pateikimas konsolėje
// Deklaruojame masyvą su skaičių tipu
let numbers = [9, 2, 3, 4, 9];
// Pridedame naują elementą į masyvo pabaigą
numbers.push(6);
console.log('Po pridejimo skaiciaus:', numbers);
// Pašaliname paskutinį elementą iš masyvo
let removedLast = numbers.pop();
console.log('Po paskutinio skaiciaus pasalinimo:', numbers, 'Pasalintas paskutinis skaicius:', removedLast);
