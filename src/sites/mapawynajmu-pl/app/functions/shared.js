export function handleLanguageVersions(languageVersion, bilingualObject) {
  return languageVersion === 'pl' ? bilingualObject.pl : bilingualObject.en
}

export function numberOptionsProvider(number) {
  return [{ value: '', text: '' }].concat(
    Array(number)
      .fill()
      .map((_, index) => ({ value: index + 1, text: `${index + 1}` }))
  )
}
