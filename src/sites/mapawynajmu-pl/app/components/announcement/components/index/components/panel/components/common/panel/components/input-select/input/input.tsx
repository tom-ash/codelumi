import React from 'react'
import { useStore } from '../../../../../../../../../../../../../../shared/app/functions/store/useStore'
import { TextInput } from '../../../../../../../../../../../../../../shared/app/components/support/text-input/text-input'
import { TextInputType } from '../../../../../../../../../../../../../../shared/app/components/support/text-input/text-input'

interface InputInterface {
  (props: { name: string, kind: string }): React.ReactElement
}

export const Input: InputInterface = props => {
  const { dispatch } = useStore()
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const onEnter = () => setControl({ [`${name}FilterPanel`]: false, rebuildQueryParams: true })
  const { name, kind } = props
  const textInputProps = {
    inputKey: `${name}${kind}`,
    containerClassNames: `input ${name} ${kind.toLowerCase()}`,
    onEnter,
    type: TextInputType.NUMBER,
  }

  return <TextInput {...textInputProps} />
}
