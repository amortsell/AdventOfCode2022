import * as fs from 'fs';

import File from './models/file';
import Directory from './models/directory';
import input from './input';

const root:Directory = input.read();

let directories: Directory[] = [ root ];

function flatten(dir: Directory): void {
  dir.folders.map(f => {
    directories.push(f);
    flatten(f);
  });

}

flatten(root);
const sizeAvailable = 70000000 - root.getSize();
const sizeNeeded = 30000000 - sizeAvailable;
const chosenDirectory = directories.reduce<Directory | undefined>((prev, curr) => {
  const size: number = curr.getSize();
  if (size > sizeNeeded && (!prev || prev.getSize() > size)) {
    return curr;
  } else {
    return prev;
  }
}, undefined);
console.log(chosenDirectory.getSize());

