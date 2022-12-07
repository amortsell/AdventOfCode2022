import * as fs from 'fs';

import File from './models/file';
import Directory from './models/directory';
import input from './input';

const root:Directory = input.read();

let sizes: number[] = [];

function traverse(dir: Directory): void {
  dir.folders.map(f => {
    sizes.push(f.getSize());
    traverse(f);
  });

}

traverse(root);
console.log(sizes.reduce((prev, s) => prev + (s < 100000 ? s : 0), 0));


