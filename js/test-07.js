/**
 *
 * Praktinė užduotis 7sav.
 * Instruction:
 *   Įsikelkite užduotis į kodo editorių ir užsikomentuokite, kad būtų patogiau.
 *   Paskutinio commit'o prieš pateikiant darbą turi būti "7 week final task submit"
 *   Iki 11:05 atsiųsti Deimantei Barauskaite github nuorodą per Teams.
 *
 */

//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
printTaskDelimiter(1);
let a = (b = 3);
console.log(
  a >= ++b
    ? `didesnis arba lygūs skaičius a = ${a}`
    : `didesnis arba lygūs skaičius b = ${b}`
);

//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
printTaskDelimiter(2);
for (let index = 0; index <= 10; index++) {
  console.log(index + ", ");
}

//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
printTaskDelimiter(3);
for (let index = -1; index < 10; ++index) {
  console.log(++index);
}

//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
printTaskDelimiter(4);
for (i of range(1, 5)) {
  console.log(`atsitiktinis skaičius ${i} = ` + Math.floor(getRandom(i, 10)));
}

//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
printTaskDelimiter(5);
let ind = 1;
while (ind != 5) {
  ind = Math.floor(getRandom(i, 10));
  console.log(`spausdinam atsitiktinius skaičius.. ` + ind);
}

//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
printTaskDelimiter(6);
//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
printTaskDelimiter(7);
//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
printTaskDelimiter(8);
//9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
printTaskDelimiter(9);
//10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų)
printTaskDelimiter(10);

/** */
function printTaskDelimiter(n) {
  console.log(`\n--- užduotis num: ${n} (4 taškai) --- \n`);
}
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
