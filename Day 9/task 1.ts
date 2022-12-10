import * as fs from 'fs';

class Position {
  x: number;
  y: number;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const lines: string[] = fs.readFileSync('./Day 9/input.txt', 'utf8').toString().split('\r\n');

let visitedPositions: Position[] = [new Position(0,0)];
let headPosX: number = 0;
let headPosY: number = 0;
let tailPosX: number = 0;
let tailPosY: number = 0;


function move(direction: string): void {
  switch(direction) {
    case 'R':
      headPosX += 1;

      if (Math.abs(headPosX - tailPosX) >= 2) {
        tailPosX += 1;
        if (tailPosY !== headPosY) {
          tailPosY = headPosY;
        }
      }
      break;
    case 'U': 
    headPosY -= 1;

    if (Math.abs(headPosY - tailPosY) >= 2) {
      tailPosY -= 1;
      if (tailPosX !== headPosX) {
        tailPosX = headPosX;
      }
    }
    break;
    case 'L':
      headPosX -= 1;

      if (Math.abs(headPosX - tailPosX) >= 2) {
        tailPosX -= 1;
        if (tailPosY !== headPosY) {
          tailPosY = headPosY;
        }
      }
      break;
    case 'D':
      headPosY += 1;

      if (Math.abs(headPosY - tailPosY) >= 2) {
        tailPosY += 1;
        if (tailPosX !== headPosX) {
          tailPosX = headPosX;
        }
      }
      break;
  }
  if (!visitedPositions.find(p => p.x == tailPosX && p.y == tailPosY)) {
    visitedPositions.push(new Position(tailPosX, tailPosY));
  }
}

lines.map((l: string, i: number) => {
  const matches: RegExpMatchArray = l.match(/([RULD]) (\d+)/);
  const direction: string = matches[1];
  const count: number = parseInt(matches[2]);
  for (let i: number = 0; i < count; i++) {
    move(direction)
  }
});

console.log(visitedPositions.length);