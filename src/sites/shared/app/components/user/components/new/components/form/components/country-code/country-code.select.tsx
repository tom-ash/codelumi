import React from 'react'
import { ManagedSelect } from 'managed-inputs'
import { SVG } from '../../../../../../../support/svg/svg'
import { useInputs } from '../../../../../../../../functions/store/use-inputs'
import { useDispatch } from 'react-redux'

export const CountryCodeSelect = () => {
  const { countryCode, countryCodes } = useInputs()
  const dispatch = useDispatch()
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
