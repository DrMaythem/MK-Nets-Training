let Son = {
    name: "Abdul Rahman",
    age: 24,
    say: function () {
        return "Hello";
    },
    Father: {
        name: "Mohammed",
        age: 50,
        say: function () {
            return "Hi, I am the father";
        },
        GrandFather: {
            name: "Radhi",
            age: 80,
            say: function () {
                return "Ola... I am the Grandfather!";
            }
        }
    }
}

console.log("Son's Name: " + Son.name);
console.log("Son's Age: " + Son.age);
console.log("Son Says: " + Son.say());
console.log("");
console.log("Father's Name: " + Son.Father.name);
console.log("Father's Age: " + Son.Father.age);
console.log("Father Says: " + Son.Father.say());
console.log("");
console.log("Grandfather's Name: " + Son.Father.GrandFather.name);
console.log("Grandfather's Age: " + Son.Father.GrandFather.age);
console.log("Grandfather Says: " + Son.Father.GrandFather.say());

// Creating a class-like
function Phone(model, color, prise) {
    // what ever values you put here, are considered part of the CONSTRUCTOR
    this.model = model;
    this.color = color;
    this.prise = prise;
    this.functions = {
        // Customised functions of the class
        PrintAll: function (Ph) {
            console.log("Your Phone specifications are:");
            console.log("Phone Model:" + Ph.model);
            console.log("Phone Color:" + Ph.color);
            console.log("Phone Prise:" + Ph.prise);
        },
        // Setter functions
        SetColor: function (Ph, color) {
            Ph.color = color;
        },
        SetModel: function (Ph, model) {
            Ph.model = model;
        },
        SetPrice: function (Ph, price) {
            Ph.price = price;
        },
        // Getter functions
        getColor: function (Ph) {
            return Ph.color;
        },
        getModel: function (Ph) {
            return Ph.model;
        },
        getPrice: function (Ph) {
            return Ph.price;
        }
    }
}

let Phone1 = new Phone("S11", "Black", 1100);
let Phone2 = new Phone("G5", "Blue", 3350);

console.log("Phone1 Color:" + Phone1.color);
console.log("Phone2 Model:" + Phone2.model);
Phone1.functions.PrintAll(Phone1);
Phone1.functions.PrintAll(Phone2);

Phone1.functions.SetColor(Phone1, "Yellow");
console.log("Phone1 Color:" + Phone1.color);
