import React from 'react'
import { ManagedCheckbox } from 'managed-inputs'

interface SchemaModeSwtichProps {
  schemaMode: string
  changeInputs(props: object): void
}

const SchemaModeSwtich = (props: SchemaModeSwtichProps) => {
  const { schemaMode, changeInputs } = props
  const classNames = { container: 'switch' }
  const checked = schemaMode === 'auto'
  const label = (
    <>
      <div className={`text ${checked ? 'checked' : 'unchecked'}`}>Auto Schema</div>
      <div className={`body ${checked ? 'checked' : 'unchecked'}`}>
        <div className='dot' />
      </div>
    </>
  )
  const onClick = (checked: boolean) => changeInputs({ schemaMode: checked ? 'auto' : 'manual' })
  const inputProps = { checked, classNames, label, onClick }

  return <ManagedCheckbox {...inputProps} />
}

export default SchemaModeSwtich
