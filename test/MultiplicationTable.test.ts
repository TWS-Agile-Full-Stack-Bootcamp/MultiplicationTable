import { MultiplicationTable } from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    expect(new MultiplicationTable().render(1, 1)).toBe('1*1=1')
  })

  it('should render start or end should less than 10 when end greater than 9', () => {
    expect(new MultiplicationTable().render(1, 10)).toBe('start or end should less than 10')
  })

  it('should render start or end should less than 10 when start greater than 9', () => {
    expect(new MultiplicationTable().render(10, 10)).toBe('start or end should less than 10')
  })

  it('should render noting when start greater than end', () => {
    expect(new MultiplicationTable().render(1, 0)).toBe('nothing')
  })

  it('should render multiplication table of (2, 4)', () => {
    expect(new MultiplicationTable().render(2, 4)).toBe(`2*2=4\n2*3=6\t3*3=9\n2*4=8\t3*4=12\t4*4=16`)
  })
})
