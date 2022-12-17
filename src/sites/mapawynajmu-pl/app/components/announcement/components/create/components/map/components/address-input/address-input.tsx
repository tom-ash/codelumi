import React from 'react'
import addPin from '../../functions/add-pin'
import { ManagedText } from 'managed-inputs'

export const AddressInput = (props: any) => {
  const { autocompleteInput, autocompletes, setState, changeInputs, changeErrors } = props

  const classNames = 'address-input'
  const label = 'Adres nieruchomości'
  const onFocus = () => setState({ showAutocompletes: true })
  const value = autocompleteInput
  const onKeyDown = (e: any) => {
    const key = e.key
    if (key === 'Enter') {
      if (autocompletes.length < 1) return

      const autocomplete = autocompletes[0]

      addPin({ autocomplete, setState, changeInputs, changeErrors })
      e.target.blur()
    } else if (key === 'Tab') {
      setState({ showAutocompletes: false })
    }
  }
  const onChange = (input: any) => {
    setState({ autocompleteInput: input })

    if (!input) return setState({ autocompletes: [] })

    // @ts-ignore
    const sessionToken = window.sessionToken
    const autocompleteService = new google.maps.places.AutocompleteService()

    autocompleteService.getPlacePredictions(
      { input, componentRestrictions: { country: 'pl' }, sessionToken },
      autocompletes => {
        if (!autocompletes) return setState({ autocompletes: [] })

        setState({ autocompletes })
      }
    )
  }

  const inputProps = {
    classNames,
    onFocus,
    value,
    onKeyDown,
    onChange,
    label,
    // onBlur,
  }

  return <ManagedText {...inputProps} />
}
