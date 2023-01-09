import React from 'react'
import { type Dispatch } from 'redux'
import { ManagedSelect } from 'managed-inputs'
import { countryCodes } from '../../../../../../../../../../../../shared/shared/constants/country-codes'
import SVG from '../../../../../../../../../support/components/svg/svg'

const options = countryCodes.map(countryCode => ({
  value: countryCode,
  text: countryCode,
}))

interface CountryCodeSelectProps {
  countryCode: string
  dispatch: Dispatch
}

export const CountryCodeSelect = (props: CountryCodeSelectProps) => {
  const { countryCode, dispatch } = props
  const classNames = { container: 'country-code' }
  // @ts-ignore
  const children = <SVG name='chevron' />
  const value = countryCode
  const onSelect = (option: { value: string }) => {
    dispatch({
      type: 'user/create/inputs',
      value: { countryCode: option.value }
    })
  }

  const emailAddressInputProps = {
    classNames,
    children,
    options,
    value,
    onSelect,
  }

  return <ManagedSelect {...emailAddressInputProps} />
}
