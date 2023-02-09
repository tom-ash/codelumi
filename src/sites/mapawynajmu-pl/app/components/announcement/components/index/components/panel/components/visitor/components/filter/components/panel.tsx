import React from 'react'
import PanelColumn from './panel-column'

const Panel = (props: PanelProps) => {
  const { options, minInputKey, maxInputKey, setInputs, setControl, showPanelKey } = props

  return (
    <div className='panel'>
      <PanelColumn
        label='Min.'
        options={options}
        setInputs={setInputs}
        setControl={setControl}
        inputKey={minInputKey}
        showPanelKey={showPanelKey}
      />
      <PanelColumn
        label='Maks.'
        options={options}
        setInputs={setInputs}
        setControl={setControl}
        inputKey={maxInputKey}
        showPanelKey={showPanelKey}
      />
    </div>
  )
}

export default Panel
