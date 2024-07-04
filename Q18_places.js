var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["kashmir", "istanbul", "switzerland", "hunzah", "islamabad"];
// Print the array in its original order
console.log("Original order:");
console.log(places);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:");
console.log(__spreadArray([], places, true).sort());
// Show that the array is still in its original order by printing it
console.log("Original order (again):");
console.log(places);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:");
console.log(__spreadArray([], places, true).sort().reverse());
// Show that the array is still in its original order by printing it again
console.log("Original order (again):");
console.log(places);
// Reverse the order of the list
places.reverse();
console.log("Reversed order:");
console.log(places);
// Reverse the order of the list again
places.reverse();
console.log("Original order (again):");
console.log(places);
// Sort the array so it's stored in alphabetical order
places.sort();
console.log("Alphabetical order (sorted):");
console.log(places);
// Sort to change the array so it's stored in reverse alphabetical order
places.sort().reverse();
console.log("Reverse alphabetical order (sorted):");
console.log(places);
