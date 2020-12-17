export function componentDidMount() {
  const {
    showName: name,
    showTitle: title,
    showBody: {
      en,
      pl
    },
    changeInputs
  } = this.props

  changeInputs({
    name,
    title,
    body: {
      en: JSON.stringify(en, null, 2),
      pl: JSON.stringify(pl, null, 2)
    }
  })
}
