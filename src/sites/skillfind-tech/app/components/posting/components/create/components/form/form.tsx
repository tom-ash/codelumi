import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Skills from './components/skill-selector/skills'
import SubmitButton from './components/submit-button'
import { Contracts } from './components/contracts/contracts'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { Industry } from './components/industry/industry'
import { BusinessName } from './components/business-name/business-name'
import { Location } from './components/location/location'
import { CooperationMode } from './components/cooperation-mode/cooperation-mode'

const AnnouncementCreateForm = () => {
  useStyles(styles)

  const { title } = useTexts()

  return (
    <div
      id='listing-create-form'
      className='form'
    >
      <h1>{title}</h1>
      <section>
        <h2>COMPANY DATA</h2>
        <BusinessName />
        <Industry />
      </section>
      <section>
        <h2>SKILLS</h2>
        <Skills />
      </section>
      <CooperationMode />
      <Location />
      <section>
        <Contracts />
      </section>
      <SubmitButton />
    </div>
  )
}

export default AnnouncementCreateForm
