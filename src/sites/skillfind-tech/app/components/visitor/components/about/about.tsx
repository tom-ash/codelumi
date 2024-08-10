import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useTexts } from '../../../../../../shared/app/functions/store/use-texts'
import { MainHeading } from '../../../../../../shared/app/components/support/headings/main-heading'
import FeatureItem from '../../../../../../shared/app/components/support/render-node/components/feature-item/feature-item'

const VisitorContact = () => {
  useStyles(styles)

  const { intro, features } = useTexts()

  return (
    <div id='about'>
      <div className='container'>
        <MainHeading />
        <div className='intro'>
          <strong>{intro}</strong>
        </div>
        <ul className='features'>
          {features.map((feature: any) => {
            const { heading, imgSrc, imgAlternate, text } = feature

            return (
              <li>
                <FeatureItem
                  heading={heading}
                  imgSrc={imgSrc}
                  imgAlternate={imgAlternate}
                  text={text}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default VisitorContact
