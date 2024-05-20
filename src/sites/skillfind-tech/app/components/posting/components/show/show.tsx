import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { GoBack } from './components/go-back/go-back'
import { Company } from './components/company/company'
import { LocationAndCooperationMode } from './components/location-and-cooperation-mode/location-and-cooperation-mode'
import { Remuneration } from './components/remuneration/remuneration'
import { Description } from './components/description/description'
import { Application } from './components/application/application'
import { Skills } from './components/skills/skills'
import { FloatClear } from '../../../../../../shared/app/components/support/float-clear/float-clear'

interface PostingShowInterface {
  (props: {}): React.ReactElement
}

const PostingsShow: PostingShowInterface = props => {
  useStyles(styles)

  return (
    <>
      {/* <GoBack /> */}
      <div id='postings-show'>
        <GoBack />
        <FloatClear />
        <div id='posting'>
          <Company />
          <LocationAndCooperationMode />
          <Remuneration />
          <Skills />
          <Description />
        </div>
        <Application />
      </div>
    </>
  )
}

export default PostingsShow
