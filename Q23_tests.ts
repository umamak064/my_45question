let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

console.log("Is car.length > 5? I predict True.")
console.log(car.length > 5)

console.log("Is car === 'subaru'? I predict True.")
console.log(car === 'subaru')

console.log("Is car === 'Subaru'? I predict False (case sensitivity)")
console.log(car === 'Subaru')

console.log("Is car != 'honda'? I predict True.")
console.log(car != 'honda')

console.log("Is car != 'mercedes'? I predict True.")
console.log(car != 'mercedes')

console.log("Is car == 'toyota'? I predict False.")
console.log(car == 'toyota')

console.log("Is car != 'subaru'? I predict False.")
console.log(car != 'subaru')

console.log("Is car > 'subaru'? I predict False (strings can't be compared with >)")
console.log(car > 'subaru')

console.log("Is car < 'subaru'? I predict False (strings can't be compared with <)")
console.log(car < 'subaru')