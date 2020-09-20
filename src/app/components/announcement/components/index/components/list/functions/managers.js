export function destroyManager() {
  return {
    classNames: { container: 'form-input button destroy' },
    label: this.languageHandler('Tak', 'Yes'),
    onClick: () => this.destroy(this.props.beingDeleted)
  }
}

export function cancelDestroyManager() {
  return {
    classNames: { container: 'form-input button cancel' },
    label: this.languageHandler('Anuluj', 'Cancel'),
    onClick: () => this.props.changeControl({ beingDeleted: null })
  }
}
