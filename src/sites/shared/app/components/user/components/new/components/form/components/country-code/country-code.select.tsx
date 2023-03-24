import React from 'react'
import { ManagedSelect } from 'managed-inputs'
import { SVG } from '../../../../../../../support/svg/svg'
import { useStore } from '../../../../../../../../functions/store/useStore'

export const CountryCodeSelect = () => {
  const { state, dispatch } = useStore()
  const { inputs } = state
  const { countryCode, countryCodes } = inputs
  const options = countryCodes.map((countryCode: string) => ({
    value: countryCode,
    text: countryCode,
  }))
  const classNames = { container: 'country-code' }
  const children = <SVG name='chevron' />
  const value = countryCode
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const onSelect = ({ value: countryCode }: { value: string }) => setInputs({ countryCode })

  const emailAddressInputProps = {
    classNames,
    children,
    options,
    value,
    onSelect,
  }

  return <ManagedSelect {...emailAddressInputProps} />
}
