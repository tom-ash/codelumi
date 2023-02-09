import React from 'react'
import { ManagedText } from 'managed-inputs'

interface SubcategoryInputProps {
  subcategory: string
  setInputs(props: object): void
}

const SubcategoryInput = (props: SubcategoryInputProps) => {
  const { subcategory, setInputs } = props
  const classNames = { container: 'form-input text' }
  const label = 'Subcategory'
  const value = subcategory
  const onChange = (subcategory: string) => setInputs({ subcategory })
  const inputProps = { classNames, label, value, onChange }

  return <ManagedText {...inputProps} />
}

export default SubcategoryInput
