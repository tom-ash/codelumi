export function nameManager() {
  const { inputtedName, changeInputs, langHandler } = this.props
  const value = inputtedName || ''

  return {
    classNames: { container: 'form-input text' },
    label: langHandler({ pl: 'Nazwa strony', en: 'Page Name' }),
    value,
    onChange: value => changeInputs({ inputtedName: value }),
  }
}

export function plVerManager(props) {
  const { path, lang, changeRoute, buildUrl } = props
  const href = buildUrl({ path })
  const hrefLang = lang
  const label = path
  const onClick = () => changeRoute({ href })

  return { href, hrefLang, label, onClick }
}

export function enVerManager(props) {
  const { path, lang, changeRoute, buildUrl } = props
  const href = buildUrl({ path })
  const hrefLang = lang
  const label = path
  const onClick = () => changeRoute({ href })

  return { href, hrefLang, label, onClick }
}
