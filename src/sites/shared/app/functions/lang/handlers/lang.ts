import LangHandler from './lang.d'

const langHandler: LangHandler = function(langObject) {
  const { lang } = this.props

  return langObject[lang]
}

export default langHandler
