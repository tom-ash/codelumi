import React from 'react'
import PanelColumn from './panel-column'

const Panel = (props: PanelProps) => {
  const { options, minInputKey, maxInputKey, changeInputs, changeControl, showPanelKey } = props

  return (
    <div className='panel'>
      <PanelColumn
        label='Min.'
        options={options}
        changeInputs={changeInputs}
        changeControl={changeControl}
        inputKey={minInputKey}
        showPanelKey={showPanelKey}
      />
      <PanelColumn
        label='Maks.'
        options={options}
        changeInputs={changeInputs}
        changeControl={changeControl}
        inputKey={maxInputKey}
        showPanelKey={showPanelKey}
      />
    </div>
  )
}

export default Panel
