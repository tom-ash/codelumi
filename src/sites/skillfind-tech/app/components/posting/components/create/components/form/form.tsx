import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Skills from './components/skill-selector/skills'
import SubmitButton from './components/submit-button'
import { Contracts } from './components/contracts/contracts'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { Location } from './components/location/location'
import { CooperationMode } from './components/cooperation-mode/cooperation-mode'
import { Description } from './components/description/description'
import { SocialImage } from './components/social-image/social-image'

const AnnouncementCreateForm = () => {
  useStyles(styles)

  const { title } = useTexts()

  // TODO!

  return (
    <div
      id='listing-create-form'
      className='form'
    >
      <h1>{title}</h1>
      <Skills />
      <CooperationMode />
      <Location />
      <Description />
      <section>
        {/* TODO */}
        <Contracts />
      </section>
      <SocialImage />
      <SubmitButton />
    </div>
  )
}

export default AnnouncementCreateForm
