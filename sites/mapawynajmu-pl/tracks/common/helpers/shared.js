export function numberOptionsProvider(number) {
  return [{ value: '', text: '' }].concat(
    Array(number)
      .fill()
      .map((_, index) => ({ value: index + 1, text: `${index + 1}` })),
  );
}
