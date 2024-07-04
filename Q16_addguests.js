var guests = ["esra", "isha", "saba", "ilsa"];
// Custom append function that uses push
// Print invitation message to each guest
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", I would  like to invite you to dinner at my home this sunday!Hope you will come."));
}
// Print a statement saying that isha can't make the dinner 
console.log("isha can't make it to the dinner.");
// Replace isha with simra in the list
var index = guests.indexOf("isha");
if (index !== -1) {
    guests[index] = "simra";
}
// Print invitation messages again
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", I would  like to invite you to dinner at my home this sunday!Hope you will come."));
}
// Print a statement informing people that you found a bigger dinner table
console.log("I just found a bigger dinner table,now  I can invite more guests!");
// Add a new guest to the beginning of the array
guests.unshift("maha");
// Add a new guest at the middle of the array
guests.splice(3, 0, "asma");
// custom append method to add a new guest to the end of the array
function append(arr, element) {
    arr.push(element);
    return arr;
}
append(guests, "hina");
// Print a new set of invitation messages,
for (var _b = 0, guests_3 = guests; _b < guests_3.length; _b++) {
    var guest = guests_3[_b];
    console.log("Dear ".concat(guest, ", I would  like to invite you to dinner at my home this sunday!Hope you will come."));
}
