import React from 'react'
import { inputs } from '../../../../../constants/inputs'
import { requiredInputs } from '../../../constants/required-inputs'
import { categories } from '../../../../../constants/categories'
import { districts } from '../../../../../constants/districts'
import SVG from '../../../../../../support/components/svg/svg'
import { sendGaEvent } from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const {
  CATEGORY_SELECTED_EVENT,
  DISTRICT_SELECTED_EVENT,
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

  const { category: value, errors, changeErrors, lang, svgs } = this.props
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
      <SVG pathData={svgs && svgs.category} />
      <SVG pathData={svgs && svgs.chevron} />
    </>,
    onFocus: () => changeErrors({ category: noError }),
    onSelect: option => {
      this.onSelectHandler('category', option.value)
      sendGaEvent(CATEGORY_SELECTED_EVENT)
    },
    onBlur: () => this.categoryManager().validate(),
    validate: () => this.handleErrorOnValidate('category', value),
    error: this.langObjHandler(categoryError)
  }
}

export function districtManager() {
  const {
    all: text
  } = inputs.district

  const {
    svgs
  } = this.props

  return {
    id: requiredInputs.district.id,
    classNames: { container: 'form-input with-icon select' },
    value: this.props.district,
    label: this.langObjHandler(text),
    options: [{ value: '', text: '' }].concat(districts),
    children: <>
      <SVG pathData={svgs && svgs.city} />
      <SVG pathData={svgs && svgs.chevron} />
    </>,
    onFocus: () => this.props.changeErrors({ district: noError }),
    onSelect: option => {
      this.onSelectHandler('district', option.value)
      sendGaEvent(DISTRICT_SELECTED_EVENT)
    },
    onBlur: () => this.districtManager().validate(),
    validate: () => this.handleErrorOnValidate('district', this.props.district),
    error: this.langObjHandler(this.props.errors.district)
  }
}

export function areaManager() {
  const {
    icon,
    create: text
  } = inputs.area

  const {
    svgs
  } = this.props

  return {
    id: requiredInputs.area.id,
    classNames: { container: 'form-input with-icon text' },
    value: this.props.area,
    label: this.langObjHandler(text),
    type: 'number',
    children: (
      <>
        <div className='sqm'>
          {this.langObjHandler({
            pl: <span>m<span className='sq'>2</span></span>,
            en: 'sqm'
          })}
        </div>
        <SVG pathData={svgs && svgs.area} />
      </>
    ),
    onFocus: () => this.props.changeErrors({ area: noError }),
    onChange: value => this.props.changeInputs({ area: value }),
    onBlur: () => {
      this.areaManager().validate()
      this.getRentAmounts()
      sendGaEvent(AREA_INPUTTED_EVENT)
    },
    validate: () => this.handleErrorOnValidate('area', this.props.area),
    error: this.langObjHandler(this.props.errors.area)
  }
}
