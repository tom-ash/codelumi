import React, { useEffect, useState } from 'react'
import { UserEditCell as Cell } from '../cell/cell'
import { GenericAttributeInput } from './generic-attribute.input'

interface GenericAttributeProps {
  title: string
  label: string
  currentValue: string
  error: string
}

export const GenericAttribute = (props: GenericAttributeProps) => {
  const { currentValue, title, label, error } = props
  const [value, setValue] = useState('')

  useEffect(() => setValue(currentValue), [])

  const genericAttributeInputProps = {
    value,
    setValue,
    label,
    error,
  }

  return (
    <Cell
      title={title}
      value={currentValue}
    >
      <GenericAttributeInput {...genericAttributeInputProps} />
    </Cell>
  )
}
