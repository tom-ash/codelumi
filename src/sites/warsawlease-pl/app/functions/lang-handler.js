function langHandler(languageObject) {
  languageObject = languageObject || { pl: '', en: '' }
  return this.props.lang === 'pl' ? languageObject.pl : languageObject.en
}

export default langHandler
