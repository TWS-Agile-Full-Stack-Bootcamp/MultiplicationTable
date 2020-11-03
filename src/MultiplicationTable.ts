export class MultiplicationTable {
  isBetween1and10 = (target: number) => (target >= 1 && target <= 10)

  buildExpressions = (start: number, end: number) => {
    const expressions = []
    for (let row = 0; row <= (end - start); row++) {
      const rowExpresson = []
      for (let col = 0; col <= row; col++) {
        const addon1 = col + start
        const addon2 = row + start
        rowExpresson.push({addon1, addon2, sum: addon1*addon2})
      }
      expressions.push(rowExpresson)
    }
    return expressions
  }

  render(start: number, end: number): string{
    if (start > end) return ''
    if (!this.isBetween1and10(start) || !this.isBetween1and10(end)) return ''
    const expressions = this.buildExpressions(start, end)
    const rendered = expressions.map(row => row
      .map(({addon1, addon2, sum}) => `${addon1}*${addon2}=${sum}`)
      .join('  ')
    ).join('\n')
    return rendered
  }
}
