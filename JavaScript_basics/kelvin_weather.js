// Constant variable of kelvin
const kelvin = 0;
console.log(kelvin);
// Constant celsius is kelvin minus 273
const celsius = kelvin - 273;
console.log(celsius);
// Equation to get fahrenheit's value
let fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit);
// Equation to get fahrenheit's rounded value
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);