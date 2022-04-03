import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import SkillSelector from './components/skill-selector/skill-selector'
import SubmitButton from './components/submit-button'
import Location from './components/location/location'

interface AnnouncementCreateFormProps {
  selectableSkills: object[],
  selectedSkills: object[],
  setStore(newStore: object): void,
  remote: boolean,
  hybrid: boolean,
  office: boolean
}

const AnnouncementCreateForm = (props: AnnouncementCreateFormProps) => {
  useStyles(styles)

  const {
    selectableSkills,
    selectedSkills,
    setStore,
    remote,
    hybrid,
    office
  } = props

  const locationProps = {
    remote,
    hybrid,
    office,
    setStore
  }

  const skillSelectorProps = {
    selectableSkills,
    selectedSkills,
    setStore
  }

  const submitButtonProps = {
    selectedSkills,
    remote,
    hybrid,
    office
  }
  
  return (
    <div id='announcement-create-form' className='form'>
      <h1>
        Post a Job
      </h1>
      <SkillSelector {...skillSelectorProps} />
      <Location {...locationProps} />
      <SubmitButton {...submitButtonProps} />
    </div>
  )
}

export default AnnouncementCreateForm
