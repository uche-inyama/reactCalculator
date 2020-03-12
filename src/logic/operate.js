import Bigjs from "big-js";
import Calculate from "./calculate";

const Operate = () => {
  const operate = (numberOne, numberTwo, operation) => {
    operation = "";
    switch (operation) {
      case "+":
        return numberOne + numberTwo;
      case "-":
        return numberOne - numberTwo;
      case "x":
        return numberOne * numberTwo;
      case "÷":
        return numberOne / numberTwo;
      default:
        return "0";
    }
  };
  return {
      operate;
  }
};

export default Operate;
