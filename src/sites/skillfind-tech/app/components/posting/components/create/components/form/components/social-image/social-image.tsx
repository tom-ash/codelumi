import React, { useMemo } from 'react'
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs'
import { useDispatch } from 'react-redux'
import { useApp } from '../../../../../../../../../../shared/app/functions/store/use-app'
import Skill from '../../../../../shared/components/skill/skill'
import { SkillView } from '../../../../../shared/components/skill/skill.types'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Skills } from '../../../../../common/skills/skills'
import { Company } from '../../../../../show/components/company/company'
import { LocationAndCooperationMode } from '../../../../../common/location-and-cooperation-mode/location-and-cooperation-mode'
import { useData } from '../../../../../../../../../../shared/app/functions/store/use-data'
import { Remuneration } from '../../../../../common/remuneration/remuneration'

let ReactQuill: any
if (typeof window !== 'undefined') {
  ReactQuill = require('react-quill')
}

export const SocialImage = () => {
  useStyles(styles)

  const {
    selectedSkills: skills,
    locality,
    country,
    cooperationMode,
    logo,
    businessName,
    industry,
    b2bMin,
    b2bMax,
  } = useInputs()

  const { industries, cooperationModes } = useData()

  const industryObject = useMemo(
    () => {
      return industries.find((ind: {
        value: string;
        label: string;
        icon: string;
      }) => {
        return ind.value === industry
      })
    },
    [industry]
  );

  const cooperationModeObject = useMemo(
    () => {
      return cooperationModes.find((coopMode: {
        value: string;
        icon: string;
      }) => {
        return coopMode.value === cooperationMode
      })
    },
    [cooperationMode]
  );

  const logoSrc = typeof logo === 'object' ? logo.objectUrl : `https://s3.eu-central-1.amazonaws.com/skillfind-tech-dev/logos/${logo}?salt=${Math.random()}`

  return (
    <section id='social-image'>
      {logo && businessName && industryObject && (
        <Company
          logo={logoSrc}
          businessName={businessName}
          industry={industryObject}
        />
      )}
      {locality && country && cooperationModeObject && (
        <LocationAndCooperationMode
          locality={locality}
          country={country}
          cooperationMode={cooperationModeObject}
        />
      )}
      <Remuneration
        b2bMin={b2bMin}
        b2bMax={b2bMax}
        // employmentMin={employmentMin}
        // employmentMax={employmentMax}
      />
      <Skills
        skills={skills}
        view={SkillView.indexVisitor}
      />
    </section>
  )
}
