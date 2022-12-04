import * as fs from 'fs';


const input: string = fs.readFileSync('./Day 4/input.txt', 'utf8').toString();
let total: number = 0;
input.split('\r\n').map(l => {
  const matches = l.match(/(\d+)-(\d+),(\d+)-(\d+)/);
  const min1 = parseInt(matches[1]);
  const max1 = parseInt(matches[2]);
  const min2 = parseInt(matches[3]);
  const max2 = parseInt(matches[4]);
  ((min1 <= min2 && max1 >= max2) || (min2 <= min1 && max2 >= max1)) && (total++);
});

console.log(total);
