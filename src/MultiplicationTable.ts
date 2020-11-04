interface Expression {
  factor1: number
  factor2: number
  product: number
}

const range = (n: number) => [...Array(n).keys()]

export class MultiplicationTable {
  buildExpressions = (start: number, end: number) => range(end - start + 1)
    .map(row => range(row + 1)
      .map(col => ({
        factor1: col + start,
        factor2: row + start,
        product: (col + start) * (row + start)
      })))

  renderExpressions = (start: number, end: number, expressions: Expression[][]) => {
    const width = Array(end - start + 1).fill(0)
    return expressions.reverse().map((row: Expression[]) => row
      .map(({factor1, factor2, product}: Expression) => {
        const expression = `${factor1}*${factor2}=${product}`
        const col = factor1 - start
        width[col] = Math.max(width[col], expression.length)
        const spacing = ' '.repeat(width[col] - expression.length)
        return expression + spacing
      }).join('  ').trim()
    ).reverse().join('\n')
  }

  isValidRange = (start: number, end: number) => (start <= end)

  isBetween1and10 = (target: number) => (target >= 1 && target <= 10)

  isValidScope = (start: number, end: number) => (this.isBetween1and10(start) && this.isBetween1and10(end))

  render(start: number, end: number): string{
    if (!this.isValidRange(start, end)) return ''
    if (!this.isValidScope(start, end)) return ''
    const expressions = this.buildExpressions(start, end)
    return this.renderExpressions(start, end, expressions)
  }
}
