//1 uzd

console.log("1 Uzduotis")
let Vardas = "Diana";
let Pavarde = "Ostik";
let Gimm = 1988;
let Metai = 2022;
console.log('"Aš esu ' + Vardas + ' ' + Pavarde + '. Man yra ' + (Metai - Gimm) + ' metai."');

//2 uzd

console.log("2 Uzduotis")
let numOne = Math.round(Math.random() * 5);
let numTwo = Math.round(Math.random() * 5);
let tOne = (numOne > numTwo);
let tTwo = (numTwo > numOne);
let rezTwo = (numTwo / numOne);

if (tOne) {
    let rezOne = numOne / numTwo;
    console.log("Rezultatas = " + (Math.round(rezOne * 100) / 100));
} else {
    console.log("Rezultatas = " + (Math.round(rezTwo * 100) / 100));
};


//3 uzd

console.log("3 Uzduotis");
let aa = Math.round(Math.random() * 26);
let bb = Math.round(Math.random() * 26);
let cc = Math.round(Math.random() * 26);
console.log(aa + " " + bb + " " + cc + " " );

if (aa===bb || bb===cc || cc===aa) {
    console.log("Vienodos reiksmes");
}

if ( (aa < bb && bb < cc) || (aa > bb && bb > cc)  ) {
    console.log("Reiksme = " + bb);
} 

if ((bb < cc && cc < aa) || (bb > cc && cc > aa)) {
    console.log("Reiksme = " + cc);
} 

if((cc < aa && aa < bb) || (cc > aa && aa > bb)){
    console.log("Reiksme = " + aa);
}

//4uzd

console.log("4 Uzduotis");
let a = Math.round(Math.random() * 3);
let b = Math.round(Math.random() * 3);
let c = Math.round(Math.random() * 3);
console.log("a=" + a + " b=" + b + " c=" + c + " " );

if (((a+b)>c) && ((a+c)>b) && ((b+c)>a)){
    console.log ("Galima sudaryti trikampi.");
} else {
        console.log ("Negalima.");
}


//5uzd

console.log("5 Uzduotis");
