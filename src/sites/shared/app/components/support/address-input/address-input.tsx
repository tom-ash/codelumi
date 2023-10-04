import React, { KeyboardEvent } from 'react'
import { ManagedText } from 'managed-inputs'
import { useInputs } from '../../../functions/store/use-inputs'
import { useData } from '../../../functions/store/use-data'
import { useDispatch } from 'react-redux'
// import { getLocationByPlaceId } from '../../../functions/map/google/get-location-by-place-id'
import { GooglePlacesAutocompleteItem } from '../../../types/google-places-autocomplete'

interface AddressInputInterface {
  (props: {
    onInputEnter?(location: GooglePlacesAutocompleteItem): void
  }): React.ReactElement
}

export const AddressInput: AddressInputInterface = (props) => {
  const { onInputEnter } = props
  const { location } = useInputs()
  const { autocompletes } = useData()
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setData = (value: any) => dispatch({ type: 'data', value })
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const classNames = 'address-input'
  const value = location || ''
  const placeholder = 'Lokalizacja'
  const onFocus = () => setControl({ showAutocompletes: true })
  const onEnter = async (e: KeyboardEvent) => {
    e.preventDefault()

    if (autocompletes.length === 0) return

    onInputEnter && onInputEnter(autocompletes[0])

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

        setData({ autocompletes })
      }
    )
  }

  const inputProps = {
    classNames,
    value,
    placeholder,
    onFocus,
    onEnter,
    onTab,
    onChange,
  }

  return <ManagedText {...inputProps} />
}
