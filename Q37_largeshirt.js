function make_Shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The shirt is a ".concat(size, " and it says \"").concat(message, "\"."));
}
// Make a large shirt with the default message
make_Shirt();
// Make a medium shirt with the default message
make_Shirt("medium");
// Make a small shirt with a custom message
make_Shirt("small", "Hello, World!");
