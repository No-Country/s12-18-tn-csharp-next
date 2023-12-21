export const formatPrice = (input: number | string) => {
  const number = typeof input === "string" ? parseFloat(input) : input;

  const formattedNumber = number.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `$${formattedNumber}`;
};
