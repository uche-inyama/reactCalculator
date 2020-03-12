import calculate from '../logic/calculate';

describe('', () => {
  it('', () => {
    const obj = {
      total: 0,
      next: 0,
      operation: '',
    };
    const { total, next } = calculate(obj, '+/-');
    expect(total).toEqual(-0);
    expect(next).toEqual(-0);
  });
});
