var guests = ["esra", "isha", "saba", "ilsa"];
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
