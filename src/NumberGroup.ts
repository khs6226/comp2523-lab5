import { ISortable } from './ISortable';

export class NumberGroup implements ISortable {
  constructor(data: number[]) {
    this.data = data;
  }

  data: number[];

  get length(): number {
    // logic here
    return this.data.length;
    
  };

  compare(leftPos: number, rightPos: number): boolean {
    // logic here
    return this.data[leftPos] > this.data[rightPos];
  }

  swap(leftPos: number, rightPos: number): void {
    // logic here
    let tempLeft: number = this.data[leftPos];
    this.data[leftPos] = this.data[rightPos];
    this.data[rightPos] = tempLeft;
  }
}
