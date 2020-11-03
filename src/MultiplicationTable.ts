interface Expression {
  addon1: number
  addon2: number
  sum: number
}

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

  renderExpressions = (start: number, end: number, expressions: Expression[][]) => {
    const width = Array(end - start + 1).fill(0)
    return expressions.reverse().map((row: Expression[]) => row
      .map(({addon1, addon2, sum}: Expression) => {
        const expression = `${addon1}*${addon2}=${sum}`
        const col = addon1 - start
        width[col] = Math.max(width[col], expression.length)
        const spacing = ' '.repeat(width[col] - expression.length)
        return expression + spacing
      }).join('  ').trim()
    ).reverse().join('\n')
  }

  render(start: number, end: number): string{
    if (start > end) return ''
    if (!this.isBetween1and10(start) || !this.isBetween1and10(end)) return ''
    const expressions = this.buildExpressions(start, end)
    return this.renderExpressions(start, end, expressions)
  }
}
