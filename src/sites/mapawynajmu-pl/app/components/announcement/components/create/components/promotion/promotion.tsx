import React from 'react'
import { AddPromotionCheckbox } from './components/add-promotion/add-promotion.checkbox'
import { HeadingTwo } from '../../../../../../../../shared/app/components/support/headings/heading-two'
import Image from '../../../../../../../../shared/app/components/support/image/image'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'

export const Promotion = () => {
  return (
    <section className='promotion'>
      {/* TODO: Add English. */}
      {/* @ts-ignore */}
      <HeadingTwo text={<>Promowanie ogłoszenia <sup>opcjonalne</sup></>} />
      <div className='promotion-checkbox-container'>
        <AddPromotionCheckbox />
        <Image src='https://mapawynajmupl.s3.eu-central-1.amazonaws.com/assets/images/blik_logo_136x64.png' alt='BLIK' />
      </div>
      <ul>
        <li>
          {/* TODO: Add English. */}
          &#x2713; Wyróżnione ogłoszenia wyświetlane są na liście przed pozostałymi.
        </li>
        <li>
          {/* TODO: Add English. */}
          &#x2713; Ikony wyróżnionych ogłoszeń są podświetlone i są wyświetlane ponad pozostałymi.
        </li>
      </ul>
    </section>
  )
}
