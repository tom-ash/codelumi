import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import SkillSelector from './components/skill-selector/skill-selector'
import SubmitButton from './components/submit-button'
import { useStore } from 'react-redux'
// import Location from './components/location/location'
// import Contract from './components/contract/contract'

const AnnouncementCreateForm = () => {
  useStyles(styles)

  const state = useStore().getState()
  const { texts } = state

  const {
    title,
  } = texts

  console.log(texts)

  return (
    <div
      id='listing-create-form'
      className='form'
    >
      <h1>{title}</h1>
      <SkillSelector />
      {/* <Location {...locationProps} /> */}
      {/* <Contract {...contractProps} /> */}
      <SubmitButton />
    </div>
  )
}

export default AnnouncementCreateForm
