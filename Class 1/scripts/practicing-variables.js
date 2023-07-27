// alert("xd")
console.error("Error")
console.warn("Waiting...")
console.log("Message")

//Creating let variables
let myName = "Irvin";
let myLastName = "Zavala";

let myAge = 21;
let myHeight = 1.82;

let isStudent = true;
let isProfessor = false;

// 1. Display value
console.log(myName);
console.log(myLastName);
console.log(myAge);
console.log(myHeight);
console.log(isStudent);
console.log(isProfessor);

// 2. Concatenate values
console.log("My full name is " + myName + " " + myLastName + ", I am " + myAge + " years old and my size is " + myHeight + ".");

// 3. Operations
let num1 = 10;
let num2 = 2;

let addition = num1 + num2;
console.log(addition);

let substrationn = num1 - num2;
console.log(substrationn);

let multiplication = num1 * num2;
console.log(multiplication);

let division = num1 / num2;
console.log(division);

// "challenge" (only let)
// let pi = 3.14159;
// let radius = 5;
// let circle_area = pi * radius * radius;
// // let circle_area = Math.PI * Math.pow(radius,2);
// console.log("Circle radius: " + radius + " | Area: " + circle_area);


// "challenge" (const and let)
const pi = 3.14159;
// let radius = prompt("Enter the radius: ");
let radius = 5;
let area = pi * radius * radius;
console.log(area);








document.write(`<p>${myName}</p>`);
document.write(`<p>${myLastName}</p>`);
document.write(`<p>${myAge}</p>`);
document.write(`<p>${myHeight}</p>`);
document.write(`<p>${isStudent}</p>`);
document.write(`<p>${isProfessor}</p>`);
document.write(`<p>My full name is ${myName} ${myLastName}, I am ${myAge} years old and my size is ${myHeight}.</p>`);
document.write(`<p>${addition}</p>`);
document.write(`<p>${substrationn}</p>`);
document.write(`<p>${multiplication}</p>`);
document.write(`<p>${division}</p>`);
document.write(`Circle radius: ${radius} | Area: " + ${area}`);
