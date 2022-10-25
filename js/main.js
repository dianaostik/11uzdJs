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
console.log("x= " + numOne + " y= " + numTwo);
let tOne = (numOne > numTwo);
let tTwo = (numTwo > numOne);
let rezTwo = numTwo / numOne;

if (tOne) {
    let rezOne = numOne / numTwo;
    console.log("Rezultatas = " + (Math.round(rezOne * 100) / 100));
} 
if (tTwo) {
    console.log("Rezultatas = " + (Math.round(rezTwo * 100) / 100));
} 



//3 uzd

console.log("3 Uzduotis");
let aa = Math.round(Math.random() * 25);
let bb = Math.round(Math.random() * 25);
let cc = Math.round(Math.random() * 25);
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
let a = 1 + Math.round(Math.random() * 9);
let b = 1 + Math.round(Math.random() * 9);
let c = 1 + Math.round(Math.random() * 9);
console.log("a=" + a + " b=" + b + " c=" + c + " " );

if (((a+b)>c) && ((a+c)>b) && ((b+c)>a)){
    console.log ("Galima sudaryti trikampi.");
} else {
        console.log ("Negalima.");
}


//5uzd

console.log("5 Uzduotis");
let d = Math.round(Math.random() * 2);
let e = Math.round(Math.random() * 2);
let f = Math.round(Math.random() * 2);
let g = Math.round(Math.random() * 2);
console.log("d=" + d + " e=" + e + " f=" + f + " g=" + g);
let count0=0;
let count1=0;
let count2=0;

if ( d===0 ){count0++;}
if ( e===0 ){count0++;}
if ( f===0 ){count0++;}
if ( g===0 ){count0++;}

console.log("Nuliu = " + count0);

if ( d===1 ){count1++;}
if ( e===1 ){count1++;}
if ( f===1 ){count1++;}
if ( g===1 ){count1++;}

console.log("Vienetu = " + count1);

if ( d===2 ){count2++;}
if ( e===2 ){count2++;}
if ( f===2 ){count2++;}
if ( g===2 ){count2++;}

console.log("Dvejetu = " + count2);

//6uzd

console.log("6 Uzduotis");
let first =  (-10) + Math.round(Math.random() * 20);
let second = (-10) + Math.round(Math.random() * 20);
let third = (-10) + Math.round(Math.random() * 20);
// console.log("a=" + first + " b=" + second + " c=" + third + " " );

if ((first>0) || (first===0)){
    console.log("a = {" + first + "}");
} else {
    console.log("a = [" + first + "]");    
}

if ((second>0) || (second===0)){
    console.log("a = {" + second + "}");
} else {
    console.log("a = [" + second + "]");    
}

if ((third>0) || (third===0)){
    console.log("a = {" + third + "}");
} else {
    console.log("a = [" + third + "]");    
}

//7uzd

console.log("7 Uzduotis");
