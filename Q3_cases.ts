let personName: string = "John Doe";

console.log(`Lowercase: ${personName.toLowerCase()}`);
console.log(`Uppercase: ${personName.toUpperCase()}`);
console.log(`Titlecase: ${personName.charAt(0).toUpperCase()}${personName.slice(1).toLowerCase()}`);