import * as fs from 'fs';

const scoreBoard = {
  A: {
    X: 4,
    Y: 8,
    Z: 3
  },
  B: {
    X: 1,
    Y: 5, 
    Z: 9
  },
  C: {
    X: 7,
    Y: 2,
    Z: 6
  }
}

const input: string = fs.readFileSync('./Day 2/input.txt', 'utf8').toString();
let score: number = 0;
input.split('\r\n').map(l => {
  score += scoreBoard[l[0]][l[2]];
});

console.log(score);
