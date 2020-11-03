import { endianness } from "os"
import { stringify } from "querystring"
import { start } from "repl"
import { isNullOrUndefined } from "util"

export class MultiplicationTable {
  render(start: number, end: number): string {

    if (this.isStartGreaterThanEnd(start, end)) {
      return 'nothing'
    }

    if (this.isStartOrEndGreaterThanNine(start, end)) {
      return 'start or end should less than 10'
    }

    const multiplicationItems = this.generateMultiplicationItems(start, end)

    const sortedMultiplicationItems = this.generateSortMultiplicationItems(multiplicationItems, start, end)

    const multiplicationTable = this.renderMultiplicationTablle(sortedMultiplicationItems)

    return multiplicationTable
  }

  private generateSortMultiplicationItems(multiplicationItems: Array<MultiplicationItem>, start: number, end: number): Array<Array<MultiplicationItem>> {
    const result = new Array<Array<MultiplicationItem>>()

    for (let index = start; index <= end; index++) {
      const sortedArray = multiplicationItems.filter(item => item.end === index)
      sortedArray.sort((a, b) => {
        return a.end - b.end
      })
      result.push(sortedArray)
    }
    return result
  }

  private generateMultiplicationItems(start: number, end: number): Array<MultiplicationItem> {
    const result = new Array<MultiplicationItem>()

    let tempStart = start
    let tempEnd = start
    do {
      do {
        result.push(new MultiplicationItem(tempStart, tempEnd))
        tempEnd++
      } while (tempEnd <= end)
      tempStart++
      tempEnd = tempStart
    } while (tempStart <= end && tempEnd <= end)

    return result
  }

  private isStartGreaterThanEnd(start: number, end: number): boolean {
    return start > end
  }

  private isStartOrEndGreaterThanNine(start: number, end: number): boolean {
    return start > 9 || end > 9
  }


  private renderMultiplicationTablle(sortedMultiplicationItems: Array<Array<MultiplicationItem>>): string {
    let table = ''

    const lines = new Array<string>()
    sortedMultiplicationItems.forEach(oneLine => {

      const oneLineOutput = oneLine.reduce((item, currenct) => {
        item.push(currenct.render())
        return item
      }, new Array<string>()).join('\t')

      lines.push(oneLineOutput)
    })

    table = lines.join('\n')

    return table
  }
}

class MultiplicationItem {

  constructor(public start: number, public end: number) {
  }

  public render(): string {
    return `${this.start}*${this.end}=${this.start * this.end}`
  }


}
