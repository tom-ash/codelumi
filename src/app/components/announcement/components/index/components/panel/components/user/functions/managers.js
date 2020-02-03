import { switches } from '../constants/switches'
import { sorters } from '../constants/sorters'

export function switchesManager() {
  return {
    classNames: { container: 'form-input checkbox' },
    checkboxes: switches.map(switchChecbkox => (
      {
        ref: switchChecbkox.ref,
        checked: this.props.switches[switchChecbkox.ref],
        label: this.languageHandler(switchChecbkox.pl, switchChecbkox.en)
      }
    )),
    onClick: (value, ref) => {
      this.props.changeInputs({
        offset: 0,
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
    onFocusCoverZIndex: 10,
    classNames: { container: 'form-input select' },
    value: sort,
    label: this.languageHandler('Sortuj po', 'Sort by'),
    options: sorters.map(sorter => ({
      value: sorter.value,
      text: this.languageObjectHandler(sorter.text)
    })),
    onSelect: (option) => {
      changeInputs({ sort: option.value, offset: 0 })
      changeControl({ fetch: true, page: 1 })
    }
  }
}
