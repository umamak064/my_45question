var age = 39;
// Check if the person is less than 2 years old
if (age < 2) {
    console.log("The person is a baby.");
}
// Check if the person is at least 2 years old but less than 4
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
// Check if the person is at least 4 years old but less than 13
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
// Check if the person is at least 13 years old but less than 20
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
// Check if the person is at least 20 years old but less than 65
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
// If the person is 65 years old or older
else {
    console.log("The person is an elder.");
}
