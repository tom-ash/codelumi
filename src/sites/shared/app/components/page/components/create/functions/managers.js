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

export function saveManager() {
  const { langHandler } = this.props

  return {
    classNames: { container: 'form-input button' },
    label: langHandler({ pl: 'Dodaj stronę', en: 'Add Page' }),
    onClick: () => this.save()
  }
}
