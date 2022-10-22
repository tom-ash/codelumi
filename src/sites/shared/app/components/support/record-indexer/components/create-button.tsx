import React from 'react'
import { ManagedButton } from 'managed-inputs'

interface CreateButtonProps {
  create(): void
}

export function CreateButton(props: CreateButtonProps) {
  const { create } = props
  const classNames = { container: 'form-input button' }
  const label = 'Create'
  const onClick = create
  const buttonProps = { classNames, label, onClick }

  return <ManagedButton {...buttonProps} />
}

export default CreateButton
