import React, { useEffect, useState } from 'react'
import { Dispatch } from 'redux'
import { UserEditCell as Cell } from '../cell/cell'
import { GenericAttributeInput } from './generic-attribute.input'
import { GenericAttributeSubmit } from './generic-attribute.submit'

interface GenericAttributeProps {
  attrName: string
  title: string
  label: string
  currentValue: string
  error: string
  errorToSet: LangObject
  emptyErrorToSet: LangObject
  submitLabel: string
  match?: RegExp
  dispatch: Dispatch
}

export const GenericAttribute = (props: GenericAttributeProps) => {
  const { attrName, currentValue, title, label, error, errorToSet, emptyErrorToSet, submitLabel, match, dispatch } =
    props
  const [value, setValue] = useState('')
  const [connecting, setConnecting] = useState(false)

  useEffect(() => setValue(currentValue), [])

  const genericAttributeInputProps = {
    connecting,
    attrName,
    value,
    label,
    match,
    error,
    errorToSet,
    emptyErrorToSet,
    setValue,
    dispatch,
    setConnecting,
  }

  const genericAttributeSubmitProps = {
    label: submitLabel,
    connecting,
    attrName,
    value,
    match,
    error,
    errorToSet,
    setConnecting,
    dispatch,
  }

  return (
    <Cell title={title} value={currentValue}>
      <GenericAttributeInput {...genericAttributeInputProps} />
      <GenericAttributeSubmit {...genericAttributeSubmitProps} />
    </Cell>
  )
}
