import * as fs from 'fs';
import input from './input';


const storage = input.read();
for (let i = 0;  i < storage.operations.length; i++) {
  const source = storage.operations[i].source - 1;
  const target = storage.operations[i].target - 1;
  const count = storage.operations[i].count;
  const [first, second] = [ storage.positions[source].slice(0, count), storage.positions[source].slice(count) ];
  storage.positions[target] = first + storage.positions[target];
  storage.positions[source] = second;
}

let result: string = ''
for (let i = 0; i < storage.positions.length; i++) {
  result += storage.positions[i][0];
}

console.log(result);
