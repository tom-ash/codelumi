import React, { SyntheticEvent }  from 'react'
import addPin from '../../functions/add-pin'
import { ManagedText } from 'managed-inputs'

export const AddressInput = (props: any) => {
  const { autocompleteInput, autocompletes, setState, changeInputs, changeErrors } = props

  const classNames = 'address-input'
  const label = 'Adres nieruchomości'
  const onFocus = () => setState({ showAutocompletes: true })
  const value = autocompleteInput
  const placeholder = 'Miasto, ulica i numer budynku'
  const onKeyDown = (_keyValue: string, e: KeyboardEvent) => {
    const key = e.key
    if (key === 'Enter') {
      e.preventDefault()

      if (autocompletes.length === 0) return

      const autocomplete = autocompletes[0]

      addPin({ autocomplete, setState, changeInputs, changeErrors })
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

  // const onEnter = (e: SyntheticEvent) => {
  //   e.preventDefault()
  //   console.log("HERE HERE HERE")
  //   console.log('asdasdasdasdasdasdasdas')
  // }

  const inputProps = {
    classNames,
    label,
    value,
    placeholder,
    onFocus,
    onKeyDown,
    onChange,
  }

  return <ManagedText {...inputProps} />
}
