
let userData = {
  name: 'Alex',
  age: 22
};

// userData = 10; - infers the type to be an object
// userData = { a: 'hello', b: age } - has to be an object with a name - age property

// Setting an object that should have a name with a string and age with a number
let userData2: { name: string, age: number } = {
  name: 'Jessica',
  age: 23
};

userData2 = { name: 'Bob', age: 1 };

// More complex version
let complex: { data: number[], output: (all: boolean) => number[]} = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
}

// Define a type (like an interface)
type Complex = { data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
  data: [100, 200, 300],
  
  output: function (all: boolean): number[] {
    return this.data;
  }
}