import * as fs from 'fs';
import { getPositionOfLineAndCharacter } from 'typescript';
import operation from './models/operation';
import stack from './models/stack';

class input {
  read(): stack {
    const text: string = fs.readFileSync('./Day 5/input.txt', 'utf8').toString();
    const lines = text.split('\r\n');
    let i: number = 0;
    let matches: RegExpMatchArray;
    let columns: string[] = [];
    while (matches = lines[i].match(/\[([A-Z]+)\] ?/g)) {
      columns.push(lines[i]);
      i++;
    }
    let maxCol = -1;
    if (matches = lines[i++].match(/ (\d+) /g)) {
      for (let j = 0; j < matches.length; j++) {
        const col = parseInt(matches[j]);
        if (col > maxCol) {
          maxCol = col;
        }
      }
    }

    let storage = new stack();
    for (let k = 0; k < maxCol; k++) {
      storage.positions.push("");
      for (let l = 0; l < columns.length; l++) {
        if (columns[l][1 + k * 4] !== ' ') {
          storage.positions[k] += columns[l][1 + k * 4];
        }
      }
    }

    while (!lines[i].match(/move (\d+) from (\d+) to (\d+)/)) {
      i++;
    }

    while (i < lines.length && (matches = lines[i].match(/move (\d+) from (\d+) to (\d+)/))) {
      let op = new operation();
      op.count = parseInt(matches[1]);
      op.source = parseInt(matches[2]);
      op.target = parseInt(matches[3]);
      storage.operations.push(op);
      i++;
    }
    return storage;
  }
}

export default new input();

