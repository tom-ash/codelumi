import { switches } from '../constants/switches'
import { sorters } from '../constants/sorters'

export function switchesManager() {
  return {
    classNames: { container: 'form-input checkbox' },
    checkboxes: switches.map(switchChecbkox => (
      {
        ref: switchChecbkox.ref,
        checked: this.props.switches[switchChecbkox.ref],
        label: this.languageHandler(switchChecbkox.polish, switchChecbkox.english)
      }
    )),
    onClick: (value, ref) => {
      this.props.changeInputs({
        switches: {
          ...this.props.switches,
          [ref]: value
        }
      })
      this.props.changeControl({
        fetch: true,
        page: 1
      })
    }
  }
}

export function sortManager() {
  const { sort, changeInputs, changeControl } = this.props
  return {
    classNames: { container: 'form-input select' },
    value: sort,
    label: this.languageHandler('Sortuj po', 'Sort by'),
    options: sorters.map(sorter => ({
      value: sorter.value,
      text: this.languageObjectHandler(sorter.text)
    })),
    onSelect: (option) => {
      changeInputs({ sort: option.value })
      changeControl({ fetch: true, page: 1 })
    }
  }
}

export function paginationManager() {
  const { page, amount, connecting, changeControl } = this.props
  const resultsPerPage = 24
  return {
    classNames: { container: 'list-pagination' },
    display: amount > resultsPerPage ? 'inline-block' : 'none',
    current: +page,
    resultsPerPage,
    resultAmount: +amount,
    onClick: (button) => {
      if (connecting) return

      console.log(button)

      changeControl({
        page: button,
        fetch: true
      })
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