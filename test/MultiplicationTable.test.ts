import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render multiplication table of (1, 1)', () => {
    expect(new MultiplicationTable().render(1, 1)).toBe('1*1=1')
  })

  it('should render multiplication table of (1, 2)', () => {
    expect(new MultiplicationTable().render(1, 2)).toBe(`1*1=1\n1*2=2 2*2=4`);
  })
  
  it('should render multiplication table of (2, 4)', () => {
    expect(new MultiplicationTable().render(2, 4)).toBe(`2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16`);
  })

  it('should return empty given render when start number larger than end number', () => {
    expect(new MultiplicationTable().render(2, 1)).toBe('');
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

  it('should return true when check given both start number and end number in range of 1 to 10', () => {
    expect(new MultiplicationTable().isInRangeOfOneToTen(1, 1)).toBeTruthy();
  })

  it('should return true when check given either start number or end number not in range of 1 to 10', () => {
    expect(new MultiplicationTable().isInRangeOfOneToTen(0, 1)).toBeFalsy();
    expect(new MultiplicationTable().isInRangeOfOneToTen(1, 11)).toBeFalsy();
  })

  it('should render multiplication table of (1, 2)', () => {
    expect(new MultiplicationTable().renderMultiplicationTable(1, 2)).toBe(`1*1=1\n1*2=2 2*2=4`);
  })

  it('should render multiplication table of (2, 4)', () => {
    expect(new MultiplicationTable().renderMultiplicationTable(2, 4)).toBe(`2*2=4\n2*3=6 3*3=9\n2*4=8 3*4=12 4*4=16`);
  })
})
