import React from "react"
import { ManagedCheckbox } from "managed-inputs"

function OnlineInput(props) {
  const { checked, changeInputs } = props
  const classNames = { container: 'online-switch' }
  const label = (
    <>
      <div className={`text ${checked ? 'online' : 'offline'}`}>
        Online
      </div>
      <div className={`body ${checked ? 'online' : 'offline'}`}>
        <div className='dot' />
      </div>
    </>
  )
  const onClick = online => {
    changeInputs({ online })
  }
  const inputProps = { checked: !!checked, classNames, label, onClick }

  return <ManagedCheckbox {...inputProps} />
}

export default OnlineInput
