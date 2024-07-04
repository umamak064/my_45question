function make_Shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and  "${message}" written on it .`);
  }
  // Make a large shirt with the default message
  make_Shirt();
  
  // Make a medium shirt with the default message
  make_Shirt("medium");
  
  // Make a small shirt with a custom message
  make_Shirt("small", "sunshine!");