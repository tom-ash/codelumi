import React from 'react'
import { SchemaModeSwitch } from './components/schema-mode-switch'
import { AutoSchemaTextarea } from './components/auto-schema-textarea'
import { ManualSchemaTextarea } from './components/manual-schema-textarea'
import { useInputs } from '../../../../../../functions/store/use-inputs'

export const Schema = () => {
  const { schemaMode } = useInputs()

  return (
    <div className='schema'>
      <SchemaModeSwitch />
      {schemaMode === 'auto' && <AutoSchemaTextarea />}
      {schemaMode === 'manual' && <ManualSchemaTextarea />}
    </div>
  )
}
