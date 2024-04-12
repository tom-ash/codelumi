import React from 'react'
import Skill from '../../../shared/components/skill/skill'
import { SkillProps, SkillView } from '../../../shared/components/skill/skill.types'
import { PostingIndexTileIndustry } from '../components/industry/industry'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Image } from '../../../../../../../../shared/app/components/support/image/image'
import { Remuneration } from './components/remuneration/remuneration'

interface PostingIndexTileInterface {
  (props: {
    id: number
    businessName: string
    industry: string
    b2bMin?: number
    b2bMax?: number
    skills: SkillProps[]
    logo: string;
  }): React.ReactElement
}

export const PostingIndexTile: PostingIndexTileInterface = props => {
  useStyles(styles)

  const {
    id,
    businessName,
    industry,
    // b2b,
    b2bMin,
    b2bMax,
    // employment,
    // employmentMin,
    // employmentMax,
    skills,
    logo,
    // industry,
  } = props

  console.log(props)

  return (
    <div
      className='postings-index-tile'
      key={id}
    >
      <div className='company'>
        <div className='company-logo'>
          <Image
            src={`https://s3.eu-central-1.amazonaws.com/skillfind-tech-dev/logos/${logo}`}
            alt='warsaw-digital'
          />
        </div>
        <div className='business-name'>{businessName}</div>
        <PostingIndexTileIndustry industry={industry} />
      </div>
      <Remuneration
        b2bMin={b2bMin}
        b2bMax={b2bMax}
      />
      <div className='skills'>
        {skills.map(skill => {
          return (
            <Skill
              key={skill.name}
              name={skill.name}
              level={skill.level}
              view={SkillView.indexVisitor}
            />
          )
        })}
        <div className='float-clear' />
      </div>
    </div>
  )
}
