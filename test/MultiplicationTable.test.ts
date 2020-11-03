import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should return empty when render multiplication table of (2, 1)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 1

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })
  it('should return empty when render multiplication table of (1, 11)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 1
    const end = 11

    //when
    const rendered = table.render(start, end)

    //then
    expect(rendered).toBe('')
  })
  it('should return empty when render multiplication table of (2, 4)', () => {
    // given
    const table = new MultiplicationTable()
    const start = 2
    const end = 4

    //when
    const rendered = table.render(start, end)

    //then
    const expected = `2*2=4
2*3=6  3*3=9
2*4=8  3*4=12  4*4=16`
    expect(rendered).toBe(expected)
  })
})
