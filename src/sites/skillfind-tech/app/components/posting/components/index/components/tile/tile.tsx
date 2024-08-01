import React from 'react'
import { SkillProps, SkillView } from '../../../shared/components/skill/skill.types'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Remuneration } from '../../../common/remuneration/remuneration'
import { changeUrl } from '../../../../../../../../shared/app/functions/routes/changers/change-url'
import { CooperationModeAndLocation } from '../../../common/cooperation-mode-and-location/cooperation-mode-and-location'
import { Skills } from '../../../common/skills/skills'
import { Company } from '../../../common/company/company'
import { Currency } from '../../../../postings.types'
import { Position } from '../../../common/position/position'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'

export interface PostingTileProps {
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
    symbol: string
  }
  position: string
}

interface PostingIndexTileInterface {
  (props: PostingTileProps): React.ReactElement
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
    position,
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
      <div className='position-cooperation-mode-and-location'>
        <Position position={position} />
        <CooperationModeAndLocation
          locality={locality}
          country={country}
          cooperationMode={cooperationMode}
        />
      </div>
      <FloatClear />
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
