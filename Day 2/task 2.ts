import * as fs from 'fs';

const scoreBoard = {
  A: {
    X: 3,
    Y: 4,
    Z: 8
  },
  B: {
    X: 1,
    Y: 5, 
    Z: 9
  },
  C: {
    X: 2,
    Y: 6,
    Z: 7
  }
}

const input: string = fs.readFileSync('./Day 2/input.txt', 'utf8').toString();
let score: number = 0;
input.split('\r\n').map(l => {
  score += scoreBoard[l[0]][l[2]];
});

console.log(score);
