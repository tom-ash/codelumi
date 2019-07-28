import { managerAgent } from 'managed-inputs'
import { buildSelectCategories } from '../../../../../functions/build-select-categories'
import { buildSelectDistricts } from '../../../../../functions/build-select-districts'
import { changeRoute } from '../../../../../../../functions/routers'

export function categoryManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'index-select' },
    value: this.props.category,
    label: this.languageHandler('Kategoria', 'Category'),
    options: buildSelectCategories.call(this),
    onSelect: () => {
      this.props.changeInputs({ category: option.value })
      this.props.changeControl({ fetchAmount: true })
    }
  })
}

export function districtManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'index-select' },
    value: this.props.district,
    label: this.languageHandler('Dzielnica', 'District'),
    options: buildSelectDistricts.call(this),
    onSelect: () => {
      this.props.changeInputs({ district: option.value })
      this.props.changeControl({ fetchAmount: true })
    }
  })
}

export function buttonManager(action) {
  return managerAgent(action, {
    classNames: { container: 'index-button' },
    label: this.buttonLabelHandler(),
    onClick: () => {
      changeRoute.call(this, null, 'searchResults', this.buildUrlParameters())
    }
  })
}

