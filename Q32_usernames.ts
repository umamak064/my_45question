let current_Users: string[] = ["john", "sara", "haya", "MAHA", "admin"];
let new_Users: string[] = ["admin", "maha", "marilin", "JOHN", "sarah"];

for (let newUser of new_Users) {
  let usernameAvailable = true;
  for (let currentUser of current_Users) {
    if (newUser.toLowerCase() === currentUser.toLowerCase()) {
      console.log(`Sorry, ${newUser} is already taken. Please choose a new username.`);
      usernameAvailable = false;
      break;
    }
  }
  if (usernameAvailable) {
    console.log(`${newUser} is available!`);
  }
}