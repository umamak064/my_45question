//used exercise 15 program

let guests: string[] = ["esra", "isha", "saba", "ilsa"];

// Print invitation message to each guest
for (const guest of guests) {
  console.log(`Dear ${guest}, I would  like to invite you to dinner at my home this sunday!Hope you will come.`);
}

// Print a statement saying that isha can't make the dinner 
console.log("isha can't make it to the dinner.");

// Replace isha with simra in the list
let index = guests.indexOf("isha");
if (index!== -1) {
  guests[index] = "simra";
}

// Print a message indicating the number of people you are inviting to dinner
console.log(`I am inviting ${guests.length} people to dinner.`);

// Print invitation messages again
for (const guest of guests) {
  console.log(`Dear ${guest}, I would  like to invite you to dinner at my home this sunday!Hope you will come.`);
}