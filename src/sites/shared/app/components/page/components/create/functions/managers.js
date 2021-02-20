export function nameManager() {
  const { name, changeInputs } = this.props

  return {
    classNames: { container: 'form-input text' },
    label: 'Name',
    value: name,
    onChange: value => changeInputs({ name: value })
  }
}

export function saveManager() {
  return {
    classNames: { container: 'form-input button' },
    label: 'Save',
    onClick: () => this.save()
  }
}
