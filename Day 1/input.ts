import * as fs from 'fs';

class input {
  read(): number[] {
    const text: string = fs.readFileSync('./Day 1/input.txt', 'utf8').toString();
    let numbers: number[] = [];
    let count: number = 0;
    text.split('\r\n').forEach(l => {
      if (l == '') {
        numbers.push(count);
        count = 0;
      } else {
        count += parseInt(l);
      }
    });
    numbers.push(count);

    return numbers;
  }
}

export default new input();

