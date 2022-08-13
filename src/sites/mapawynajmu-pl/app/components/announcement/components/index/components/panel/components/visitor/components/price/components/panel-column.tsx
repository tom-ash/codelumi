import React from 'react'

const PanelColum = (props: PanelColumnProps) => {
  const {
    label,
    options = [],
    updateKey,
    changeInputs,
    changeControl
  } = props

  return (
    <div
      className='column'
    >
      <div className='heading'>
        {label}
      </div>
      {options.map(option => (
        <div
          key={option}
          className='option'
          onClick={e => {
            e.stopPropagation()
            changeInputs({ [updateKey]: option, [updateKey.replace('Input', '')]: option })
            // @ts-ignore
            changeControl({ rebuildQueryParams: true, showPricePanel: false })
          }}
        >
          {option}
        </div>
      ))}
    </div>
  )
}

export default PanelColum
