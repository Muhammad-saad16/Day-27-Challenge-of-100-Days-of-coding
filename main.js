"use strict";
//      🚀 Day 27 Challenge: Start Coding! 🚀
Object.defineProperty(exports, "__esModule", { value: true });
// Question 79: 
// Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year.
// Then, show how you can access the model property of the car.
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(car.model); // ouput is Corolla
let cars = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
cars.color = "red";
cars.year = 2021;
console.log(cars); // output is { make: 'Toyota', model: 'Corolla', year: 2021, color: 'red' }
// Question 81: 
// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
function logProperties(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
logProperties(cars); // output is make: Toyota, model: Corolla, year: 2021, color: red
