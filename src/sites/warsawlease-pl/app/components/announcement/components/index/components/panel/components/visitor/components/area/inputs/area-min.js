import React from 'react'
import { ManagedText } from 'managed-inputs'

const AreaMin = ({
  langHandler,
  changeInputs,
  areaMin
}) => {
  const classNames={ container: 'panel-input text' }
  const label = langHandler({ pl: 'Min. (m2)', en: 'Min. (sqm)' })
  const value = areaMin
  const onChange = areaMin => changeInputs({ areaMin })
  const params = { classNames, label, value, onChange }

  return (
    <ManagedText
      { ...params }
    />
  )
}

export default AreaMin
