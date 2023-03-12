import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/route-generic'

export function nameManager() {
  const { inputtedName, setInputs, langHandler } = this.props
  const value = inputtedName || ''

  return {
    classNames: { container: 'form-input text' },
    label: langHandler({ pl: 'Nazwa strony', en: 'Page Name' }),
    value,
    onChange: value => setInputs({ inputtedName: value }),
  }
}

export function plVerManager(props) {
  const { path, lang, buildUrl } = props
  const href = buildUrl({ path })
  const hrefLang = lang
  const label = path
  const onClick = () => changeUrl({ href })

  return { href, hrefLang, label, onClick }
}

export function enVerManager(props) {
  const { path, lang, buildUrl } = props
  const href = buildUrl({ path })
  const hrefLang = lang
  const label = path
  const onClick = () => changeUrl({ href })

  return { href, hrefLang, label, onClick }
}
