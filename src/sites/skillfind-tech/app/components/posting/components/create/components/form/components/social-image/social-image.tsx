import React, { useMemo } from 'react'
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useData } from '../../../../../../../../../../shared/app/functions/store/use-data'
import { Preview } from './components/preview/preview'
import { ColorPicker } from '../../../../../../../../../../shared/app/components/support/color-picker/color-picker'
import { SectionHeading } from '../../../../../../../../../../shared/app/components/support/headings/section-heading'

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
    employmentMin,
    employmentMax,
    backgroundColor,
    textColor,
  } = useInputs()

  const { industries, cooperationModes } = useData()

  const industryObject = useMemo(() => {
    return industries.find((ind: { value: string; label: string; icon: string }) => {
      return ind.value === industry
    })
  }, [industry])

  const cooperationModeObject = useMemo(() => {
    return cooperationModes.find((coopMode: { value: string; icon: string }) => {
      return coopMode.value === cooperationMode
    })
  }, [cooperationMode])

  const logoSrc =
    typeof logo === 'object'
      ? logo.objectUrl
      : `${logo}?salt=${Math.random()}`

  return (
    <section id='social-image'>
      <SectionHeading name='socialImage' />
      <ColorPicker
        label='Background Color'
        name='backgroundColor'
      />
      <ColorPicker
        label='Text Color'
        name='textColor'
      />
      <Preview
        id={'social-image-preview'}
        logo={logoSrc}
        businessName={businessName}
        industry={industryObject}
        backgroundColor={backgroundColor}
        textColor={textColor}
        locality={locality}
        country={country}
        cooperationMode={cooperationModeObject}
        b2bMin={b2bMin}
        b2bMax={b2bMax}
        employmentMin={employmentMin}
        employmentMax={employmentMax}
        skills={skills}
      />
      <Preview
        id={'social-image-canvas'}
        logo={logoSrc}
        businessName={businessName}
        industry={industryObject}
        backgroundColor={backgroundColor}
        textColor={textColor}
        locality={locality}
        country={country}
        cooperationMode={cooperationModeObject}
        b2bMin={b2bMin}
        b2bMax={b2bMax}
        employmentMin={employmentMin}
        employmentMax={employmentMax}
        skills={skills}
      />
    </section>
  )
}
