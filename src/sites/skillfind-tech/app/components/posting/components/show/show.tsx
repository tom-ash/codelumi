import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { GoBack } from './components/go-back/go-back'
import { Company } from './components/company/company'
import { CooperationModeAndLocation } from './components/cooperation-mode-and-location/cooperation-mode-and-location'
import { Remuneration } from './components/remuneration/remuneration'
import { Description } from './components/description/description'
import { Application } from './components/application/application'
import { Skills } from './components/skills/skills'
import { FloatClear } from '../../../../../../shared/app/components/support/float-clear/float-clear'
import { Position } from './components/position/position'

interface PostingShowInterface {
  (props: {}): React.ReactElement
}

const PostingsShow: PostingShowInterface = props => {
  useStyles(styles)

  return (
    <div id='postings-show'>
      <GoBack />
      <FloatClear />
      <div id='posting'>
        <Company />
        <Position />
        <CooperationModeAndLocation />
        <Skills />
        <Remuneration />
        <Description />
      </div>
      <Application />
    </div>
  )
}

export default PostingsShow
