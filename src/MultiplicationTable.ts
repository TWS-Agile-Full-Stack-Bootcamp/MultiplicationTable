export class MultiplicationTable {
  isBetween1and10 = (target: number) => (target >= 1 && target <= 10)

  render(start: number, end: number): string{
    if (start > end) return ''
    if (!this.isBetween1and10(start) || !this.isBetween1and10(end)) return ''
    const expressions = [
      [{addon1: 2, addon2: 2, sum: 4}],
      [{addon1: 2, addon2: 3, sum: 6}, {addon1: 3, addon2: 3, sum: 9}],
      [{addon1: 2, addon2: 4, sum: 8}, {addon1: 3, addon2: 4, sum: 12}, {addon1: 4, addon2: 4, sum: 16}]
    ]
    const rendered = expressions.map(row => row
      .map(({addon1, addon2, sum}) => `${addon1}*${addon2}=${sum}`)
      .join('  ')
    ).join('\n')
    return rendered
  }
}
