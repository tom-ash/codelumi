import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Skills from './components/skill-selector/skills'
import SubmitButton from './components/submit-button'
import { useStore } from 'react-redux'
// import Location from './components/location/location'
import { Contracts } from './components/contracts/contracts'

const AnnouncementCreateForm = () => {
  useStyles(styles)

  const state = useStore().getState()
  const { texts } = state

  const { title } = texts

  return (
    <div
      id='listing-create-form'
      className='form'
    >
      <h1>{title}</h1>
      <Skills />
      <Contracts />
      {/* <Location {...locationProps} /> */}
      <SubmitButton />
    </div>
  )
}

export default AnnouncementCreateForm
