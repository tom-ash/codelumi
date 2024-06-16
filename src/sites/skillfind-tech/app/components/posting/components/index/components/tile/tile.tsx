import React from 'react'
import { SkillProps, SkillView } from '../../../shared/components/skill/skill.types'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Remuneration } from '../../../common/remuneration/remuneration'
import { changeUrl } from '../../../../../../../../shared/app/functions/routes/changers/change-url'
import { LocationAndCooperationMode } from '../../../common/location-and-cooperation-mode/location-and-cooperation-mode'
import { Skills } from '../../../common/skills/skills'
import { Company } from '../../../common/company/company'
import { Currency } from '../../../../postings.types'

interface PostingIndexTileInterface {
  (props: {
    id: number
    businessName: string
    industry: string
    industryIcon: string
    b2bMin?: number
    b2bMax?: number
    b2bCurrency?: Currency
    employmentMin?: number
    employmentMax?: number
    employmentCurrency?: Currency
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

  const {
    id,
    businessName,
    industry,
    industryIcon,
    b2bMin,
    b2bMax,
    b2bCurrency,
    employmentMin,
    employmentMax,
    employmentCurrency,
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

        changeUrl({ href, retainQueryParams: true })
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
        b2bCurrency={b2bCurrency}
        employmentCurrency={employmentCurrency}
      />
      <Skills
        skills={skills}
        view={SkillView.indexVisitor}
      />
    </a>
  )
}
