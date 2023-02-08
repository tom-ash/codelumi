import React from 'react'
import { ManagedText } from 'managed-inputs'

type AreaInputProps = {
  area: number
  setInputs(attrs: { area: number }): void
  langHandler: LangHandler
}

export function AreaInput(props: AreaInputProps) {
  const { area, setInputs, langHandler } = props

  const classNames = { container: 'text-input area' }
  // @ts-ignore
  const label = langHandler({ pl: 'Powierzchnia', en: 'Area' })
  const value = area
  const type = 'number'
  const children = (
    <div className='sqm'>
      {/* @ts-ignore */}
      {langHandler({
        pl: (
          <>
            m<sup>2</sup>
          </>
        ),
        en: 'sqm',
      })}
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
