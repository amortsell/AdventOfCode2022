import * as fs from 'fs';

import File from './models/file';
import Directory from './models/directory';

const lines: string[] = fs.readFileSync('./Day 7/input.txt', 'utf8').toString().split('\r\n');

class input {
  read(): Directory {
    let root = new Directory();
    root.name = '/';
    root.parent = undefined
    let current: Directory | undefined = undefined
    let i: number = 0;
    while (i < lines.length) {
      let l: string = lines[i];
      if (l[0] === '$') {
        if (l.substring(2).startsWith('cd')) {
          if (l.substring(5) == '/') {
            current = root;
          } else if (l.substring(5) == '..') {
            current = current.parent;
          } else {
            let next = current.folders.find(f => f.name === l.substring(5));
            if (next) {
              current = next;
            } else {
              throw new Error('Tried to move into anonexistent directory');
            }
          }
          i++;
        } else if (l.substring(2) === 'ls') {
          while (++i < lines.length && (l = lines[i])[0] !== '$') {
            if (l.startsWith('dir')) {
              let child = new Directory();
              child.name = l.substring(4);
              child.parent = current;
              current.folders.push(child);
            } else if (/(\d+) ([a-z|\.]+)/.test(l)) {
              const matches: RegExpMatchArray = l.match(/(\d+) ([a-z|\.]+)/);
              let file = new File(matches[2], parseInt(matches[1]));
              current.files.push(file);
            }
          }
        }
      } 
    }


    return root;
  }
}

export default new input();
