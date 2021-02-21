export function nameManager() {
  const { inputtedName, changeInputs, langHandler } = this.props
  const value = inputtedName || ''

  return {
    classNames: { container: 'form-input text' },
    label: langHandler({ pl: 'Nazwa strony', en: 'Page Name' }),
    value,
    onChange: value => changeInputs({ inputtedName: value })
  }
}
