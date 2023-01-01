import React, { KeyboardEvent } from 'react'
import addPin from '../../functions/add-pin'
import { ManagedText } from 'managed-inputs'

export const AddressInput = (props: any) => {
  const { autocompleteInput, autocompletes, setState, changeInputs, changeErrors } = props

  const classNames = 'address-input'
  const label = 'Adres nieruchomości'
  const value = autocompleteInput
  const placeholder = 'Miasto, ulica i numer budynku'
  const onFocus = () => setState({ showAutocompletes: true })
  const onEnter = (e: KeyboardEvent) => {
    e.preventDefault()

    if (autocompletes.length === 0) return

    const autocomplete = autocompletes[0]

    addPin({ autocomplete, setState, changeInputs, changeErrors })

    // @ts-ignore
    // https://stackoverflow.com/questions/60504810/react-synteticevent-provides-no-blur-method-for-keyboardeventhtmlinputelement
    e.target.blur()
  }
  const onTab = () => {
    setState({ showAutocompletes: false })
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
    label,
    value,
    placeholder,
    onFocus,
    onEnter,
    onTab,
    onChange,
  }

  return <ManagedText {...inputProps} />
}
