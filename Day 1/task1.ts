import input from './input';

const numbers: number[] = input.read();

console.log(numbers.reduce((prev: number, curr: number) => Math.max(prev, curr), -1));

