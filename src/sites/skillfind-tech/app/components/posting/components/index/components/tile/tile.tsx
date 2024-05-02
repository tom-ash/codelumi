import React from 'react'
import { SkillProps, SkillView } from '../../../shared/components/skill/skill.types'
import { PostingIndexTileIndustry } from '../components/industry/industry'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Image } from '../../../../../../../../shared/app/components/support/image/image'
import { Remuneration } from '../../../common/remuneration/remuneration'
import { changeUrl } from '../../../../../../../../shared/app/functions/routes/changers/change-url'
import { LocationAndCooperationMode } from '../../../common/location-and-cooperation-mode/location-and-cooperation-mode'
import { Skills } from '../../../common/skills/skills'

interface PostingIndexTileInterface {
  (props: {
    id: number
    businessName: string
    industry: string
    industryIcon: string
    b2bMin?: number
    b2bMax?: number
    employmentMin?: number
    employmentMax?: number
    skills: SkillProps[]
    logo: string
    href: string
    locality?: string
    country?: string
    cooperationMode: {
      icon: string
      label: string
    }
    changeHoveredTileId(listingId: number): void
    changeUnhoveredTileId(listingId: number): void
  }): React.ReactElement
}

export const PostingIndexTile: PostingIndexTileInterface = props => {
  useStyles(styles)

  const {
    id,
    businessName,
    industry,
    industryIcon,
    b2bMin,
    b2bMax,
    employmentMin,
    employmentMax,
    skills,
    logo,
    href,
    locality,
    country,
    cooperationMode,
    changeHoveredTileId,
    changeUnhoveredTileId,
  } = props

  return (
    <a
      className='postings-index-tile'
      key={id}
      href={href}
      onClick={e => {
        e.preventDefault()

        changeUrl({ href })
      }}
      onMouseOver={() => changeHoveredTileId(id)}
      onMouseLeave={() => changeUnhoveredTileId(id)}
    >
      <div className='company'>
        <div className='company-logo'>
          <Image
            src={`https://s3.eu-central-1.amazonaws.com/skillfind-tech-dev/logos/${logo}`}
            alt='warsaw-digital'
          />
        </div>
        <div className='business-name'>{businessName}</div>
        <PostingIndexTileIndustry
          industry={industry}
          icon={industryIcon}
        />
      </div>
      <Remuneration
        b2bMin={b2bMin}
        b2bMax={b2bMax}
        employmentMin={employmentMin}
        employmentMax={employmentMax}
      />
      <LocationAndCooperationMode
        locality={locality}
        country={country}
        cooperationMode={cooperationMode}
      />
      <Skills
        skills={skills}
        view={SkillView.indexVisitor}
      />
    </a>
  )
}
