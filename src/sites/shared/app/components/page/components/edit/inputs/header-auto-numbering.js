import React from "react"
import { ManagedCheckbox } from "managed-inputs"

function HeaderAutonumberingInput(props) {
  const { checked, changeInputs } = props
  const classNames = { container: 'switch' }
  const label = (
    <>
      <div className={`text ${checked ? 'checked' : 'unchecked'}`}>
        Header Autonumbering
      </div>
      <div className={`body ${checked ? 'checked' : 'unchecked'}`}>
        <div className='dot' />
      </div>
    </>
  )
  const onClick = headerAutonumbering => {
    changeInputs({ headerAutonumbering })
  }
  const inputProps = { checked: !!checked, classNames, label, onClick }

  return <ManagedCheckbox {...inputProps} />
}

export default HeaderAutonumberingInput
