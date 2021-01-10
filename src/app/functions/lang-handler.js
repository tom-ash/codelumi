export function langHandler(pl, en) {
  return this.props.lang === 'pl' ? pl : en
}

export function langObjHandler(languageObject) {
  languageObject = languageObject || { pl: '', en: '' }
  return this.props.lang === 'pl' ? languageObject.pl : languageObject.en
}
