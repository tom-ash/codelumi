import React from 'react'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
import { TextInput } from '../../../../../../../../../../../shared/app/components/support/text-input/text-input'
import { SVG } from '../../../../../../../../../../../shared/app/components/support/svg/svg'

interface FilterInterface {
  (props: { name: string; panel: React.ReactElement }): React.ReactElement
}

export const Filter: FilterInterface = props => {
  const { name, panel } = props
  const { state, dispatch } = useStore()
  const { data } = state
  const { [`${name}SvgName`]: svgName } = data
  const children = <SVG name={svgName} />

  const setControl = (value: any) => dispatch({ type: 'control', value })
  const onClickCallback = () => setControl({ [`${name}FilterPanel`]: true })

  const textInputProps = {
    inputKey: name,
    containerClassNames: `text-input filter ${name}`,
    children,
    disabled: true,
    onClickCallback,
  }

  return (
    <div className={`filter ${name}`}>
      <TextInput {...textInputProps} />
      {panel}
    </div>
  )
}
