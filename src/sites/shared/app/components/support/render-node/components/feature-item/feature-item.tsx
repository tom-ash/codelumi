import React from 'react'
import Image from '../../../../../../../shared/app/components/support/image/image'
import { HeadingTwo } from '../../../headings/heading-two'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { enrichText } from '../../helpers/enrich-text/enrich-text'
import { Figure } from '../../../../../../../shared/app/components/support/figure/figure'

const FeatureItem = (props: any) => {
  useStyles(styles)

  const {
    text,
    heading,
    pictureSource,
    pictureAlternate,
  } = props

  const __html = enrichText(text)

  return (
    <section className='feature-item'>
      <HeadingTwo text={heading} />
      <Figure>
        <Image
          src={pictureSource}
          alt={pictureAlternate}
        />
      </Figure>
      <p dangerouslySetInnerHTML={{ __html }} />
    </section>
  )
}

export default FeatureItem
