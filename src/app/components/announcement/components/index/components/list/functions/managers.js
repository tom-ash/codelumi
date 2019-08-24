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
    onClick: () => { this.props.changeInputs({ switches: { ...this.props.switches, [ref]: value}})
                     this.props.changeControl({ fetched: false }) }
  })
}

export function sortManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'form-input select' },
    value: this.props.sort,
    label: this.languageHandler('Sortuj po', 'Sort by'),
    options: sorters.map(sorter => ({ value: sorter.value, text: this.languageObjectHandler(sorter.text) })),
    onSelect: () => { this.props.changeInputs({ sort: option.value })
                      this.props.changeControl({ fetched: false }) }
  })
}

export function paginationManager(aspect, button) {
  return managerAgent(aspect, {
    classNames: { container: 'list-pagination' },
    current: +this.props.page,
    resultsPerPage: 24,
    resultAmount: +this.props.amount,
    onClick: () => {
      if (this.props.connecting) return
      this.props.changeControl({ page: button, fetched: false })
      window.scrollTo(0, 0)
    }
  })
}