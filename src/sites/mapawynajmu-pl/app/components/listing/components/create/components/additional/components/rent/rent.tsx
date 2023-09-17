import React from 'react'
import { NetRentAmountInput } from './components/net-rent-amount/net-rent-amount'
import { GrossRentAmountInput } from './components/gross-rent-amount/gross-rent-amount'
import { RentCurrencySelect } from './components/rent-currency/rent-currency'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs'

// 0 => 'office'
// 1 => 'usable_premises'
// 2 => 'apartment'
// 3 => 'house'
// 4 => 'room'
// 5 => 'parking_space'
// 6 => 'virtual_office'
// 7 => 'coworking_spaces'

const showNetRentAmount = (category: number) => [0, 1, 6, 7].includes(category)
const showGrossRentAmount = (category: number) => [2, 3, 4, 5].includes(category)

export const Rent = () => {
  useStyles(styles)

  const { category } = useInputs()

  return (
    <section className='rent'>
      {showNetRentAmount(category) && <NetRentAmountInput />}
      {showGrossRentAmount(category) && <GrossRentAmountInput />}
      {category !== '' && <RentCurrencySelect />}
    </section>
  )
}

// classNames: { container: 'text-input rent-amount' },
// classNames: { container: 'select-element rent-currency' },

// label = { pl: 'Miesięczna cena netto', en: 'Monthly Net Price' }['pl']
// const rentAmountType = [0, 1, 6, 7].indexOf(category) !== -1 ? 'netRentAmount' : 'grossRentAmount'

// {showRent(category) && (
//   <div className='rent-inputs-container'>
//     {/* @ts-ignore */}
//     <ManagedText {...this.rentAmountManager()} />
//     {/* @ts-ignore */}
//     <ManagedSelect {...this.rentCurrencyManager()} />
//     <div className='float-clear' />
//   </div>
// )}

// const currencies = [
//   { value: 0, text: 'zł' },
//   { value: 1, text: '€' },
//   { value: 2, text: '$' },
// ]
