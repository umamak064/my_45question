var users = ["admin", "erha", "marilin", "darla", "aina"];
for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if (user === "admin") {
        console.log("Hello ".concat(user, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in."));
    }
}
