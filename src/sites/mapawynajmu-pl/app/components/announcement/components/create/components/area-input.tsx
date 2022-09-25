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

  const classNames = { container: 'form-input text area-input' }
  const value = area
  const type = 'number'
  const children = (
    <div className='sqm'>
      {/* @ts-ignore */}
      {langHandler({ pl: <>m<sup>2</sup></>, en: 'sqm' })}
    </div>
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
