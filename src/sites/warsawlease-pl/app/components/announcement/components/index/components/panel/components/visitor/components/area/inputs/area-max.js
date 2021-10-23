import React from 'react'
import { ManagedText } from 'managed-inputs'

const AreaMax = ({
  langHandler,
  changeInputs,
  areaMax
}) => {
  const classNames={ container: 'panel-input text' }
  const label = langHandler({ pl: 'Maks. (sqm)', en: 'Max. (m2)' })
  const value = areaMax
  const onChange = areaMaxInput => changeInputs({ areaMaxInput })
  const params = { classNames, label, value, onChange }

  return (
    <ManagedText
      { ...params }
    />
  )
}

export default AreaMax
