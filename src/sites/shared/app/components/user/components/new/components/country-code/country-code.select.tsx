import React from 'react'
import { useStore, useDispatch } from 'react-redux'
import { ManagedSelect } from 'managed-inputs'
import SVG from '../../../../../../../../mapawynajmu-pl/app/components/support/components/svg/svg'

export const CountryCodeSelect = () => {
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const { inputs } = useStore().getState()
  const { countryCode, countryCodes } = inputs
  const options = countryCodes.map((countryCode: string) => ({
    value: countryCode,
    text: countryCode,
  }))
  const classNames = { container: 'country-code' }
  // @ts-ignore
  const children = <SVG name='chevron' />
  const value = countryCode
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
