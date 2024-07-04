let users = ["admin", "erha", "marilin", "darla", "aina"];

for (let i = 0; i < users.length; i++) {
  let user = users[i];
  if (user === "admin") {
    console.log(`Hello ${user}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${user}, thank you for logging in.`);
  }
}