import * as fs from 'fs';

const lines: string[] = fs.readFileSync('./Day 8/input.txt', 'utf8').toString().split('\r\n');

function isVisible(i: number, j: number): number {
  // First check if we're at an edge
  if (i == 0 || j == 0 || i == lines.length - 1 || j == lines[0].length - 1) {
    return 1;
  }

  // Then check visibility from top
  let k: number = i - 1;
  while (k >= 0 && lines[k][j] < lines[i][j]) {
    k--;
  }
  if (k == -1) return 1;

    // Then check visibility from bottom
  k = i + 1;
  while (k < lines.length && lines[k][j] < lines[i][j]) {
    k++;
  }
  if (k == lines.length) return 1;
  
  // Then check visibility from left
  k = j - 1;
  while (k >= 0 && lines[i][k] < lines[i][j]) {
    k--;
  }
  if (k == -1) return 1;

  // Finally check visibility from right
  k = j + 1;
  while (k < lines[0].length && lines[i][k] < lines[i][j]) {
    k++;
  }
  if (k == lines[0].length) return 1;
  return 0;
}
let count: number = 0;
lines.map((l: string, i: number) => {
  l.trim().split('').map((c: string, j: number) => {
    count += isVisible(i, j);

  });
});

console.log(count);