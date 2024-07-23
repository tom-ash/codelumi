import React, { useMemo } from 'react'
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useData } from '../../../../../../../../../../shared/app/functions/store/use-data'
import { Preview } from './components/preview/preview'
import { SectionHeading } from '../../../../../../../../../../shared/app/components/support/headings/section-heading'
import { useApp } from '../../../../../../../../../../shared/app/functions/store/use-app'

export const SocialImage = () => {
  useStyles(styles)

  const { isMobile, screenWidth } = useApp()

  const {
    selectedSkills: skills,
    position,
    locality,
    country,
    cooperationMode,
    logo,
    businessName,
    industry,
    b2bMin,
    b2bMax,
    b2bCurrency: b2bCurrencyValue,
    b2bCurrencySelectOptions,
    employmentMin,
    employmentMax,
    employmentCurrency: employmentCurrencyValue,
    employmentCurrencySelectOptions,
  } = useInputs()

  // @ts-ignore
  const b2bCurrency = b2bCurrencySelectOptions.find(currency => currency.value === b2bCurrencyValue).text
  const employmentCurrency = employmentCurrencySelectOptions.find(
    // @ts-ignore
    currency => currency.value === employmentCurrencyValue
  ).text

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

  const logoSrc = typeof logo === 'object' ? logo.objectUrl : `${logo}?salt=${Math.random()}`

  const scale = isMobile ? (screenWidth - 60) / 1200 : 646 / 1200

  // let colorPickersHeight: number | undefined = 120
  let previewHeight: number | undefined = 130

  if (typeof document !== 'undefined') {
    // colorPickersHeight = document.getElementById('color-pickers')?.getBoundingClientRect().height
    previewHeight = document.getElementById('social-image-preview')?.getBoundingClientRect().height
  }

  const sectionHeight = useMemo(() => {
    if (previewHeight) {
      return 120 + previewHeight
    }

    return undefined
  }, [previewHeight])

  return (
    <section
      id='social-image'
      style={{
        height: sectionHeight,
      }}
    >
      {/* <SectionHeading name='socialImage' />
      <Preview
        id={'social-image-preview'}
        position={position}
        logo={logoSrc}
        businessName={businessName}
        industry={industryObject}
        locality={locality}
        country={country}
        cooperationMode={cooperationModeObject}
        b2bMin={b2bMin}
        b2bMax={b2bMax}
        b2bCurrency={b2bCurrency}
        employmentMin={employmentMin}
        employmentMax={employmentMax}
        employmentCurrency={employmentCurrency}
        skills={skills}
        scale={scale}
      /> */}
      <Preview
        id={'social-image-canvas'}
        position={position}
        logo={logoSrc}
        businessName={businessName}
        industry={industryObject}
        locality={locality}
        country={country}
        cooperationMode={cooperationModeObject}
        b2bMin={b2bMin}
        b2bMax={b2bMax}
        b2bCurrency={b2bCurrency}
        employmentMin={employmentMin}
        employmentMax={employmentMax}
        employmentCurrency={employmentCurrency}
        skills={skills}
      />
    </section>
  )
}
