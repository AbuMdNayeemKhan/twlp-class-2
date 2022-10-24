let maincontent = document.querySelector(".maincontent"); // Select html class using js

let myFirstName = "Abu Md";
let myLastName = "Nayeem Khan";

maincontent.innerHTML=(myFirstName); // print result in html

let a = 10;
let b = 10;
let sum = a + b;
let pro = a * b;
let div = a / b;
maincontent.innerHTML=("Sum is: "+sum+" <br> Product Is: "+ pro);