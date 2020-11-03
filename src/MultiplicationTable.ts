export class MultiplicationTable {
  render(start: number, end: number): string{
    return this.renderMultiplicationTable(start, end);
  }

  isStartNumberLessThanOrEqualsToEndNumber(start: number, end: number): boolean{
    return start <= end
  }

  isInRangeOfOneToTen(start: number, end: number): boolean{
    return 1<= start && start <=10 && 1<= end && end <=10;
  }
  
  renderMultiplicationTable(start: number, end: number): string{
    let multiplicationTable = '';
    for (var x = start; x <= end; x++) {
      for (var y = start; y <= x; y++) {
        multiplicationTable +=`${y}*${x}=${x*y}`
        if (x == y) {
          if (y != end) multiplicationTable += `\n`;
        } else {
          multiplicationTable += ' ';
        }
      }
    }
    return multiplicationTable;
  }
}
