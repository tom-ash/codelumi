import React from "react"
import SVG from '../../../../../../../shared/app/components/support/svg/svg'
import { ManagedText } from 'managed-inputs'

type AreaInputProps = {
  area: number,
  changeInputs(attrs: { area: number }): void
  langHandler: LangHandler
}

export function AreaInput(props: AreaInputProps) {
  const {
    area,
    changeInputs,
    langHandler
  } = props

  console.log(langHandler)

  const classNames = { container: 'form-input with-icon text' }
  const value = area
  const type = 'number'
  const children = (
    <>
      <div className='sqm'>
        {/* @ts-ignore */}
        {langHandler({ pl: <span>m<span className='sq'>2</span></span>, en: 'sqm' })}
      </div>
      {/* @ts-ignore */}
      <SVG name='area' />
    </>
  )
  const onChange = (area: number) => changeInputs({ area })
  const areaProps = {
    classNames,
    value,
    type,
    children,
    onChange
  }

  return <ManagedText {...areaProps} />
}

export default AreaInput
