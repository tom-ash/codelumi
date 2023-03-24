import React from 'react'
import { ManagedText } from 'managed-inputs'

type AreaInputProps = {
  area: number
  setInputs(attrs: { area: number }): void
}

export function AreaInput(props: AreaInputProps) {
  const { area, setInputs } = props

  const classNames = { container: 'text-input area' }
  
  // TODO: LANG!
  const label = 'Powierzchnia'
  const value = area
  const type = 'number'
  const children = (
    <div className='sqm'>
      {/* @ts-ignore */}
      {<>
        m<sup>2</sup>
      </>}
    </div>
  )
  const onChange = (area: number) => setInputs({ area })
  const areaProps = {
    classNames,
    label,
    value,
    type,
    children,
    onChange,
  }

  return <ManagedText {...areaProps} />
}

export default AreaInput
