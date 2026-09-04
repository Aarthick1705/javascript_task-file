//  Task 1 — For Loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2 — Reverse Number

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


//  Task 3 — Even Numbers

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task 4 — Odd Numbers

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


//  Task 5 — Multiplication Table

let number = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


// Task 6 — Countdown,While Loop

let i_1 = 10;

while (i_1 >= 1) {
    console.log(i);
    i_1--;
}


// Task 7 — Sum of Numbers

let i1 = 1;
let sum = 0;

while (i1 <= 10) {
    sum = sum + i;
    i++;
}

console.log(sum);


// Task 8 — Print Numbers,Do While

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);


// Task 9 — Do While Understanding

let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);


// Task 10 — String Characters,For...of

let name = "javascript";

for (let letter of name) {
    console.log(letter);
}



// Task 11 — Array Values

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}



// Task 12 — Student Names

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

for (let student of students) {
    console.log("Student: " + student);
}


// Task 13 — Employee Object

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {
    console.log(key, employee[key]);
}


// Task 14 — Product Object

let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key, product[key]);
}


//  Functions
// Task 15 — Simple Function


function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();


// Task 16 — Function With Parameter

function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");
greet("Arun");
greet("Priya");


// Task 17 — Multiple Parameters

function student(name, age, department) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + department);
}

student("Arun", 21, "Computer Science");

student("Priya", 22, "Information Technology");

student("Kumar", 20, "Electronics");


//  Return
// Task 18 — Addition Function

function add(a, b) {
    return a + b;
}

let result_a = add(10, 20);

console.log(result_a);



// Task 19 — Salary

function salary(amount) {
    return amount;
}

let mySalary = salary(50000);

console.log(mySalary);


// Task 20 — Bonus Calculator

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let total = bonus(50000, 5000);

console.log(total);


 
// Task 21-Default Parameter

function employee(name, role = "Developer") {
    console.log("Name: " + name);
    console.log("Role: " + role);
}

employee("Arun");
employee("Priya", "Designer");


//  Function Types
// Task 22 — Named Function

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(6));


// Task 23 — Anonymous Function

let calculate = function(a, b) {
    return a + b;
};

let results = calculate(10, 20);

console.log(results);



// Task 24 — Arrow Function

let multiply = (a, b) => {
    return a * b;
};

let result_1 = multiply(5, 10);

console.log(result_1);



//  Scope
// Task 25 — Predict the Output

function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    console.log(b);
    console.log(c);
}

test();


//  Hoisting
// Task 26 — Predict

console.log(a1);

var a1 = 10;


// Task 27

console.log(b);

let b = 20;


// Task 28

console.log(c);

const c = 30;


// IIFE
// Task 29 — Self Invoking Function

(function() {
    console.log("Welcome to JavaScript");
})();


(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);



// Task 30, Callback / Higher-Order Function

function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);



// Task 31 — Cashback, Generator Function

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let result = cashback();

for (let value of result) {
    console.log(value);
}



// FINAL MINI PROJECT
// Task 32 — Employee Management Console




let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Kumar",
        age: 27,
        department: "IT",
        role: "Tester",
        salary: 45000
    }
];




console.log("EMPLOYEE DETAILS");

for (let employee of employees) {
    console.log(employee);
}




console.log("KEYS AND VALUES");

for (let employee of employees) {

    for (let key in employee) {
        console.log(key + ": " + employee[key]);
    }

    console.log(" ");
}



function displayEmployee(employee) {

    console.log("Name: " + employee.name);
    console.log("Age: " + employee.age);
    console.log("Department: " + employee.department);
    console.log("Role: " + employee.role);
    console.log("Salary: " + employee.salary);

}




console.log("DISPLAY EMPLOYEES");

for (let employee of employees) {
    displayEmployee(employee);
    console.log("");
}




function getSalary(employee) {
    return employee.salary;
}

let salary = getSalary(employees[0]);

console.log("Salary: " + salary);




console.log("SALARY CHECK");

for (let employee of employees) {

    if (employee.salary >= 40000) {
        console.log(employee.name + " has salary 40000 or above");
    } else {
        console.log(employee.name + " has salary below 40000");
    }

}



let yearlySalary = (salary) => {
    return salary * 12;
};

console.log("Yearly Salary: " + yearlySalary(40000));




function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();

console.log("EMPLOYEE BENEFITS");

for (let benefit of employeeBenefits) {
    console.log(benefit);
}