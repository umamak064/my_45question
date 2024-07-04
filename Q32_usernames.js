var current_Users = ["john", "sara", "haya", "MAHA", "admin"];
var new_Users = ["admin", "maha", "marilin", "sarah", "JOHN"];
for (var _i = 0, new_Users_1 = new_Users; _i < new_Users_1.length; _i++) {
    var newUser = new_Users_1[_i];
    var usernameAvailable = true;
    for (var _a = 0, current_Users_1 = current_Users; _a < current_Users_1.length; _a++) {
        var currentUser = current_Users_1[_a];
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            console.log("Sorry, ".concat(newUser, " is already taken. Please choose a new username."));
            usernameAvailable = false;
            break;
        }
    }
    if (usernameAvailable) {
        console.log("".concat(newUser, " is available!"));
    }
}
