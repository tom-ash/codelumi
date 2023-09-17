import React from 'react'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
import { SVG } from '../../../../../../../../../../../shared/app/components/support/svg/svg'

interface FilterInterface {
  (props: { name: string; panel: React.ReactElement }): React.ReactElement
}

export const Filter: FilterInterface = props => {
  const { name, panel } = props
  const { state, dispatch } = useStore()
  const { texts, data, inputs } = state
  const value = inputs[name]
  const { [`${name}SvgName`]: svgName } = data
  const placeholder = texts[`${name}InputPlaceholder`]
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const onClick = () => setControl({ [`${name}FilterPanel`]: true })

  return (
    <div className={`filter ${name}`}>
      <SVG name={svgName} />
      <div
        className='input'
        onClick={onClick}
      >
        {value ? value : placeholder}
      </div>
      {panel}
    </div>
  )
}
