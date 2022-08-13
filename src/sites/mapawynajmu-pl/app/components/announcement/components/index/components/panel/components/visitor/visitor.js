import React from 'react'
import Area from './components/area/area.js'
import Filter from './components/filter/filter'

export default props => {
  const {
    changeControl,
    changeInputs,
    priceMin,
    priceMinInput,
    priceMax,
    priceMaxInput,
    showPricePanel
  } = props

  const priceFilterProps = {
    showPanel: showPricePanel,
    showPanelKey: 'showPricePanel',
    min: priceMin,
    minInput: priceMinInput,

    max: priceMax,
    maxInput: priceMaxInput,
    minKey: 'priceMin',
    minInputKey: 'priceMinInput',
    maxKey: 'priceMax',
    maxInputKey: 'priceMaxInput',
    changeControl,
    // changeData,
    changeInputs
  }

  console.log(priceFilterProps)

  return (
    <div>
      <Area {...props} />
      <Filter {...priceFilterProps} />
    </div>
  )
}
