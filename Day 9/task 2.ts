import * as fs from 'fs';

class Knot {
  PosX: number;
  PosY: number;
  constructor() {
    this.PosX = 0;
    this.PosY = 0;
  }
}
class Position {
  x: number;
  y: number;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const lines: string[] = fs.readFileSync('./Day 9/input.txt', 'utf8').toString().split('\r\n');

let knots: Knot[] = []
for (let i = 0; i < 10; i++) {
  knots.push(new Knot());
}
let visitedPositions: Position[] = [new Position(0,0)];

function move(direction: string): void {
  switch(direction) {
    case 'R':
      knots.map((k: Knot, i: number) => {
        if (i == 0) {
          k.PosX += 1;
        } else {
          let head = knots[i - 1];
          if (Math.abs(k.PosX - head.PosX) >= 2) {
            if (k.PosX < head.PosX) {
              k.PosX += 1;
            } else {
              k.PosX -= 1;
            }
            if (head.PosY !== k.PosY) {
              if (k.PosY < head.PosY)  {
                k.PosY += 1;
              } else {
                k.PosY -= 1;
              }
            }
          } else if (Math.abs(k.PosY - head.PosY) >= 2) {
            if (k.PosY < head.PosY) {
              k.PosY += 1;
            } else {
              k.PosY -= 1;
            }
            if (head.PosX !== k.PosX) {
              if (k.PosX < head.PosX) {
                k.PosX += 1
              } else {
                k.PosX -= 1;
              }
            }
          }
        }
      })
      break;
    case 'U': 
      knots.map((k: Knot, i: number) => {
        if (i == 0) {
          k.PosY -= 1;
        } else {
          let head = knots[i - 1];
          if (Math.abs(k.PosY - head.PosY) >= 2) {
            if (k.PosY < head.PosY) {
              k.PosY += 1;
            } else {
              k.PosY -= 1;
            }
            if (head.PosX !== k.PosX) {
              if (k.PosX < head.PosX) {
                k.PosX += 1;
              } else {
                k.PosX -= 1;
              }
            }
          } else if (Math.abs(k.PosX - head.PosX) >= 2) {
            if (k.PosX < head.PosX) {
              k.PosX += 1;
            } else {
              k.PosX -= 1;
            }
            if (head.PosY !== k.PosY) {
              if (k.PosY < head.PosY) {
                k.PosY += 1;
              } else {
                k.PosY -= 1;
              }
            }
          }
        }
      })
      break;
    case 'L':
      knots.map((k: Knot, i: number) => {
        if (i == 0) {
          k.PosX -= 1;
        } else {
          let head = knots[i - 1];
          if (Math.abs(k.PosX - head.PosX) >= 2) {
            if (k.PosX < head.PosX) {
              k.PosX += 1;
            } else {
              k.PosX -= 1;
            }
            if (head.PosY !== k.PosY) {
              if (k.PosY < head.PosY) {
                k.PosY += 1;
              } else {
                k.PosY -= 1;
              }
            }
          }else if (Math.abs(k.PosY - head.PosY) >= 2) {
            if (k.PosY < head.PosY) {
              k.PosY += 1;
            } else {
              k.PosY -= 1;
            }
            if (head.PosX !== k.PosX) {
              if (k.PosX < head.PosX) {
                k.PosX += 1;
              } else {
                k.PosX -= 1;
              }
            }
          }
        }
      })
      break;
    case 'D':
      knots.map((k: Knot, i: number) => {
        if (i == 0) {
          k.PosY += 1;
        } else {
          let head = knots[i - 1];
          if (Math.abs(k.PosY - head.PosY) >= 2) {
            if (k.PosY < head.PosY) {
              k.PosY += 1;
            } else {
              k.PosY -= 1;
            }
            if (head.PosX !== k.PosX) {
              if (k.PosX < head.PosX) {
                k.PosX += 1;
              } else {
                k.PosX -= 1;
              }
            }
          } else if (Math.abs(k.PosX - head.PosX) >= 2) {
            if (k.PosX < head.PosX) {
              k.PosX += 1;
            } else {
              k.PosX -= 1;
            }
            if (head.PosY !== k.PosY) {
              if (k.PosY < head.PosY) {
                k.PosY += 1;
              } else {
                k.PosY -= 1;
              }
            }
          }
        }
      })
      break;
  }
  if (!visitedPositions.find(p => p.x == knots[9].PosX && p.y == knots[9].PosY)) {
    visitedPositions.push(new Position(knots[9].PosX, knots[9].PosY));
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