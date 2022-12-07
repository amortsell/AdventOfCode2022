import operation from './operation';
export default class stack {
  positions: string[];
  operations: operation[];
  constructor () {
    this.positions = [];
    this.operations = [];
  }
}