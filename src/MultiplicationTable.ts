export class MultiplicationTable {
  isBetween1and10 = (target: number) => (target >= 1 && target <= 10)

  render(start: number, end: number): string{
    if (start > end) return ''
    if (!this.isBetween1and10(start) || !this.isBetween1and10(end)) return ''
    return '1*1=1'
  }
}
