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
import { Company } from '../../../common/company/company'

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
    backgroundColor: string
    textColor: string
  }): React.ReactElement
}

export const PostingIndexTile: PostingIndexTileInterface = props => {
  useStyles(styles)

  // console.log('props', props)

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
    backgroundColor,
    textColor,
  } = props

  return (
    <a
      className='postings-index-tile'
      key={id}
      data-id={id}
      data-type='map-index-tile'
      href={href}
      onClick={e => {
        e.preventDefault()

        changeUrl({ href })
      }}
    >
      <Company
        logo={logo}
        businessName={businessName}
        industry={{
          value: industry,
          label: industry,
          icon: industryIcon,
        }}
        // backgroundColor={backgroundColor}
        // textColor={textColor}
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
    </a>
  )
}
