import React from "react"
import { ManagedText } from "managed-inputs"

interface CategoryInputProps {
  category: string,
  changeInputs(props: object): void
}

const CategoryOnInput = (props: CategoryInputProps) => {
  const { category, changeInputs } = props
  const classNames = { container: 'form-input text' }
  const label = 'Category'
  const value = category
  const onChange = (category: string) => changeInputs({ category })
  const inputProps = { classNames, label, value, onChange }

  return <ManagedText {...inputProps} />
}

export default CategoryOnInput
