import React from 'react'
import { ManagedText } from 'managed-inputs'

const AreaMax = ({
  langHandler,
  changeInputs,
  areaMax
}) => {
  const classNames={ container: 'panel-input text' }
  const label = langHandler({ pl: 'Max. (m2)', en: 'Maks. (sqm)' })
  const value = areaMax
  const onChange = areaMax => changeInputs({ areaMax })
  const params = { classNames, label, value, onChange }

  return (
    <ManagedText
      { ...params }
    />
  )
}

export default AreaMax
