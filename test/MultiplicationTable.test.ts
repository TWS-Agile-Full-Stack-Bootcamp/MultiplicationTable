import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    expect(new MultiplicationTable().render(1, 1)).toBe('1*1=1')
  })

  it('should return true when check given start number less than end number', () => {
    expect(new MultiplicationTable().isStartNumberLessThanOrEqualsToEndNumber(1, 2)).toBeTruthy();
  })

  it('should return true when check given start number equals to end number', () => {
    expect(new MultiplicationTable().isStartNumberLessThanOrEqualsToEndNumber(1, 1)).toBeTruthy();
  })

  it('should return true when check given start number larger than end number', () => {
    expect(new MultiplicationTable().isStartNumberLessThanOrEqualsToEndNumber(2, 1)).toBeFalsy();
  })
})
