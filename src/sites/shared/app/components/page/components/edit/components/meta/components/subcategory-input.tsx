import React from "react"
import { ManagedText } from "managed-inputs"

interface SubcategoryInputProps {
  subcategory: string,
  changeInputs(props: object): void
}

const SubcategoryInput = (props: SubcategoryInputProps) => {
  const { subcategory, changeInputs } = props
  const classNames = { container: 'form-input text' }
  const label = 'Subcategory'
  const value = subcategory
  const onChange = (subcategory: string) => changeInputs({ subcategory })
  const inputProps = { classNames, label, value, onChange }

  return <ManagedText {...inputProps} />
}

export default SubcategoryInput
