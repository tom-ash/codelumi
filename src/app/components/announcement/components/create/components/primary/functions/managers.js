import React from 'react'
import { inputs } from '../../../../../constants/inputs'
import { requiredInputs } from '../../../constants/required-inputs'
import { categories } from '../../../../../constants/categories'
import { districts } from '../../../../../constants/districts'

const noError = { pl: '', en: '' }

export function categoryManager() {

  const {
    category: { id }
  } = requiredInputs
  const {
    category: value,
    errors,
    changeErrors,
    changeInputs,
    language
  } = this.props
  const {
    icon,
    all: label
  } = inputs.category
  const {
    category: categoryError
  } = errors

  const categoryOptions = categories.map(category => {

    return { value: category.value, text: category.label[language]}
  })

  return {
    id: requiredInputs.category.id,
    classNames: { container: 'form-input select' },
    value,
    label: label[language],
    options: [{ value: '', text: '' }].concat(categoryOptions),
    children: <i className="fas fa-chevron-down" />,
    onFocus: () => this.props.changeErrors({ category: noError }),
    onSelect: (option) => this.onSelectHandler('category', option.value),
    onBlur: () => this.categoryManager().validate(),
    validate: () => this.handleErrorOnValidate('category', this.props.district),
    error: this.languageObjectHandler(categoryError)
  }
}

export function districtManager() {
  const {
    icon,
    all: text
  } = inputs.district

  return {
    id: requiredInputs.district.id,
    classNames: { container: 'form-input select' },
    value: this.props.district,
    label: this.languageObjectHandler(text),
    options: [{ value: '', text: '' }].concat(districts),
    children: <i className="fas fa-chevron-down" />,
    onFocus: () => this.props.changeErrors({ district: noError }),
    onSelect: (option) => this.onSelectHandler('district', option.value),
    onBlur: () => this.districtManager().validate(),
    validate: () => this.handleErrorOnValidate('district', this.props.district),
    error: this.languageObjectHandler(this.props.errors.district)
  }
}

export function areaManager() {
  const {
    icon,
    create: text
  } = inputs.area

  return {
    id: requiredInputs.area.id,
    classNames: { container: 'form-input text' },
    value: this.props.area,
    match: /^\d+$/,
    label: this.languageObjectHandler(text),
    children: (
      <React.Fragment>
      <i className='fas fa-pen' />
      <div className='sqm'>
        {this.languageObjectHandler({
          pl: <span>m<span className='sq'>2</span></span>,
          en: 'sqm'
        })}
      </div>
      </React.Fragment>
    ),
    onFocus: () => this.props.changeErrors({ area: noError }),
    onChange: (value) => this.props.changeInputs({ area: value }),
    onBlur: () => {
      this.areaManager().validate()
      this.getRentAmounts()
    },
    validate: () => this.handleErrorOnValidate('area', this.props.area),
    error: this.languageObjectHandler(this.props.errors.area)
  }
}


