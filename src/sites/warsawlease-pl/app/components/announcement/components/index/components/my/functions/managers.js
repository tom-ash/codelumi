export function destroyManager() {
  return {
    classNames: { container: 'form-input button destroy' },
    label: this.langObjHandler({ pl: 'Tak', en: 'Yes' }),
    onClick: () => this.destroy(this.props.beingDeleted)
  }
}

export function cancelDestroyManager() {
  return {
    classNames: { container: 'form-input button cancel' },
    label: this.langObjHandler({ pl: 'Anuluj', en: 'Cancel' }),
    onClick: () => this.props.changeControl({ beingDeleted: null })
  }
}
