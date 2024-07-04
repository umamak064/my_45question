var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    var greatMagicians = __spreadArray([], magicians, true); // create a copy of the original array
    for (var i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] += " the Great";
    }
    return greatMagicians;
}
var magicians = ["James Randi", "Apollo Robbins", "Harry Houdini"];
console.log("Original Magicians:");
showMagicians(magicians);
var greatMagicians = makeGreat(magicians);
console.log("'the Great'magicians");
showMagicians(greatMagicians);
