import * as fs from 'fs';

const lines: string[] = fs.readFileSync('./Day 8/input.txt', 'utf8').toString().split('\r\n');

function getScenicScore(i: number, j: number): number {
  // First check if we're at an edge
  if (i == 0 || j == 0 || i == lines.length - 1 || j == lines[0].length - 1) {
    return 0;
  }

  // Then check visibility from top
  let top: number = 0;
  let k: number = i - 1;
  while (k >= 0 && lines[k][j] < lines[i][j]) {
    k--;
    top++;
  }
  if (k >= 0) top++;
  
    // Then check visibility from bottom
  let bottom: number = 0;
  k = i + 1;
  while (k < lines.length && lines[k][j] < lines[i][j]) {
    k++;
    bottom++;
  }
  if (k < lines.length) bottom++;
  
  // Then check visibility from left
  let left:number = 0;
  k = j - 1;
  while (k >= 0 && lines[i][k] < lines[i][j]) {
    k--;
    left++;
  }
  if (k >= 0) left++;
  
  // Finally check visibility from right
  let right: number = 0;
  k = j + 1;
  while (k < lines[0].length && lines[i][k] < lines[i][j]) {
    k++;
    right++;
  }
  if (k < lines[0].length) right++;

  return top * bottom * left * right;
}
let max: number = 0;
lines.map((l: string, i: number) => {
  l.trim().split('').map((c: string, j: number) => {
    max = Math.max(max, getScenicScore(i, j))

  });
});

console.log(max);