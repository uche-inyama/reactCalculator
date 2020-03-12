import Bigjs from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case 'x':
      return numberOne * numberTwo;
    case '÷':
      return numberOne / numberTwo;
    default:
      return '0';
  }
};

export default operate;
