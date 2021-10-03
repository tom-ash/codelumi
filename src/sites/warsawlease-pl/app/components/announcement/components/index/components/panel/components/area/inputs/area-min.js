import React from 'react'
import { ManagedText } from 'managed-inputs'

const AreaMin = ({
  langHandler
}) => {
  const classNames={ container: 'panel-input text' }
  const label = langHandler({ pl: 'Min. (m2)', en: 'Min. (sqm)' })

  return (
    <ManagedText
      classNames={classNames}
      label={label}
    />
  )
}

export default AreaMin
