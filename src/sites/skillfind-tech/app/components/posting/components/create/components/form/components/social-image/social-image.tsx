import React, { useMemo } from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useInputs } from '../../../../../../../../../../shared/app/functions/store/use-inputs'
import { useData } from '../../../../../../../../../../shared/app/functions/store/use-data'
import { Preview } from './components/preview/preview'

export const SocialImage = () => {
  useStyles(styles)

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

  return (
    <section id='social-image'>
      <Preview
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
