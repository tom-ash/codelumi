import React from 'react'
import PanelColumn from './panel-column'

const Panel = (props: PanelProps) => {
  const { options, minInputKey, maxInputKey, changeInputs, setControl, showPanelKey } = props

  return (
    <div className='panel'>
      <PanelColumn
        label='Min.'
        options={options}
        changeInputs={changeInputs}
        setControl={setControl}
        inputKey={minInputKey}
        showPanelKey={showPanelKey}
      />
      <PanelColumn
        label='Maks.'
        options={options}
        changeInputs={changeInputs}
        setControl={setControl}
        inputKey={maxInputKey}
        showPanelKey={showPanelKey}
      />
    </div>
  )
}

export default Panel
