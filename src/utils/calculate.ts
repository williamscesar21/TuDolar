export const convertCurrency = (amount: number, rate: number) => {
  return amount / rate;
};

export const calculateSavings = (amount: number, percent: number) => {
  return (amount * percent) / 100;
};
