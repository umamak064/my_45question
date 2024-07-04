//use exercise 13
var cars = ["Toyota", "Civic", "Rolls royce", "Mercedes"];
// Try to access an index that is out of bounds
console.log(cars[7]);
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    console.log("I love to drive ".concat(car, "."));
}
