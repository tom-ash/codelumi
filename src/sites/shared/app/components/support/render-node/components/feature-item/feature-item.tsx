import React from 'react'
import Image from '../../../../../../../shared/app/components/support/image/image'
import { HeadingTwo } from '../../../headings/heading-two'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const FeatureItem = (props: any) => {
  useStyles(styles)

  const {
    text,
    heading,
    pictureSource,
    pictureAlternate,
  } = props

  return (
    <section className='feature-item'>
      <HeadingTwo text={heading} />
      <Image
        src={pictureSource}
        alt={pictureAlternate}
      />
      <p>
        {text}
      </p>
    </section>
  )
}

export default FeatureItem
