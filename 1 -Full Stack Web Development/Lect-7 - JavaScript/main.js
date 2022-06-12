alert("Hi There");
console.log("HIII man!");
console.log("User: Maythem Kamal");
console.log("Time Stamp: " + new Date());
console.log("Month Number: " + (new Date().getMonth() + 1));   // The number of the months (0-11)
console.log("Day-in-Week Number: " + (new Date().getDay() + 1));        // The number of days (0 - 6)
console.log("Month Name: " + (new Date().toLocaleString('default', { month: 'long' })));        // The English Month-name in a long form
console.log("Month Name: " + (new Date().toLocaleString('default', { month: 'short' })));        // The English Month-name in a short form
console.log("Month Name: " + (new Date().toLocaleString('ar-iq', { month: 'long' })));        // The Arabic Month-name in a long form
console.log("Month Name: " + (new Date().toLocaleString('ar-iq', { month: 'short' })));        // The Arabic Month-name (Arabic does NoT have short)
console.log("Month Name: " + (new Date().toLocaleString('ar-sa', { weekday: 'long' })));        // The Arabic day-name in a long form
console.log("Month Name: " + (new Date().toLocaleString('en-us', { weekday: 'long' })));        // The English day-name in a long form
console.log("Month Name: " + (new Date().toLocaleString('en-us', { weekday: 'short' })));        // The English day-name in a short form
console.log("Month Name: " + (new Date().getFullYear()));        // The current year number
let X = 5;
let Y = 9;
console.log("X + Y =  " + (X + Y));


// in JS, Prompt will get string values.
let FN = prompt("Enter your First-Number: ");
let SN = prompt("Enter your Second-Number: ");
// Convert the prompt input into a numerical value
console.log("The Summation of FN and SN is: " + ((+FN) + (+SN)));

// Conditions: IF Statement
if (((+FN) + (+SN)) % 2) {
    console.log("ODD Value!");
}
else {
    console.log("Even Value!");

}

// Example: Discount
let cost = prompt("Enter the cost: ");
let Nationality = prompt("Are you Iraqi? (Y/N)");
if (Nationality === "Y" || Nationality === "y") {
    console.log("You have got special discount!");
    console.log("your total cost is: " + ((+cost) * 0.8));
}
else if (Nationality.match("N") || Nationality.match("n")) {
    console.log("Sorry, You have NOT get special discount!");
    console.log("your total cost is: " + ((+cost)));
}
else {
    console.log("Invalid Input");
}

// Conditions: Switch Statement
switch (Nationality) {
    case "Y":
    case "y":
        console.log("You have got special discount!");
        console.log("your total cost is: " + ((+cost) * 0.8));
        break;
    case "N":
    case "n":
        console.log("Sorry, You have NOT get special discount!");
        console.log("your total cost is: " + ((+cost)));
        break;
    default:
        console.log("Invalid Input");

}

// Switch Example-2
// Getting User Input
let V1 = prompt("Enter 1st value: ");
let V2 = prompt("Enter snd value: ");
let Op = prompt("Operation (+ - * or /)");

// Evaluating user input and process, then print results on the console.
switch (Op) {
    case "+":
        console.log("The Summation is: " + ((+V1) + (+V2)));
        break;
    case "-":
        console.log("The Suubtraction is: " + ((+V1) - (+V2)));
        break;
    case "*":
        console.log("The Multiplication is: " + ((+V1) * (+V2)));
        break;
    case "/":
        console.log("The Division is: " + ((+V1) / (+V2)));
        break;
    default:
        console.log("WRONG Input!");

}

// Matrix
let a = ["Ali", "Abd", "Mohammed", "Taif", "2", 2];

console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4] * 2); // It will automatically cast "2" into a numerical value
console.log(a[5] * 2);
console.log(typeof (a[4]));
console.log(typeof (a[5]));

// Loops
console.log("FOR LOOP");
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

console.log("FOREACH LOOP");
let i = 0;
a.forEach(function () {
    console.log(a[i++]);
});

// Functions
function Sum() {
    let x = 2, y = 3, z = x + y;
    console.log("The Summation is: " + z);
}

// Function Call
Sum();

// Function Example-2
function Multiply(J, K) {
    return J * K;
}

// Function call with hard coded values
console.log("The multiplication is: " + Multiply(3, 4));

// Function call with user input values
V1 = prompt("Enter 1st value: ");
V2 = prompt("Enter snd value: ");
console.log("The multiplication is: " + Multiply((+V1), (+V2)));

// Assignment
function Add(A, B) {
    return A + B;
}
function Subtract(A, B) {
    return A - B;
}
function Multiply(A, B) {
    return A * B;
}
function Divide(A, B) {
    return A / B;
}

function Print_Matrix(X) {
    console.log("Print_Matric via Function");
    for (let i = 0; i < X.length; i++) {
        console.log(X[i]);
    }
}

Print_Matrix(a);