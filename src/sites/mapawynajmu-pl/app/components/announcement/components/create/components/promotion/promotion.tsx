import React from 'react'
import { AddPromotionCheckbox } from './components/add-promotion/add-promotion.checkbox'

export const Promotion = () => {
  return (
    <section className='promotion'>
      <AddPromotionCheckbox />
      <ul>
        <li>
          &#x2713; Wyróżnione ogłoszenia wyświetlane są na liście przed pozostałymi.
        </li>
        <li>
          &#x2713; Ikony wyróżnionych ogłoszeń są podświetlone i są wyświetlane ponad pozostałymi.
        </li>
      </ul>
    </section>
  )
}
