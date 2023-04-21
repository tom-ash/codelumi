import React from 'react'
import { useStore } from '../../../../../../../../../../../../../../shared/app/functions/store/useStore'

interface SelectInterface {
  (props: { name: string, kind: string, options: string[] }): React.ReactElement
}

export const Select: SelectInterface = props => {
  const { name, kind, options } = props
  const { dispatch } = useStore()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setControl = (value: any) => dispatch({ type: 'control', value })

  return (
    <div className='select'>
      {options.map(option => (
        <div
          className='option'
          onClick={() => {
            setInputs({ [`${name}${kind}`]: option })
            setControl({ [`${name}FilterPanel`]: false, rebuildQueryParams: true })
          }}
        >
          {option}
        </div>
      ))}
    </div>
  )
}
