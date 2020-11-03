import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    expect(new MultiplicationTable().render(1, 1)).toBe('1*1=1')
  })
  it('should not render multiplication table of (2, 1)', () => {
    expect(new MultiplicationTable().render(2, 1)).toBe('')
  })
})
