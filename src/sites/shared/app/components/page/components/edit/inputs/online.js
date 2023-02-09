import React from 'react'
import { ManagedCheckbox } from 'managed-inputs'

function OnlineInput(props) {
  const { checked, setInputs } = props
  const classNames = { container: 'switch' }
  const label = (
    <>
      <div className={`text ${checked ? 'checked' : 'unchecked'}`}>Online</div>
      <div className={`body ${checked ? 'checked' : 'unchecked'}`}>
        <div className='dot' />
      </div>
    </>
  )
  const onClick = online => {
    setInputs({ online })
  }
  const inputProps = { checked: !!checked, classNames, label, onClick }

  return <ManagedCheckbox {...inputProps} />
}

export default OnlineInput
