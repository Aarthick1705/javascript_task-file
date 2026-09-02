// Task 1 — Variables

var name = "Aarthickraja A P";
let age_0 = 26;
const city_0 = "Palani";
const college = "ssmietCollege";

console.log(name);
console.log(age);
console.log(city);
console.log(college);



// Task 2 — Printing Statements

console.log("Hello JavaScript");

alert("Welcome to JavaScript");

let result_2 = confirm("Are you sure?");

console.log(result);

let userName = prompt("Enter your name:");

console.log(userName);

document.writeln("Hello from JavaScript");


// Task 3 — User Details

let name_a = prompt("Enter your name:");
let age_b = prompt("Enter your age:");
let city_c = prompt("Enter your city:");
let qualification = prompt("Enter your qualification:");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Qualification:", qualification);



// Task 4 — Find Data Types

let value1 = "JavaScript";
let value2 = 100;
let value3 = 99.5;
let value4 = true;
let value5 = false;
let value6;
let value7 = null;

console.log(value1, typeof value1);
console.log(value2, typeof value2);
console.log(value3, typeof value3);
console.log(value4, typeof value4);
console.log(value5, typeof value5);
console.log(value6, typeof value6);
console.log(value7, typeof value7);


// Task 5 — Student Array


let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log("First student:", students[0]);

console.log("Second student:", students[1]);

console.log("Last student:", students[students.length - 1]);

console.log("Total students:", students.length);


// Task 6 — Employee Object

let employee = {
    name: "Aarthickraja A P",
    age: 25,
    role: "Full Stack Developer",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    isWorking: true,
    qualification: ["BCA", "MCA"]
};

console.log("Name:", employee.name);

console.log("Age:", employee.age);

console.log("Role:", employee.role);

console.log("First Skill:", employee.skills[0]);

console.log("Last Qualification:",
    employee.qualification[employee.qualification.length - 1]
);

console.log("Working Status:", employee.isWorking);


// Task 7 — Calculator

let aa = 20;
let bb = 5;

console.log("Addition:", a + b);

console.log("Subtraction:", a - b);

console.log("Multiplication:", a * b);

console.log("Division:", a / b);

console.log("Modulus:", a % b);

console.log("Exponentiation:", a ** b);


// Task 8 — Shopping Bill

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let total_1 = shirt + pant + shoes + bag;

console.log("Total Price:", total_1);


// Task 9 — Increment & Decrement

// A
let a1 = 10;

let b1 = a++;

console.log(a1);
console.log(b1);

// //B

let c1 = 10;

let d1 = ++a;

console.log(c1);
console.log(d1);

// //C

let e1 = 10;

let f1 = a--;

console.log(e1);
console.log(f1);

// //D

let g1 = 10;

let h1= --a;

console.log(g1);
console.log(h1);


// Tasks 10 - Assignment Operator 

let num1 = 10;
num1 += 5;
console.log(num1);

let num2 = 10;
num2 -= 3;
console.log(num2); 

let num3= 10;
num3/= 4;
console.log(num3); 

let num4 = 10;
num4 %= 3;
console.log(num4);

let num5 = 10;
num5 **= 2;
console.log(num5); 


// Task 11 -Comparison Operator Tasks

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");


//  Task- 12  Logical Operator Tasks — AND

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// Task 13 — OR

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// Task 14 — NOT

console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));


//  Task 15 — Combination

console.log(5 == "5" && !(5 === 5) || 6 > 7);

console.log(10 > 5 && 8 < 12 || 4 === "4");

console.log(7 === 7 && 10 != "10" || 5 >= 5);

console.log(15 < 10 || 20 > 15 && 5 == "5");



// Task 16 - Ternary Operator — Voting

let age_1= 20;

let result_1 = age >= 18 ? "Eligible to vote" : "Not eligible";

console.log(result);


//  Task 17 — Password

let password = true;

let result = password  ? "Login successful"  : "Wrong password";

console.log(result);


// Task 18 — User Introduction , Concatenation & Template String

let name_1 = "Aarthickraja A P";
let age_4 = 26;
let city_1 = "Palani";

console.log(
    "My name is " + name +
    ". I am " + age +
    " years old. I live in " + city + "."
);


// Task 19 — String Conversion  ,Type Casting Tasks

let a = String(100);
let b = String(true);
let c = String(undefined);
let d = String(null);
let e = String([1, 2]);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);


// Task 20 — Number Conversion

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));


// Task 21 — Boolean Conversion

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));



// Task 22 — Voting Eligibility, Flow Control Tasks

let age2 = Number(prompt("Enter your age:"));

if (age2 >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}


// Task 23 — Positive or Negative

let number = Number(prompt("Enter a number:"));

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Task 24 — Grade System

let marks = Number(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80) {
    console.log("B Grade");
} else if (marks >= 70) {
    console.log("C Grade");
} else if (marks >= 60) {
    console.log("D Grade");
} else {
    console.log("Fail");
}


// Task 25 — Job Eligibility, Nested If Task

let age = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height:"));
let weight = Number(prompt("Enter your weight:"));

if (age >= 18) {

    if (height >= 160) {

        if (weight >= 60) {

            console.log("Congratulations! You are selected");

        } else {
            console.log("Weight should be 60 or above");
        }

    } else {
        console.log("Height should be 160 cm or above");
    }

} else {
    console.log("Age should be 18 or above");
}


// Task 26 — Traffic Light,Switch Tasks


let color = prompt("Enter traffic light color:");

switch (color) {

    case "red": console.log("Stop"); break;

    case "yellow":console.log("Ready");break;

    case "green": console.log("Go"); break;

    default:console.log("Invalid color");
}


// Task 27 — Day

let day = 1;

switch (day) {

    case 1: console.log("Monday"); break;

    case 2:console.log("Tuesday");break;

    case 3:console.log("Wednesday");  break;

    case 4: console.log("Thursday"); break;

    case 5: console.log("Friday"); break;

    case 6: console.log("Saturday"); break;

    case 7: console.log("Sunday"); break;

    default:
        console.log("Invalid day");
}


// FINAL MINI PROJECT
// Task 28 — Student Result System


let name = prompt("Enter your name:");
let age1 = Number(prompt("Enter your age:"));
let city = prompt("Enter your city:");



let tamil = Number(prompt("Enter Tamil marks:"));
let english = Number(prompt("Enter English marks:"));
let maths = Number(prompt("Enter Maths marks:"));


let total = tamil + english + maths;

let average = total / 3;



let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

let voting;

if (age >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}


console.log(`
Name: ${name}
Age: ${age}
City: ${city}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);