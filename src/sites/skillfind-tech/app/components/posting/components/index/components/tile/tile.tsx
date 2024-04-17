import React from 'react'
import Skill from '../../../shared/components/skill/skill'
import { SkillProps, SkillView } from '../../../shared/components/skill/skill.types'
import { PostingIndexTileIndustry } from '../components/industry/industry'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Image } from '../../../../../../../../shared/app/components/support/image/image'
import { Remuneration } from './components/remuneration/remuneration'
import { changeUrl } from '../../../../../../../../shared/app/functions/routes/changers/change-url'
import { LocationAndCooperationMode } from './location-and-cooperation-mode/location-and-cooperation-mode'

interface PostingIndexTileInterface {
  (props: {
    id: number
    businessName: string
    industry: string
    b2bMin?: number
    b2bMax?: number
    skills: SkillProps[]
    logo: string;
    href: string;
    locality?: string;
    country?: string;
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
    href,
    locality,
    country,
  } = props

  return (
    <a
      className='postings-index-tile'
      key={id}
      href={href}
      onClick={(e) => {
        e.preventDefault()

        changeUrl({ href })
      }}
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
      <LocationAndCooperationMode
        locality={locality}
        country={country}
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
    </a>
  )
}
