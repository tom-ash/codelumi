import React, { KeyboardEvent } from 'react'
import { ManagedText } from 'managed-inputs'
import { useInputs } from '../../../functions/store/use-inputs'
import { useData } from '../../../functions/store/use-data'
import { useDispatch } from 'react-redux'

export const AddressInput = () => {
  const { location } = useInputs()
  const { autocompletes } = useData()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setData = (value: any) => dispatch({ type: 'data', value })
  const setControl = (value: any) => dispatch({ type: 'data', value })
  const classNames = 'address-input'
  // const label = 'TODO Adres nieruchomości'
  const value = location || ''
  const placeholder = 'Lokalizacja'
  const onFocus = () => setControl({ showAutocompletes: true })
  const onEnter = (e: KeyboardEvent) => {
    e.preventDefault()

    if (autocompletes.length === 0) return

    const location = autocompletes[0]

    // TODO!!!

    // @ts-ignore
    // https://stackoverflow.com/questions/60504810/react-synteticevent-provides-no-blur-method-for-keyboardeventhtmlinputelement
    e.target.blur()
  }
  const onTab = () => {
    setControl({ showAutocompletes: false })
  }
  const onChange = (input: any) => {
    setInputs({ location: input })

    if (!input) return setData({ autocompletes: [] })

    // @ts-ignore
    const sessionToken = window.sessionToken
    const autocompleteService = new google.maps.places.AutocompleteService()

    autocompleteService.getPlacePredictions(
      {
        input,
        componentRestrictions: { country: 'pl' },
        sessionToken
      },
      autocompletes => {
        if (!autocompletes) return setData({ autocompletes: [] })

        // console.log(autocompletes)

        setData({ autocompletes })
      }
    )
  }

  console.log('HERE', value)

  const inputProps = {
    classNames,
    // label,
    value,
    placeholder,
    onFocus,
    onEnter,
    onTab,
    onChange,
  }

  return <ManagedText {...inputProps} />
}
