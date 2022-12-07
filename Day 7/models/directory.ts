import File from './file'
export default class Directory {
  name: string;
  files: File[];
  folders: Directory[];
  parent?: Directory;
  constructor() {
    this.files = [];
    this.folders = [];
  }
  getSize(): number {
    let size: number = this.files.reduce<number>((prev: number, curr: File) => {
        return prev + curr.size;
    }, 0);

    this.folders.map(f => {
      size += f.getSize();
    });

    return size;
  }
}