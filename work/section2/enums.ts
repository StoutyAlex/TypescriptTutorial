
// Enum
enum Color {
  Red = '#F00',
  Green = '#0F0',
  Blue = '#00F'
}

// #F00
Color.Red

// Enums are automatically given values 1 - x where x is how many variables
// Count one up from the previous number, three = 101
enum Order {
  One,
  Two = 100,
  Three
}

// 1
Order.One
// 100
Order.Two
// 101
Order.Three