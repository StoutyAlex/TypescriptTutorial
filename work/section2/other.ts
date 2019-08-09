// Union
// Variable with string or number
let myRealAge: string | number = 27
myRealAge = '27';

// check a type
let finalValue = 'A string';
if (typeof finalValue == 'string') {
  console.log('Final value is a number');  
}

// never type
// Function never finsihes - never returns
function neverReturns(): never {
  throw new Error('An error!');
}