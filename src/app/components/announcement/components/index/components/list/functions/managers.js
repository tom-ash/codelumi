import { managerAgent } from 'managed-inputs'
import { switches } from '../constants/switches'
import { sorters } from '../constants/sorters'

export function switchesManager(aspect, value, ref) {
  return managerAgent(aspect, {
    classNames: { container: 'form-input checkbox'},
    checkboxes: switches.map(switchChecbkox => (
      { ref: switchChecbkox.ref, checked: this.props.switches[switchChecbkox.ref],
        label: this.languageHandler(switchChecbkox.polish, switchChecbkox.english) }
    )),
    onClick: () => {
      this.props.changeInputs({ switches: { ...this.props.switches, [ref]: value } })
      this.props.changeControl({ fetch: true, page: 1 })
    }
  })
}

export function sortManager(aspect, option) {
  const { sort, changeInputs, changeControl } = this.props
  return managerAgent(aspect, {
    classNames: { container: 'form-input select' },
    value: sort,
    label: this.languageHandler('Sortuj po', 'Sort by'),
    options: sorters.map(sorter => ({ value: sorter.value, text: this.languageObjectHandler(sorter.text) })),
    onSelect: () => {
      changeInputs({ sort: option.value })
      changeControl({ fetch: true, page: 1 })
    }
  })
}

export function paginationManager(aspect, button) {
  const { page, amount, connecting, changeControl } = this.props
  const resultsPerPage = 24
  return managerAgent(aspect, {
    classNames: { container: 'list-pagination' },
    display: amount > resultsPerPage ? 'inline-block' : 'none',
    current: +page,
    resultsPerPage,
    resultAmount: +amount,
    onClick: () => {
      if (connecting) return
      changeControl({ page: button, fetch: true })
      window.scrollTo(0, 0)
    }
  })
}

export function destroyManager(action) {
  return managerAgent(action, {
    classNames: { container: 'form-input button destroy' },
    label: this.languageHandler('Tak', 'Yes'),
    onClick: () => this.destroy(this.props.beingDeleted)
  })
}

export function cancelDestroyManager(action) {
  return managerAgent(action, {
    classNames: { container: 'form-input button cancel' },
    label: this.languageHandler('Anuluj', 'Cancel'),
    onClick: () => this.props.changeControl({ beingDeleted: null })
  })
}