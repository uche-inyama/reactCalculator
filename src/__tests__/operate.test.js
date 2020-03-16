import operate from '../logic/operate';

describe('performs operations of a calculator', () => {
  it('adds to numbers', () => {
    expect(operate(1, 3, '+')).toBe('4');
  });
  it('adds to numbers', () => {
    expect(operate(5, 4, '-')).toBe('1');
  });

  it('adds to numbers', () => {
    expect(operate(1, 1, 'x')).toBe('1');
  });

  it('adds to numbers', () => {
    expect(operate(95, 0, '%')).toBe('0.95');
  });

  it('adds to numbers', () => {
    expect(operate(12, 4, '÷')).toBe('3');
  });
});
