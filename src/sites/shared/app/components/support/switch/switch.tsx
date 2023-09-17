import React from 'react'
import { ManagedCheckbox } from 'managed-inputs'
import { useTexts } from '../../../functions/store/use-texts';
import { useInputs } from '../../../functions/store/use-inputs';
import { useDispatch } from 'react-redux';

interface SwitchInterface {
  (props: { switchKey: string; customSwitchValues?: any[]; containerClassNames?: string }): React.ReactElement
}

export const Switch: SwitchInterface = props => {
  const { switchKey, customSwitchValues, containerClassNames } = props
  const swtichValues = customSwitchValues || [true, false]
  const { [`${switchKey}SwitchLabel`]: labelText } = useTexts()
  const { [switchKey]: switchValue } = useInputs()
  const dispatch = useDispatch()
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
