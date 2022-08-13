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

const Price = (props: PriceProps) => {
  const {
    showPricePanel,
    priceMin,
    priceMinInput,
    priceMax,
    priceMaxInput,
    changeControl,
    changeData,
    changeInputs
  } = props

  const priceContentProps = {
    priceMin,
    priceMax
  }

  const pricePanelProps = {
    priceMinInput,
    priceMaxInput,
    options,
    changeControl,
    changeData,
    changeInputs
  }

  return (
    <div
      tabIndex={0}
      className='filter'
      onClick={() => changeControl({ showPricePanel: true })}
      onBlur={() => changeControl({ showPricePanel: false })}
      onFocus={() => changeControl({ showPricePanel: true })}
    >
      <Content {...priceContentProps} />
      {showPricePanel && <Panel {...pricePanelProps}/>}
    </div>
  )
}

export default Price
