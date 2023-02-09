import React from 'react'
import SchemaModeSwtich from './components/schema-mode-switch'
import AutoSchemaTextarea from './components/auto-schema-textarea'
import ManualSchemaTextarea from './components/manual-schema-textarea'

interface SchemaProps {
  schemaMode: string
  autoSchema: string
  manualSchema: string
  setInputs(props: object): void
}

const Schema = (props: SchemaProps) => {
  const { schemaMode, autoSchema, manualSchema, setInputs } = props
  const schemaModeSwitchProps = { schemaMode, setInputs }
  const autoSchemaTextareaProps = { autoSchema, setInputs }
  const manualSchemaTextareaProps = { manualSchema, setInputs }

  return (
    <div className='schema'>
      <SchemaModeSwtich {...schemaModeSwitchProps} />
      {schemaMode === 'auto' && <AutoSchemaTextarea {...autoSchemaTextareaProps} />}
      {schemaMode === 'manual' && <ManualSchemaTextarea {...manualSchemaTextareaProps} />}
    </div>
  )
}

export default Schema
