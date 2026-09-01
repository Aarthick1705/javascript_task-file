// Task 1 — var, let, const

var studentName = "Aarthickraja A P";
let studentAge = 26;
const collegeName = "SSMIET College";

console.log(studentName);
console.log(studentAge);
console.log(collegeName);


studentName = "Ajay";
console.log(studentName);


studentAge = 28;
console.log(studentAge);



var studentName = "Raja";
console.log(studentName);




//  Task 2 — User Information

let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);


//  Task 3 — Welcome Message

let name = prompt("Enter your name:");

alert("Welcome " + name + "!");



//  Task 4 — Age Calculator

let birthYear = prompt("Enter your birth year:");

let currentYear = 2026;

let age = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", age);



// Task 5 — Identify Data Types

let a = "Hello";
let b = 100;
let c = 25.5;
let d = true;
let e = false;
let f;
let g = null;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);



// Task 6 — Student Data

let student = {
    name: "Aarthickraja A P",
    age: 26,
    city: "Palani",
    qualification: "B.E-CSE",
    isStudent: true
};

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);



// Task 7 — Fruit Array

let fruits = ["Apple","Mango","Orange", "Banana","Grapes","Papaya"];

console.log("First fruit:", fruits[0]);

console.log("Second fruit:", fruits[1]);

console.log("Last fruit:", fruits[fruits.length - 1]);

console.log("Total fruits:", fruits.length);


// Task 8 — Basic Calculator

let a = 20;
let b = 5;

console.log("Addition:", a + b);

console.log("Subtraction:", a - b);

console.log("Multiplication:", a * b);

console.log("Division:", a / b);

console.log("Modulus:", a % b);

console.log("Exponentiation:", a ** b);


// Task 9 — Shopping Bill

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let total = shirt + pant + shoes;

console.log("Total:", total);


// Task 10 — Simple Marks Calculation


let tamil = 80;
let english = 75;
let maths = 90;

let total = tamil + english + maths;

let average = total / 3;

console.log("Total Marks:", total);
console.log("Average Marks:", average);



// Task 11 — Post Increment

let a = 10;

let b = a++;

console.log(a);
console.log(b);


// Task 12 — Pre Increment

let a = 10;

let b = ++a;

console.log(a);
console.log(b);


// Task 13 — Post Decrement

let a = 20;

let b = a--;

console.log(a);
console.log(b);


// Task 14 — Pre Decrement


let a = 20;

let b = --a;

console.log(a);
console.log(b);

// Task 15 — Find the Final Values

let a = 5;

let b = a++;

let c = ++a;

let d = b--;

console.log(a);
console.log(b);
console.log(c);
console.log(d);




// Task 16 — Assignment Operators


let num = 10;

num += 5;

console.log(num);

let num1 = 10;

num -= 5;

console.log(num1);

let num2 = 10;

num *= 5;

console.log(num2);

let num3 = 10;

num /= 5;

console.log(num3);



let num4 = 10;

num %= 3;

console.log(num4);


let num5 = 10;

num **= 2;

console.log(num5);



// Task 17 — Mini Student Profile


let name = "Aarthickraja A P";
let age = 26;
let city = "Palani";
let college = "SSMIET College";

let subjects = [
    "Tamil",
    "English",
    "Maths",
    "Science",
    "Computer"
];

let student = {
    name: name,
    age: age,
    city: city,
    subjects: subjects,
    isStudent: true
};

console.log("Student Name:", name);
console.log("Student Age:", age);
console.log("City:", city);

console.log("First Subject:", subjects[0]);

console.log("Last Subject:", subjects[subjects.length - 1]);

console.log("Total Subjects:", subjects.length);

console.log("Complete Object:", student);



//  Final Challenge — User + Calculator


let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Power:", num1 ** num2);