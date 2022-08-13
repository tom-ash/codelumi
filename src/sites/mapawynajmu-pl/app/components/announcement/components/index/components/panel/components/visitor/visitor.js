import React from 'react'
import Filter from './components/filter/filter'
import priceOptions from './constants/price-options'

export default props => {
  const {
    changeControl,
    changeInputs,
    priceMin,
    priceMinInput,
    priceMax,
    priceMaxInput,
    showPricePanel,

    showArea,
    areaMin,
    areaMinInput,
    areaMax,
    areaMaxInput,

  } = props

  const areaFilterProps = {
    label: 'Powierzchnia',
    unit: 'm2',
    options: [0, 10, 20, 30],
    showPanel: showArea,
    showPanelKey: 'showArea',
    min: areaMin,
    minInput: areaMinInput,
    max: areaMax,
    maxInput: areaMaxInput,
    minKey: 'areaMin',
    minInputKey: 'areaMinInput',
    maxKey: 'areaMax',
    maxInputKey: 'areaMaxInput',
    changeControl,
    changeInputs
  }

  const priceFilterProps = {
    label: 'Cena',
    unit: 'PLN',
    options: priceOptions,
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
    changeInputs
  }

  return (
    <div>
      <Filter {...areaFilterProps} />
      <Filter {...priceFilterProps} />
    </div>
  )
}
