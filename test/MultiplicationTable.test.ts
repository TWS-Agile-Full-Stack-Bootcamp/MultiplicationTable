import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    expect(new MultiplicationTable().render(1, 1)).toBe('1*1=1')
  })
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
})
