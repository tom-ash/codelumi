export function componentDidMount() {
  const {
    showName,
    showEn,
    showPl,
    changeInputs
  } = this.props

  const inputs = {
    name: showName
  }

  if (showEn) {
    const {
      body,
      meta
    } = showEn

    inputs.en = {
      ...showEn,
      body: JSON.stringify(body, null, 2),
      meta: JSON.stringify(meta, null, 2),
    }
  }

  if (showPl) {
    const {
      body,
      meta
    } = showPl

    inputs.pl = {
      ...showPl,
      body: JSON.stringify(body, null, 2),
      meta: JSON.stringify(meta, null, 2)
    }
  }

  changeInputs(inputs)
}
