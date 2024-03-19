import React from 'react'
import { MapMarker } from '../../../../../../../../../../shared/app/components/support/map-marker/map-marker'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

export const Location = () => {
  useStyles(styles)

  const { locationHeading } = useTexts()

  return (
    <section className='location'>
      <h2>{locationHeading}</h2>
      <MapMarker />
    </section>
  )
}
