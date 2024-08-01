import React from 'react'
import { SkillProps, SkillView } from '../../../../../../../shared/components/skill/skill.types'
import { Company } from '../../../../../../../common/company/company'
import { CooperationModeAndLocation } from '../../../../../../../common/cooperation-mode-and-location/cooperation-mode-and-location'
import { Remuneration } from '../../../../../../../common/remuneration/remuneration'
import { Skills } from '../../../../../../../common/skills/skills'
import { Position } from '../../../../../../../common/position/position'
import { Currency } from '../../../../../../../../postings.types'

interface PreviewInterface {
  (props: {
    id: string
    position: string
    skills: SkillProps[]
    locality: string
    country: string
    cooperationMode: {
      value: string
      label: string
      icon: string
      symbol: string
    }
    logo: string
    businessName: string
    industry: {
      value: string
      label: string
      icon: string
    }
    b2bMin?: number
    b2bMax?: number
    b2bCurrency?: Currency
    employmentMin?: number
    employmentMax?: number
    employmentCurrency?: Currency
    scale?: number
  }): React.ReactElement
}

export const Preview: PreviewInterface = props => {
  const {
    id,
    position,
    logo,
    businessName,
    industry,
    locality,
    country,
    cooperationMode,
    b2bMin,
    b2bMax,
    b2bCurrency,
    employmentMin,
    employmentMax,
    employmentCurrency,
    skills,
    scale,
  } = props

  return (
    <div
      className='preview'
      id={id}
      {...(scale && {
        style: {
          transform: `scale(${scale})`,
        },
      })}
    >
      {logo && businessName && industry && (
        <Company
          logo={logo}
          businessName={businessName}
          industry={industry}
          isPreview={true}
        />
      )}
      <Position position={position} />
      {locality && country && cooperationMode && (
        <CooperationModeAndLocation
          locality={locality}
          country={country}
          cooperationMode={cooperationMode}
        />
      )}
      {((b2bMin && b2bMax) || (employmentMin && employmentMax)) && (
        <Remuneration
          b2bMin={b2bMin}
          b2bMax={b2bMax}
          employmentMin={employmentMin}
          employmentMax={employmentMax}
          b2bCurrency={b2bCurrency}
          employmentCurrency={employmentCurrency}
        />
      )}
      <Skills
        skills={skills}
        view={SkillView.indexVisitor}
      />
    </div>
  )
}
