//      🚀 Day 27 Challenge: Start Coding! 🚀


// Question 79: 
// Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year.
// Then, show how you can access the model property of the car.

let car = {
    make : "Toyota",
    model : "Corolla",
    year : 2020
};

console.log(car.model); // ouput is Corolla



// Question 80: 
// Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. 
// Show how to perform these operations.

// Starting with our car object
type Cars = {
    make: string,
    model: string,
    year: number,
    color?: string;
}      //type alises


let cars: Cars = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

cars.color = "red";
cars.year = 2021;
console.log(cars); // output is { make: 'Toyota', model: 'Corolla', year: 2021, color: 'red' }


// Question 81: 
// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.


let myCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
function logProperties(obj: object) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

logProperties(myCar); // output is make: Toyota, model: Corolla, year: 2020


