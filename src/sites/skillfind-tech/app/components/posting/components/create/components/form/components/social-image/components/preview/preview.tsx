import React from 'react'
import { SkillProps, SkillView } from '../../../../../../../shared/components/skill/skill.types'
import { Company } from '../../../../../../../common/company/company'
import { LocationAndCooperationMode } from '../../../../../../../common/location-and-cooperation-mode/location-and-cooperation-mode'
import { Remuneration } from '../../../../../../../common/remuneration/remuneration'
import { Skills } from '../../../../../../../common/skills/skills'

interface PreviewInterface {
  (props: {
    id: string
    skills: SkillProps[]
    locality: string
    country: string
    cooperationMode: {
      value: string
      label: string
      icon: string
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
    employmentMin?: number
    employmentMax?: number
    backgroundColor: string
    textColor: string
  }): React.ReactElement
}

export const Preview: PreviewInterface = props => {
  const {
    id,
    logo,
    businessName,
    industry,
    backgroundColor,
    textColor,
    locality,
    country,
    cooperationMode,
    b2bMin,
    b2bMax,
    employmentMin,
    employmentMax,
    skills,
  } = props

  return (
    <div
      className='preview'
      id={id}
    >
      {logo && businessName && industry && (
        <Company
          logo={logo}
          businessName={businessName}
          industry={industry}
          backgroundColor={backgroundColor}
          textColor={textColor}
          isPreview={true}
        />
      )}
      {locality && country && cooperationMode && (
        <LocationAndCooperationMode
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
        />
      )}
      <Skills
        skills={skills}
        view={SkillView.indexVisitor}
      />
    </div>
  )
}
