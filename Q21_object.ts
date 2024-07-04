// Create a cake object
let cake = {
    flavor: 'Vanilla',
    layers: 3,
    frosting: 'Buttercream',
    decorations: ['Sprinkles', 'Candles'],
    price: 1500
  };
  
 
  console.log(`Flavor: ${cake.flavor}`);
  console.log(`Number of Layers: ${cake.layers}`);
  console.log(`Frosting: ${cake.frosting}`);
  console.log(`Decorations: ${cake.decorations.join(', ')}`);
  console.log(`Price: $${cake.price}`);