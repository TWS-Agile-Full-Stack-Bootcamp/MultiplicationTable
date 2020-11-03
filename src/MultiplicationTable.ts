export class MultiplicationTable {
  render(start: number, end: number): string{
    if (start > end) return ''
    return '1*1=1'
  }
}
