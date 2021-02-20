export function nameManager() {
  const { name, changeInputs, langHandler } = this.props
  const value = name || ''

  return {
    classNames: { container: 'form-input text' },
    label: langHandler({ pl: 'Nazwa strony', en: 'Page Name' }),
    value,
    onChange: value => changeInputs({ name: value })
  }
}
