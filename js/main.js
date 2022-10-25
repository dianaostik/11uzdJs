//1 uzd

let Vardas = "Diana";
let Pavarde = "Ostik";
let Gimm = 1988;
let Metai = 2022;
console.log ('"Aš esu ' + Vardas + ' ' + Pavarde + '. Man yra ' + (Metai - Gimm) + ' metai."');

//2uzd

let numOne = Math.round(Math.random() *4);
let numTwo = Math.round(Math.random() *4);
let tOne = (numOne > numTwo);
let tTwo = (numTwo > numOne);
let rezTwo = (numTwo / numOne);

if (tOne){
    let rezOne = numOne / numTwo;
    console.log (Math.round(rezOne));
} else {  
        console.log (Math.round(rezTwo));
};
