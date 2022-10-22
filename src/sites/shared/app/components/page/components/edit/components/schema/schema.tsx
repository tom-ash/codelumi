import React from 'react'
import SchemaModeSwtich from './components/schema-mode-switch'
import AutoSchemaTextarea from './components/auto-schema-textarea'
import ManualSchemaTextarea from './components/manual-schema-textarea'

interface SchemaProps {
  schemaMode: string
  autoSchema: string
  manualSchema: string
  changeInputs(props: object): void
}

const Schema = (props: SchemaProps) => {
  const { schemaMode, autoSchema, manualSchema, changeInputs } = props
  const schemaModeSwitchProps = { schemaMode, changeInputs }
  const autoSchemaTextareaProps = { autoSchema, changeInputs }
  const manualSchemaTextareaProps = { manualSchema, changeInputs }

  return (
    <div className='schema'>
      <SchemaModeSwtich {...schemaModeSwitchProps} />
      {schemaMode === 'auto' && <AutoSchemaTextarea {...autoSchemaTextareaProps} />}
      {schemaMode === 'manual' && <ManualSchemaTextarea {...manualSchemaTextareaProps} />}
    </div>
  )
}

export default Schema
