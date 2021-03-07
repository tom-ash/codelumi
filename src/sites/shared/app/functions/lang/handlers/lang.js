const PL = 'pl'
const EN = 'en'
const LANGS = { [PL]: PL, [EN]: EN }

function langHandler(langObject) {
  const { lang } = this.props

  return langObject[lang]
}

export default langHandler
