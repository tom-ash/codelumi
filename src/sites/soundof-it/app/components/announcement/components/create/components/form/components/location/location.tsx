import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import LocationCheckboxes from './components/location-checkboxes'

interface LocationProps {
  setStore(newStore: object): void
  remote: boolean
  hybrid: boolean
  office: boolean
}

const Location = (props: LocationProps) => {
  useStyles(styles)

  const { setStore, remote, hybrid, office } = props

  const locationCheckboxesProps = {
    setStore,
    remote,
    hybrid,
    office,
  }

  return (
    <div>
      <h2>Location</h2>
      <LocationCheckboxes {...locationCheckboxesProps} />
    </div>
  )
}

export default Location
