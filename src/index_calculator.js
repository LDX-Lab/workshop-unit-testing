import Calculator from './utils/calculator.js';

const calculator = new Calculator();

const valueX = 10;
const valueY = 40;
const result = calculator.sum(valueX, valueY);

console.log(`Sum between ${valueX} and ${valueY}: ${result}`);