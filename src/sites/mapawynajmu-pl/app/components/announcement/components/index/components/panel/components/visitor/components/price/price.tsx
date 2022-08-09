import React from 'react'

const priceOptions = [
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

interface PriceContentProps {
  priceMin: number
  priceMax: number
}

const PriceContent = (props: PriceContentProps) => {
  const {
    priceMin,
    priceMax
  } = props

  if (priceMin && priceMax) {
    return <>od {priceMin} do {priceMax} PLN</>
  }

  if (priceMin) {
    return <>od {priceMin} PLN</>
  }

  if (priceMax) {
    return <>do {priceMax} PLN</>
  }

  return <>Cena / MC</>
}

interface ChangeInputs {
  (args: {
    priceMin?: number
    priceMinInput?: number
    priceMax?: number
    priceMaxInput?: number
  }): void
}

interface PricePanelProps {
  // label: string
  priceMinInput: number
  priceMaxInput: number
  changeControl(props: { showPricePanel: boolean }): void
  changeInputs: ChangeInputs
  changeControl(): void
}

const PricePanel = (props: PricePanelProps) => {
  const {
    // priceMinInput,
    // priceMaxInput,
    changeInputs,
    changeControl
  } = props

  return (
    <div className='panel'>
      <PricePanelColumn
        label='Min.'
        options={priceOptions}
        updateKey='priceMinInput'
        changeInputs={changeInputs}
        changeControl={changeControl}
      />
      <PricePanelColumn
        label='Maks.'
        options={priceOptions}
        updateKey='priceMaxInput'
        changeInputs={changeInputs}
        changeControl={changeControl}
      />
    </div>
  )
}

interface PricePanelColumnProps {
  label: string
  options: number[]
  updateKey: string
  changeInputs: ChangeInputs
  changeControl(): void
}

const PricePanelColumn = (props: PricePanelColumnProps) => {
  const {
    label,
    options = [],
    updateKey,
    changeInputs,
    changeControl
  } = props

  return (
    <div
      className='column'
    >
      <div className='heading'>
        {label}
      </div>
      {options.map(option => (
        <div
          key={option}
          className='option'
          onClick={e => {
            e.stopPropagation()
            changeInputs({ [updateKey]: option, [updateKey.replace('Input', '')]: option })
            // @ts-ignore
            changeControl({ rebuildQueryParams: true, showPricePanel: false })
          }}
        >
          {option}
        </div>
      ))}
    </div>
  )
}

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
    changeControl,
    changeData,
    changeInputs
  }

  return (
    <div
      className='filter'
      onClick={() => changeControl({ showPricePanel: true })}
    >
      <PriceContent {...priceContentProps} />
      {/* @ts-ignore */}
      {showPricePanel && <PricePanel {...pricePanelProps}/>}
    </div>
  )
}

export default Price
