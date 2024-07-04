//use exercise 13
let cars: string[] = ["Toyota", "Civic", "Rolls royce", "Mercedes"];

// Try to access an index that is out of bounds
console.log(cars[7]);

for (const car of cars) {
  console.log(`I love to drive ${car}.`);
}