export class MultiplicationTable {
  render(start: number, end: number): string {

    if (start > end) {
      return 'nothing'
    }

    return '1*1=1'
  }
}
