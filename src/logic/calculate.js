const calculate = (obj, buttonName) => {
  const { total, next, operation } = obj;
  return {
    ...obj,
    total: +total * -1,
    next: +next * -1,
  };
};

export default calculate;
