let car = 'subaru';
let price = 800000;
let carnames = ['honda', 'mercedes', 'toyota'];

// Tests for equality and inequality with strings
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

console.log("Is car == 'Subaru'? I predict False (case sensitivity)")
console.log(car == 'Subaru')

console.log("Is car != 'honda'? I predict True.")
console.log(car!= 'honda')

console.log("Is car != 'subaru'? I predict False.")
console.log(car != 'subaru')

// Tests using the lower case function
console.log("Is car.toLowerCase() == 'subaru'? I predict True.")
console.log(car.toLowerCase() == 'subaru')

console.log("Is car.toLowerCase() == 'SUBARU'? I predict False.")
console.log(car.toLowerCase() == 'SUBARU')

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is price == 25? I predict True.")
console.log(price== 800000)

console.log("Is price != 30000? I predict True.")
console.log(price != 30000)

console.log("Is price > 200000? I predict True.")
console.log(price > 200000)

console.log("Is price < 900000? I predict True.")
console.log(price< 900000)

console.log("Is price >= 800000? I predict True.")
console.log(price >= 800000)

console.log("Is price <= 900000? I predict True.")
console.log(price <= 900000)

// Tests using "and" and "or" operators
console.log("Is price > 200000 && price < 900000? I predict True.")
console.log(price > 200000 && price < 900000)

console.log("Is price > 20 || price > 30? I predict True.")
console.log(price > 200000 || price > 900000)

console.log("Is price > 30 || price < 20? I predict False.")
console.log(price > 900000 || price < 200000)

// Test whether an item is in an array
console.log("Is 'honda' in carnames? I predict True.")
console.log('honda' in carnames)

console.log("Is 'rolls royce' in names? I predict False.")
console.log('rollsroyce' in carnames)

// Test whether an item is not in an array
console.log("Is 'civic' not in carnames? I predict True.")
console.log(carnames.indexOf('civic') === -1)

console.log("Is 'merceded' not in carnames? I predict False.")
console.log(carnames.indexOf('mercedec') === -1)