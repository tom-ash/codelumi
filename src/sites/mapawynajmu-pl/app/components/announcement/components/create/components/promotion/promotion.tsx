import React from 'react'
import { AddPromotionCheckbox } from './components/add-promotion/add-promotion.checkbox'
import { HeadingTwo } from '../../../../../../../../shared/app/components/support/headings/heading-two'
import Image from '../../../../../../../../shared/app/components/support/image/image'
import { SVG } from '../../../../../../../../shared/app/components/support/svg/svg'
import { useStore } from '../../../../../../../../shared/app/functions/store/useStore'

interface PromotionItemInterface {
  (props: { item: string; explanation: string }): React.ReactElement
}

export const PromotionItem: PromotionItemInterface = props => {
  const { item, explanation } = props

  return (
    <li>
      <SVG name='star' />
      <strong>{item}</strong> - {explanation}.
    </li>
  )
}

export const Promotion = () => {
  const {
    state: {
      texts: { promotionBenefits },
    },
  } = useStore()

  return (
    <section className='promotion'>
      {/* TODO: Add English. */}
      {/* @ts-ignore */}
      <HeadingTwo
        // @ts-ignore
        text={
          <>
            Promowanie ogłoszenia <sup>opcjonalne</sup>
          </>
        }
      />
      <div className='promotion-checkbox-container'>
        <AddPromotionCheckbox />
        <Image
          src='https://mapawynajmupl.s3.eu-central-1.amazonaws.com/assets/images/blik_logo_136x64.png'
          alt='BLIK'
        />
      </div>
      <ul>
        {promotionBenefits.map((promotionBenefit: { item: string; explanation: string }, index: number) => {
          return (
            <PromotionItem
              key={index}
              {...promotionBenefit}
            />
          )
        })}
      </ul>
    </section>
  )
}
