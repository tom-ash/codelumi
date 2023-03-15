import React from 'react'
import { useStore } from '../../../../../../functions/store/useStore'
import { SchemaModeSwitch } from './components/schema-mode-switch'
import { AutoSchemaTextarea } from './components/auto-schema-textarea'
import { ManualSchemaTextarea } from './components/manual-schema-textarea'

export const Schema = () => {
  const { state } = useStore()
  const { inputs } = state
  const { schemaMode } = inputs

  return (
    <div className='schema'>
      <SchemaModeSwitch />
      {schemaMode === 'auto' && <AutoSchemaTextarea />}
      {schemaMode === 'manual' && <ManualSchemaTextarea />}
    </div>
  )
}

