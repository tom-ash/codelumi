function langHandler(langObject) {
  langObject = langObject || { pl: '', en: '' }
  return this.props.lang === 'pl' ? langObject.pl : langObject.en
}

export default langHandler
