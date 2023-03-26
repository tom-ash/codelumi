import React from 'react'
import { TextInput } from '../../../../../../../../../shared/app/components/support/text-input/text-input'
import { TextInputType } from '../../../../../../../../../shared/app/components/support/text-input/text-input'

export const AreaInput = () => {
  const children = (
    <div className='sqm'>
      m<sup>2</sup>
    </div>
  )

  const textInputProps = {
    inputKey: 'area',
    containerClassNames: 'text-input area',
    type: TextInputType.NUMBER,
    children,
  }

  return <TextInput {...textInputProps} />
}
