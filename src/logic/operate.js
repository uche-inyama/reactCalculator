import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '+':
      return Big(numberOne) + Big(numberTwo);
    case '-':
      return Big(numberOne) - Big(numberTwo);
    case 'x':
      return Big(numberOne) * Big(numberTwo);
    case '÷':
      return Big(numberOne) / Big(numberTwo);
    default:
      return '0';
  }
};

export default operate;
