function Car(manufacturer: string, model: string,...options: object[]): { [key: string]: string } {
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add any additional properties
    options.forEach(option => {
        Object.keys(option).forEach(key => {
            car[key] = option[key];
        });
    });

    return car;
}
  // Call the function with name-value pairs
  const myCar = Car('Lambourghini', 'miura', { color: 'white' }, { sunroof: 'no' });
  console.log(myCar);