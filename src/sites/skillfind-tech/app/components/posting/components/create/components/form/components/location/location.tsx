import React from 'react'
import { MapMarker } from '../../../../../../../../../../shared/app/components/support/map-marker/map-marker'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useErrors } from '../../../../../../../../../../shared/app/functions/store/use-errors'
import { Instructions } from '../../../../../../../../../../shared/app/components/support/instructions/instructions'

export const Location = () => {
  useStyles(styles)

  const { locationHeading, locationInstructions } = useTexts()
  const { isLocationError: isError } = useErrors()

  const classNames = ['location']
  if (isError) {
    classNames.push('error')
  }

  return (
    <section
      id='location'
      className={classNames.join(' ')}
    >
      <h2>{locationHeading}</h2>
      <Instructions
        text={locationInstructions}
        isError={isError}
      />
      <MapMarker />
    </section>
  )
}
