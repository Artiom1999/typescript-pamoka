function add(a: number, b: number) {
  return a + b;
}

console.log(add(2, 1));
console.log(add(2, 1));

// Paprasti tipai(Basic types)
const firstName: string = 'Artiom';
const surname: string = 'Bazeliuk';
const age: number = 33;
const hobiai: string[] = ['sportas', 'keliones', 'programavimas'];
const isStudent: boolean = true;
// any - leidzia viska, taciau nereiketu naudoti
const pazymiai: any[] = [7, 8, 8, 10];

pazymiai.push(10);

// Union types (sujungti tipai)
let id: string | number;

id = 123;
id = '123';

function printId(id: string | number) {
  if (typeof id === 'string') console.log('Tavo id ilgis yrs', id.length);
  else if (typeof id === 'number') {
    console.log('tavo id yra', id);
  }
}

printId('123');
printId(123);

// Objektai (Object types)
interface Person {
  name: string;
  surname: string;
  age: number;
  email: string;

  // ? - opttional,nebutina turet
  hobbies?: string[];
}

const person: Person = {
  name: 'Artiom',
  surname: 'Bazeliuk',
  age: 33,
  email: 'artiombazeliuk@gmail.com',
  hobbies: ['sport', 'kelione', 'programavimas'],
};

console.log(person.name);
console.log(person.email);

interface Darbuotojas {
  role: 'darbuotojas';
  vardas: string;
  alyginimas: number;
}

interface Vadovas {
  role: 'vadovas';
  vardas: string;
  skyrius: 'IT' | 'Finansai' | 'Marketingas' | 'Pardavimai';
}

function showInfo(person: Vadovas | Darbuotojas) {
  if (person.role === 'darbuotojas') {
    console.log('Darbuotojas', person.vardas, person.alyginimas, person.role);
  } else {
    console.log('Vadovas', person.skyrius);
  }
}

let vadovas: Vadovas = {
  role: 'vadovas',
  vardas: 'Jonas',
  skyrius: 'IT',
};

let dabotuojas: Darbuotojas = {
  role: 'darbuotojas',
  vardas: 'Petras',
  alyginimas: 1000,
};

// Tuples -masyvas su fiksuotu kiekiu elementu ir isdestimu

let asmuo: [string, string, number, string] = [
  'Artiom',
  'Bazeliuk',
  33,
  'Sportas',
];

console.log(asmuo[3].length);
