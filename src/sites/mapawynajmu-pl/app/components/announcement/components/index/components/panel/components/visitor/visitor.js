import React from 'react'
import Filter from './components/filter/filter'
import areaOptions from './constants/area-options'
import priceOptions from './constants/price-options'

export default props => {
  const {
    setControl,
    setInputs,
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
    options: areaOptions,
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
    setControl,
    setInputs,
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
    setControl,
    setInputs,
  }

  return (
    <div>
      <Filter {...areaFilterProps} />
      <Filter {...priceFilterProps} />
    </div>
  )
}
