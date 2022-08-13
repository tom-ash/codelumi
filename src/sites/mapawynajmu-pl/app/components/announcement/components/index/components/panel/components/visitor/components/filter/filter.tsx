import React from 'react'
import Panel from './components/panel'
import Content from './components/content'

const options = [
  1000,
  2000,
  3000,
  4000,
  5000,
  6000,
  7000,
  8000,
  9000,
  10000,
  15000,
  20000
]

const Filter = (props: FilterProps) => {
  const {
    showPanel,
    showPanelKey,
    min,
    minInput,
    max,
    maxInput,
    changeControl,
    changeData,
    changeInputs,
    minKey,
    minInputKey,
    maxKey,
    maxInputKey,
  } = props

  const contentProps = {
    min,
    max
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
    changeData,
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
      {showPanel && <Panel {...panelProps}/>}
    </div>
  )
}

export default Filter
