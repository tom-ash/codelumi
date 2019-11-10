export function handleLanguageVersions(languageVersion, bilingualObject) {
  return languageVersion === 'polish' ? bilingualObject.polish : bilingualObject.english
}

export function numberOptionsProvider(number) {
  return [{ value: '', text: '' }].concat(Array(number).fill().map((_, index) => (
    { value: index + 1, text: `${index + 1}` }))
  )
}
