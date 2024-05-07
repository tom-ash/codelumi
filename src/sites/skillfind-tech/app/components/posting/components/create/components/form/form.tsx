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
import { Poster } from './components/poster/poster'
import { useUser } from '../../../../../../../../shared/app/functions/store/use-user'

export const PostingsForm = () => {
  useStyles(styles)

  const { title } = useTexts()
  const { authorized } = useUser()

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
      {!authorized && <Poster />}
      <SubmitButton />
    </div>
  )
}

export default PostingsForm
