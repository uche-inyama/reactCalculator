import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  const bigNumOne = numberOne ? Big(numberOne) : null;
  const bigNumTwo = numberTwo ? Big(numberTwo) : null;
  switch (operation) {
    case '+':
      return bigNumOne.plus(bigNumTwo).toString();
    case '-':
      return bigNumOne.minus(bigNumTwo).toString();
    case 'x':
      return bigNumOne.times(bigNumTwo).toString();
    case '÷':
      try {
        bigNumOne.div(bigNumTwo);
        return bigNumOne.div(bigNumTwo).toString();
      } catch (err) {
        return "Can't divide by 0";
      }
    case '%':
      return bigNumOne.div(100).toString();
    default:
      return '0';
  }
};

export default operate;
