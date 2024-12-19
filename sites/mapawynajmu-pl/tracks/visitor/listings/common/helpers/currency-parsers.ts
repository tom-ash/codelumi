export const currencies = [
  { value: 0, text: 'zł' },
  { value: 1, text: '€' },
  { value: 2, text: '$' },
];

export function parseCurrency(currencyNumber: number) {
  if (currencyNumber === null || currencyNumber === undefined) return;

  return currencies.find((currency) => currency.value === currencyNumber)!.text;
}
