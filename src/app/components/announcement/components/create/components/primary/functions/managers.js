import React from 'react'
import { inputs } from '../../../../../constants/inputs'
import { requiredInputs } from '../../../constants/required-inputs'
import { categories } from '../../../../../constants/categories'
import { districts } from '../../../../../constants/districts'
import ScalableVectorGraphic from '../../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'
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

  const {
    category: value,
    errors,
    changeErrors,
    lang,
    scalableVectorGraphics
  } = this.props

  const {
    icon,
    all: label
  } = inputs.category

  const {
    category: categoryError
  } = errors

  const categoryOptions = categories.map(category => {
    return { value: category.value, text: category.label[lang]}
  })

  return {
    id: requiredInputs.category.id,
    classNames: { container: 'form-input select' },
    value,
    label: label[lang],
    options: [{ value: '', text: '' }].concat(categoryOptions),
    children: <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.chevron} />,
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
    scalableVectorGraphics
  } = this.props

  return {
    id: requiredInputs.district.id,
    classNames: { container: 'form-input select' },
    value: this.props.district,
    label: this.langObjHandler(text),
    options: [{ value: '', text: '' }].concat(districts),
    children: <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.chevron} />,
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
    scalableVectorGraphics
  } = this.props

  return {
    id: requiredInputs.area.id,
    classNames: { container: 'form-input text' },
    value: this.props.area,
    label: this.langObjHandler(text),
    type: 'number',
    children: (
      <React.Fragment>
        <div className='sqm'>
          {this.langObjHandler({
            pl: <span>m<span className='sq'>2</span></span>,
            en: 'sqm'
          })}
        </div>
        <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.pen} />
      </React.Fragment>
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
