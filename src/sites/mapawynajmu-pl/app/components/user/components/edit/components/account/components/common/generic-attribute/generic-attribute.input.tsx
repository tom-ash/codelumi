import React from 'react'
import { ManagedText } from 'managed-inputs'
import { Dispatch } from 'redux'
import { genericAttributeValidator } from './generic-attribute.validator'

interface GenericAttributeInputProps {
  attrName: string
  label: string
  value: string
  error: string
  match?: RegExp
  errorToSet: LangObject
  emptyErrorToSet: LangObject
  setValue: React.Dispatch<React.SetStateAction<string>>
  dispatch: Dispatch
}

export const GenericAttributeInput = (props: GenericAttributeInputProps) => {
  const { attrName, label, value, error, match, errorToSet, setValue, dispatch } = props

  const inputProps = {
    classNames: { container: 'text-input' },
    label,
    value,
    error,
    onChange: (changedValue: string) => {
      setValue(changedValue)
    },
    onEnter: () => {
      console.log('TODO')
    },
    onFocus: () => {
      dispatch({ type: 'user/edit/errors', value: { [attrName]: value } })
    },
    onBlur: () => {
      match &&
      genericAttributeValidator({
        value,
        match,
        errorToSet,
        dispatch,
      })
    },
  }

  return <ManagedText {...inputProps} />
}
