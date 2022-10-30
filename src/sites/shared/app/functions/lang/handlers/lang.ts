export const langHandler: LangHandler = function (langObject) {
  const { lang } = this.props

  return langObject[lang]
}
