"use strict";
function add(a, b) {
    return a + b;
}
console.log(add(2, 1));
console.log(add(2, 1));
// Paprasti tipai(Basic types)
const firstName = 'Artiom';
const surname = 'Bazeliuk';
const age = 33;
const hobiai = ['sportas', 'keliones', 'programavimas'];
const isStudent = true;
// any - leidzia viska, taciau nereiketu naudoti
const pazymiai = [7, 8, 8, 10];
pazymiai.push(10);
// Union types (sujungti tipai)
let id;
id = 123;
id = '123';
function printId(id) {
    if (typeof id === 'string')
        console.log('Tavo id ilgis yrs', id.length);
    else if (typeof id === 'number') {
        console.log('tavo id yra', id);
    }
}
printId('123');
printId(123);
const person = {
    name: 'Artiom',
    surname: 'Bazeliuk',
    age: 33,
    email: 'artiombazeliuk@gmail.com',
    hobbies: ['sport', 'kelione', 'programavimas'],
};
console.log(person.name);
console.log(person.email);
function showInfo(person) {
    if (person.role === 'darbuotojas') {
        console.log('Darbuotojas', person.vardas, person.alyginimas, person.role);
    }
    else {
        console.log('Vadovas', person.skyrius);
    }
}
let vadovas = {
    role: 'vadovas',
    vardas: 'Jonas',
    skyrius: 'IT',
};
let dabotuojas = {
    role: 'darbuotojas',
    vardas: 'Petras',
    alyginimas: 1000,
};
// Tuples -masyvas su fiksuotu kiekiu elementu ir isdestimu
let asmuo = [
    'Artiom',
    'Bazeliuk',
    33,
    'Sportas',
];
console.log(asmuo[3].length);
