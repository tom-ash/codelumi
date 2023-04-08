import React from 'react'
import { useStore } from '../../../functions/store/useStore'
import { ManagedCheckbox } from 'managed-inputs'

interface SwitchInterface {
  (props: { switchKey: string; customSwitchValues?: any[]; containerClassNames?: string }): React.ReactElement
}

export const Switch: SwitchInterface = props => {
  const { switchKey, customSwitchValues, containerClassNames } = props
  const swtichValues = customSwitchValues || [true, false]
  const { state, dispatch } = useStore()
  const { texts, inputs } = state
  const { [`${switchKey}SwitchLabel`]: labelText } = texts
  const { [switchKey]: switchValue } = inputs
  const classNames = { container: containerClassNames ? `${containerClassNames} switch` : 'switch' }
  const checked = switchValue === swtichValues[0]
  const label = (
    <>
      <div className={`text ${checked ? 'checked' : 'unchecked'}`}>{labelText}</div>
      <div className={`body ${checked ? 'checked' : 'unchecked'}`}>
        <div className='dot' />
      </div>
    </>
  )
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const onClick = (checked: boolean) => setInputs({ [switchKey]: checked ? swtichValues[0] : swtichValues[1] })

  const checkboxProps = { checked, classNames, label, onClick }

  return <ManagedCheckbox {...checkboxProps} />
}
