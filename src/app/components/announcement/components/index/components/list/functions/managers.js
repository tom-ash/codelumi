export function paginationManager() {
  const { offset, amount, connecting, changeControl, changeInputs } = this.props
  const resultsPerPage = 10

  return {
    classNames: { container: 'list-pagination' },
    display: amount > resultsPerPage ? 'inline-block' : 'none',
    current: +offset / resultsPerPage + 1,
    resultsPerPage,
    resultAmount: +amount,
    onClick: (button) => {
      if (connecting) return
      changeControl({ fetch: true })
      changeInputs({ offset: button * resultsPerPage - resultsPerPage })
      window.scrollTo(0, 0)
    }
  }
}

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
