export function destroyManager() {
  return {
    classNames: { container: 'form-input button destroy' },
    label: { pl: 'Tak', en: 'Yes' }['pl'],
    onClick: () => this.destroy(this.props.beingDeleted),
  };
}

export function cancelDestroyManager() {
  return {
    classNames: { container: 'form-input button cancel' },
    label: { pl: 'Anuluj', en: 'Cancel' }['pl'],
    onClick: () => this.props.setControl({ beingDeleted: null }),
  };
}
