
// Try not to use any.
// Any gives up all features that typescript gives to you

let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 1 };
console.log(car);