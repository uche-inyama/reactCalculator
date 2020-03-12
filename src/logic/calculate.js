import operate from './operate';

const calculate = (obj, buttonName) => {
  const { total, next, operation } = obj;
  let ans;
  if (buttonName === '+/-') {
    return {
      ...obj,
      total: total * -1,
      next: next * -1,
    };
  }
  if (buttonName === '+') {
    ans = operate(total, next, operation);
    return {
      ...obj,
      total: ans,
      next,
    };
  }
  if (buttonName === '-') {
    ans = operate(total, next, operation);
    return {
      ...obj,
      total: ans,
      next,
    };
  }
  if (buttonName === '*') {
    ans = operate(total, next, operation);
    return {
      ...obj,
      total: ans,
      next,
    };
  }
  if (buttonName === '÷') {
    ans = operate(total, next, operation);
    return {
      ...obj,
      total: ans,
      next,
    };
  }
};

export default calculate;
