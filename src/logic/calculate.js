import operate from "./operate";

const calculate = (obj, buttonName) => {
  const { total, next, operation } = obj;
  let ans;
  if (buttonName === "+/-") {
    return {
      ...obj,
      total: total * -1,
      next: next * -1,
      operation: buttonName
    };
  }

  if (buttonName === "=") {
    ans = operate(total, next, operation);
    return {
      ...obj,
      total: ans,
      next: null,
      operation: null
    };
  }

  if (buttonName === "AC") {
    return {
      ...obj,
      total: null,
      next: null,
      operation: null
    };
  }

  if (/[% ÷ x + -]/.test(buttonName)) {
    return {
      ...obj,
      operation: buttonName
    };
  }

  if (/\d/.test(buttonName)) {
    if (operation === null) {
      return {
        ...obj,
        total: total === null ? buttonName : total + buttonName
      };
    }
    return {
      ...obj,
      next: next === null ? buttonName : next + buttonName
    };
  }

  if (buttonName === ".") {
    if (operation === null) {
      return {
        ...obj,
        total: total === null ? buttonName : total + buttonName
      };
    }
    return {
      ...obj,
      next: next === null ? buttonName : next + buttonName
    };
  }

  return obj;
};

export default calculate;
