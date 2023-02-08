import React from 'react'

const PanelColum = (props: PanelColumnProps) => {
  const { label, options = [], changeInputs, setControl, inputKey, showPanelKey } = props

  return (
    <div className='column'>
      <div className='heading'>{label}</div>
      {options.map(option => (
        <div
          key={option}
          className='option'
          onClick={e => {
            e.stopPropagation()
            changeInputs({ [inputKey]: option, [inputKey.replace('Input', '')]: option })
            setControl({ rebuildQueryParams: true, [showPanelKey]: false })
          }}
        >
          {option}
        </div>
      ))}
    </div>
  )
}

export default PanelColum
