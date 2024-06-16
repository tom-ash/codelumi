import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Skills from './components/skill-selector/skills'
import { Contracts } from './components/contracts/contracts'
import { Location } from './components/location/location'
import { CooperationMode } from './components/cooperation-mode/cooperation-mode'
import { Description } from './components/description/description'
import { SocialImage } from './components/social-image/social-image'
import { Poster } from './components/poster/poster'
import { useUser } from '../../../../../../../../shared/app/functions/store/use-user'
import { MainHeading } from '../../../../../../../../shared/app/components/support/headings/main-heading'
import { Application } from './components/application/application'
import { Submit } from './components/submit/submit'
import { Position } from './components/position/position'

export const PostingsForm = () => {
  useStyles(styles)

  const { authorized } = useUser()
  
  // CURRENCIES

  return (
    <div
      id='postings-new-form'
      className='form'
    >
      <MainHeading icon='plus' />
      <Skills />
      <Position />
      <CooperationMode />
      <Location />
      <Description />
      <Contracts />
      <Application />
      {!authorized && <Poster />}
      <SocialImage />
      <Submit />
    </div>
  )
}

export default PostingsForm
