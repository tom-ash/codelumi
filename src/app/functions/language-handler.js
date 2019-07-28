export function languageHandler(polish, english) {
  return this.props.language === 'polish' ? polish : english
}

export function languageObjectHandler(languageObject) {
  languageObject = languageObject || { polish: '', english: '' }
  return this.props.language === 'polish' ? languageObject.polish : languageObject.english
}
