import calculate from '../logic/calculate';

describe('an object', () => {
  it('updates the properties of the object', () => {
    const obj = {
      total: 0,
      next: 0,
      operation: '',
    };
    const { total, next } = calculate(obj, '+/-');
    expect(total).toEqual(-0);
    expect(next).toEqual(-0);
  });

  it('', () => {
    const obj = {
      total: 2,
      next: 3,
      operation: '+',
    };
    const { total } = calculate(obj, '+');
    expect(total).toEqual(5);
  });
});
