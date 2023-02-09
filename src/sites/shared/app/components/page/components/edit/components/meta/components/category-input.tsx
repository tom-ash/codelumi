import React from 'react'
import { ManagedText } from 'managed-inputs'

interface CategoryInputProps {
  category: string
  setInputs(props: object): void
}

const CategoryOnInput = (props: CategoryInputProps) => {
  const { category, setInputs } = props
  const classNames = { container: 'form-input text' }
  const label = 'Category'
  const value = category
  const onChange = (category: string) => setInputs({ category })
  const inputProps = { classNames, label, value, onChange }

  return <ManagedText {...inputProps} />
}

export default CategoryOnInput
