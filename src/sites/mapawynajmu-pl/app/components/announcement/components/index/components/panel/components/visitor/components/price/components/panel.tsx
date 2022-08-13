import React from 'react'
import PanelColumn from './panel-column'

const Panel = (props: PanelProps) => {
  const {
    // priceMinInput,
    // priceMaxInput,
    options,
    changeInputs,
    changeControl
  } = props

  return (
    <div className='panel'>
      <PanelColumn
        label='Min.'
        options={options}
        updateKey='priceMinInput'
        changeInputs={changeInputs}
        changeControl={changeControl}
      />
      <PanelColumn
        label='Maks.'
        options={options}
        updateKey='priceMaxInput'
        changeInputs={changeInputs}
        changeControl={changeControl}
      />
    </div>
  )
}

export default Panel
