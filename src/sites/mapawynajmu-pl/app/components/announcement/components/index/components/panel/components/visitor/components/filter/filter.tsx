import React from 'react'
import Panel from './components/panel'
import Content from './components/content'

const Filter = (props: FilterProps) => {
  const {
    label,
    unit,
    options,
    showPanel,
    showPanelKey,
    min,
    minInput,
    max,
    maxInput,
    changeControl,
    changeInputs,
    minKey,
    minInputKey,
    maxKey,
    maxInputKey,
  } = props

  const contentProps = {
    label,
    min,
    max,
    unit,
  }

  const panelProps = {
    showPanelKey,
    options,
    minInput,
    minKey,
    minInputKey,
    maxInput,
    maxKey,
    maxInputKey,
    changeControl,
    changeInputs,
  }

  return (
    <div
      tabIndex={0}
      className='filter'
      onClick={() => changeControl({ [showPanelKey]: true })}
      onBlur={() => changeControl({ [showPanelKey]: false })}
      onFocus={() => changeControl({ [showPanelKey]: true })}
    >
      <Content {...contentProps} />
      {showPanel && <Panel {...panelProps} />}
    </div>
  )
}

export default Filter
