export class MultiplicationTable {
  render(start: number, end: number): string{
    return '1*1=1'
  }

  isStartNumberLessThanOrEqualsToEndNumber(start: number, end: number): boolean{
    return start <= end
  }

}
