import React from 'react'
import { inputs } from '../../../../../constants/inputs'
import { requiredInputs } from '../../../constants/required-inputs'
import { categories } from '../../../../../constants/categories'
import SVG from '../../../../../../support/components/svg/svg'
import sendGaEvent from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const {
  CATEGORY_SELECTED_EVENT,
  AREA_INPUTTED_EVENT
} = analyticEvents

const noError = {
  pl: '',
  en: ''
}

export function categoryManager() {
  const {
    category: { id }
  } = requiredInputs

  const { category: value, errors, changeErrors, lang } = this.props
  const { icon, all: label } = inputs.category

  const {
    category: categoryError
  } = errors

  const categoryOptions = categories.map(category => {
    return { value: category.value, text: category.label[lang]}
  })

  return {
    id: requiredInputs.category.id,
    classNames: { container: 'form-input with-icon select' },
    value,
    label: label[lang],
    options: [{ value: '', text: '' }].concat(categoryOptions),
    children: <>
      <SVG name='category' />
      <SVG name='chevron' />
    </>,
    onFocus: () => changeErrors({ category: noError }),
    onSelect: option => {
      this.onSelectHandler('category', option.value)
      sendGaEvent(CATEGORY_SELECTED_EVENT)
    },
    onBlur: () => this.categoryManager().validate(),
    validate: () => this.handleErrorOnValidate('category', value),
    error: this.langHandler(categoryError)
  }
}

export function areaManager() {
  const {
    create: text
  } = inputs.area

  return {
    id: requiredInputs.area.id,
    classNames: { container: 'form-input with-icon text' },
    value: this.props.area,
    label: this.langHandler(text),
    type: 'number',
    children: (
      <>
        <div className='sqm'>
          {this.langHandler({
            pl: <span>m<span className='sq'>2</span></span>,
            en: 'sqm'
          })}
        </div>
        <SVG name='area' />
      </>
    ),
    onFocus: () => this.props.changeErrors({ area: noError }),
    onChange: value => this.props.changeInputs({ area: value }),
    onBlur: () => {
      this.areaManager().validate()
      sendGaEvent(AREA_INPUTTED_EVENT)
    },
    validate: () => this.handleErrorOnValidate('area', this.props.area),
    error: this.langHandler(this.props.errors.area)
  }
}
