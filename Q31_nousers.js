var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < usernames.length; i++) {
        var username = usernames[i];
        if (username === "admin") {
            console.log("Hello ".concat(username, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
