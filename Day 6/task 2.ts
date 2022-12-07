import * as fs from 'fs';

const text: string = fs.readFileSync('./Day 6/input.txt', 'utf8').toString();

const isUnique = function (part: string): boolean {
  let result: boolean = true;
  part.split('').map((c, i, arr) => {
    let tmpArr = [...arr];
    tmpArr.splice(i, 1);
    if (tmpArr.indexOf(c) !== -1) {
      result = false;
    }
  });

  return result;
}

for (let i = 14; i < text.length; i++) {
  if (isUnique(text.substring(i - 14, i))) {
    console.log(i);
    break;
  }
}