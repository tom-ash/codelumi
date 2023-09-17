import React from 'react'
import { useStore } from '../../../../../../../../../../../shared/app/functions/store/useStore'
import { FloatClear } from '../../../../../../../../../../../shared/app/components/support/float-clear/float-clear'
import { InputSelect } from './components/input-select/input-select'

interface PanelInterface {
  (props: { name: string; supplement: React.ReactElement }): React.ReactElement
}

export const Panel: PanelInterface = props => {
  const { name, supplement } = props
  const { state, dispatch } = useStore()
  const { control, inputs } = state
  const { [`${name}FilterPanel`]: showPanel } = control
  const { [`${name}Options`]: options } = inputs
  const setControl = (value: any) => dispatch({ type: 'control', value })

  return (
    <>
      {showPanel && (
        <div
          className={`panel-container ${name}`}
          onClick={() => setControl({ [`${name}FilterPanel`]: false, rebuildQueryParams: true })}
        />
      )}
      {
        <div className={`panel ${name} ${showPanel ? 'opened' : 'closed'}`}>
          <InputSelect
            name={name}
            options={options}
          />
          {supplement}
          <FloatClear />
        </div>
      }
    </>
  )
}
