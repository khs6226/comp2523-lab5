import { ISortable } from './ISortable';

export class CharacterGroup implements ISortable {
  constructor(data: string) {
    this.data = data;
  }

  data: string;
  

  get length(): number {
    // logic here
    return this.data.length;
  }

  compare(leftPos: number, rightPos: number): boolean {
    // logic here
    return this.data.charAt(leftPos).toLowerCase().charCodeAt(0) > this.data.charAt(rightPos).toLowerCase().charCodeAt(0);
  }

  swap(leftPos: number, rightPos: number): void {
    // logic here
    let strArr: string[] = this.data.split('');
    let tempLeft: string = strArr[leftPos];
    strArr[leftPos] = strArr[rightPos];
    strArr[rightPos] = tempLeft;
    this.data = strArr.join('');
  }
}