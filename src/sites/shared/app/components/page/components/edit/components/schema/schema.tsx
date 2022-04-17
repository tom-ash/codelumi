import React from 'react'
import SchemaModeSwtich from './components/schema-mode-switch'
import AutoSchemaTextarea from './components/auto-schema-textarea'

interface SchemaProps {
  schemaMode: string,
  autoSchema: string,
  changeInputs(props: object): void
}

const Schema = (props: SchemaProps) => {
  const { schemaMode, autoSchema, changeInputs } = props
  const schemaModeSwitchProps = { schemaMode, changeInputs }
  const autoSchemaTextareaProps = { autoSchema, changeInputs }

  return (
    <div className='schema'>
      <SchemaModeSwtich {...schemaModeSwitchProps} />
      {schemaMode === 'auto' && <AutoSchemaTextarea {...autoSchemaTextareaProps} />}
    </div>
  )
}

export default Schema
