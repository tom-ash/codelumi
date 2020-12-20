export function componentDidMount() {
  const {
    showName,
    showEn: {
      title: showEnTitle,
      body: showEnBody
    },
    showPl: {
      title: showPlTitle,
      body: showPlBody
    },
    changeInputs
  } = this.props

  changeInputs({
    name: showName,
    en: {
      title: showEnTitle,
      body: JSON.stringify(showEnBody, null, 2)
    },
    pl: {
      title: showPlTitle,
      body: JSON.stringify(showPlBody, null, 2)
    }
  })
}
