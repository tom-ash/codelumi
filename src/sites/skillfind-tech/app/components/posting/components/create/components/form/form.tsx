import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Skills from './components/skill-selector/skills'
import SubmitButton from './components/submit-button'
import { Contracts } from './components/contracts/contracts'
import { Location } from './components/location/location'
import { CooperationMode } from './components/cooperation-mode/cooperation-mode'
import { Description } from './components/description/description'
import { SocialImage } from './components/social-image/social-image'
import { Poster } from './components/poster/poster'
import { useUser } from '../../../../../../../../shared/app/functions/store/use-user'
import { MainHeading } from '../../../../../../../../shared/app/components/support/headings/main-heading'
import { Application } from './components/application/application'

export const PostingsForm = () => {
  useStyles(styles)

  const { authorized } = useUser()

  return (
    <div
      id='listing-create-form'
      className='form'
    >
      <MainHeading icon='plus' />
      <Skills />
      <CooperationMode />
      <Location />
      <Description />
      <Contracts />
      {!authorized && <Poster />}
      <SocialImage />
      <Application />
      <SubmitButton />
    </div>
  )
}

export default PostingsForm
