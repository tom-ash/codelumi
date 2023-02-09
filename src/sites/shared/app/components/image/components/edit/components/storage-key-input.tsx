import React from 'react'
import { ManagedText } from 'managed-inputs'

interface StorageKeyInputProps {
  storageKey: string
  setData(props: object): void
}

const StorageKeyInput = (props: StorageKeyInputProps) => {
  const { storageKey, setData } = props
  const classNames = { container: 'form-input text storage-key' }
  const label = 'Storage Key'
  const value = storageKey
  const onChange = (storageKey: string) => setData({ storageKey })
  const inputProps = { classNames, label, value, onChange }

  return <ManagedText {...inputProps} />
}

export default StorageKeyInput
