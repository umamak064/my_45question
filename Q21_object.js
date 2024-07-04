// Create a cake object
var cake = {
    flavor: 'Vanilla',
    layers: 3,
    frosting: 'Buttercream',
    decorations: ['Sprinkles', 'Candles'],
    price: 1500
};
console.log("Flavor: ".concat(cake.flavor));
console.log("Number of Layers: ".concat(cake.layers));
console.log("Frosting: ".concat(cake.frosting));
console.log("Decorations: ".concat(cake.decorations.join(', ')));
console.log("Price: $".concat(cake.price));
