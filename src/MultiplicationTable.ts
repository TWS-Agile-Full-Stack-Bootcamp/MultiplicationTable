export class MultiplicationTable {
  render(start: number, end: number): string{
    return '1*1=1'
  }

  isStartNumberLessThanOrEqualsToEndNumber(start: number, end: number): boolean{
    return start <= end
  }

  isInRangeOfOneToTen(start: number, end: number): boolean{
    return 1<= start && start <=10 && 1<= end && end <=10;
  }
  
}
