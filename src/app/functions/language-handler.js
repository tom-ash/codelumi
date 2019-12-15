export function languageHandler(pl, en) {
  return this.props.language === 'pl' ? pl : en
}

export function languageObjectHandler(languageObject) {
  languageObject = languageObject || { pl: '', en: '' }
  return this.props.language === 'pl' ? languageObject.pl : languageObject.en
}
