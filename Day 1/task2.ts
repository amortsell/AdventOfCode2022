import input from './input';

let numbers: number[] = input.read();
numbers.sort((a, b) => a < b ? 1 : -1);
console.log(numbers.slice(0, 3).reduce((prev, curr) => prev + curr, 0));



