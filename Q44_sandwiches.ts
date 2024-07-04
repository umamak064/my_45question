function items(...items: string[]): void {
    console.log(`You ordered a sandwich with the following items:`);
    for (const item of items) {
      console.log(`- ${item}`);
    }
  }
  
  // Call the function with different arguments
  items('meet', 'cheese', 'coleslow', 'onion', 'ketchup');
  items('chiken', 'cheese', 'mayo', );
  items('fish','mayo');