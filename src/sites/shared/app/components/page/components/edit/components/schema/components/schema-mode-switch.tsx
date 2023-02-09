import React from 'react'
import { ManagedCheckbox } from 'managed-inputs'

interface SchemaModeSwtichProps {
  schemaMode: string
  setInputs(props: object): void
}

const SchemaModeSwtich = (props: SchemaModeSwtichProps) => {
  const { schemaMode, setInputs } = props
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
  const onClick = (checked: boolean) => setInputs({ schemaMode: checked ? 'auto' : 'manual' })
  const inputProps = { checked, classNames, label, onClick }

  return <ManagedCheckbox {...inputProps} />
}

export default SchemaModeSwtich
