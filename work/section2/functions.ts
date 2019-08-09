const myName: string = 'Alex'

// this function returns a string
function returnMyName (): string {
  return myName;
}

// void (no return)
// infered
function sayGoodbye() {
  console.log('Goodbye!');
}
// explicit
function sayHello(): void {
  console.log('Hello!');
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

// function types
// Any Function
let myGreet;
myGreet = sayHello;
// myGreet(); - Hello
myGreet = sayGoodbye;
// myGreet(); - Goodbye

// Accept a method that takes 2 numbers and returns a number
let myMultiply: (value1: number, value2: number) => number;
// myMultiply = sayHello; - Does not satisty the function signature
myMultiply = multiply

