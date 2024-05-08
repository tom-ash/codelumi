import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useData } from '../../../../../../shared/app/functions/store/use-data'
import { GoBack } from './components/go-back/go-back'
import { Description } from './components/description/description'
import { SkillView } from '../shared/components/skill/skill.types'
import { Skills } from '../common/skills/skills'
import { LocationAndCooperationMode } from '../common/location-and-cooperation-mode/location-and-cooperation-mode'
import { Remuneration } from '../common/remuneration/remuneration'
import { PostingIndexTileIndustry } from '../index/components/components/industry/industry'
import { Application } from './components/application/application'
import { Company } from './components/company/company'

interface PostingShowInterface {
  (props: {}): React.ReactElement
}

const PostingsShow: PostingShowInterface = props => {
  useStyles(styles)

  const { posting } = useData()

  const {
    b2bMin,
    b2bMax,
    employmentMin,
    employmentMax,
    locality,
    country,
    cooperationMode,
    skills,
    logo,
    businessName,
    industry,
  } = posting

  return (
    <div id='postings-show'>
      <GoBack />
      <Company
        logo={logo}
        businessName={businessName}
        industry={industry}
      />
      <LocationAndCooperationMode
        locality={locality}
        country={country}
        cooperationMode={cooperationMode}
      />
      <Remuneration
        b2bMin={b2bMin}
        b2bMax={b2bMax}
        employmentMin={employmentMin}
        employmentMax={employmentMax}
      />
      <Skills
        skills={skills}
        view={SkillView.indexVisitor}
      />
      <Description />
      <Application />
    </div>
  )
}

export default PostingsShow
