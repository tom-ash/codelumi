export function numberOptionsProvider(limit: number) {
  return [{ value: '', text: '' }].concat(
    // @ts-ignore
    Array(limit)
      // @ts-ignore
      .fill()
      .map((_, index) => ({ value: index + 1, text: `${index + 1}` })),
  );
}
