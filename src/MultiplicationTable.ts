export class MultiplicationTable {
  render(start: number, end: number): string {

    if (start > end) {
      return 'nothing'
    }

    if (start > 9 || end > 9) {
      return 'start or end should less than 10'
    }

    return '1*1=1'
  }
}
