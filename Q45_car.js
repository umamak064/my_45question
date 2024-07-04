function Car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add any additional properties
    options.forEach(function (option) {
        Object.keys(option).forEach(function (key) {
            car[key] = option[key];
        });
    });
    return car;
}
// Call the function with name-value pairs
var myCar = Car('Lambourghini', 'miura', { color: 'white' }, { sunroof: 'no' });
console.log(myCar);
