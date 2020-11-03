import { MultiplicationTable } from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    expect(new MultiplicationTable().render(1, 1)).toBe('1*1=1')
  })

  it('should render noting when start greater than end', () => {
    expect(new MultiplicationTable().render(1, 0)).toBe('nothing')
  })
})
