import React, { KeyboardEvent } from 'react'
import { ManagedText } from 'managed-inputs'
import { useInputs } from '../../../functions/store/use-inputs'
import { useData } from '../../../functions/store/use-data'
import { useDispatch } from 'react-redux'
import { GooglePlacesAutocompleteItem } from '../../../types/google-places-autocomplete'

interface AddressInputInterface {
  (props: {
    autocompletes: GooglePlacesAutocompleteItem[],
    currentAutocompleteItemIndex: number,
    onInputEnter?(location: GooglePlacesAutocompleteItem): void
    setCurrentAutocompleteItem(autocompleteItem: number): void
  }): React.ReactElement
}

export const AddressInput: AddressInputInterface = (props) => {
  const { currentAutocompleteItemIndex, onInputEnter, setCurrentAutocompleteItem } = props
  const { location } = useInputs()
  const { autocompletes } = useData()
  const classNames = 'address-input'
  const value = location || ''
  const placeholder = 'Lokalizacja' // TODO: Use server localization.
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setData = (value: any) => dispatch({ type: 'data', value })
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const onFocus = () => setControl({ showAutocompletes: true })
  const onKeyDown = (_value: any, e: React.KeyboardEvent) => {
    const key = e.key

    if (key === 'ArrowDown') {
      const newCurrentAutocompleteItem = currentAutocompleteItemIndex === autocompletes.length - 1 ? 0 : currentAutocompleteItemIndex + 1

      setCurrentAutocompleteItem(newCurrentAutocompleteItem)
    } else if (key === 'ArrowUp') {
      const newCurrentAutocompleteItem = currentAutocompleteItemIndex === 0 ? autocompletes.length - 1 : currentAutocompleteItemIndex - 1

      setCurrentAutocompleteItem(newCurrentAutocompleteItem)
    }
  }
  const onEnter = async (e: KeyboardEvent) => {
    e.preventDefault()

    setCurrentAutocompleteItem(0)

    if (autocompletes.length === 0) return

    onInputEnter && onInputEnter(autocompletes[currentAutocompleteItemIndex])

    // @ts-expect-error: https://stackoverflow.com/questions/60504810/react-synteticevent-provides-no-blur-method-for-keyboardeventhtmlinputelement
    e.target.blur()
  }
  const onTab = () => {
    setControl({ showAutocompletes: false })
  }
  const onChange = (input: any) => {
    setInputs({ location: input })

    setCurrentAutocompleteItem(0)

    if (!input) return setData({ autocompletes: [] })

    // @ts-expect-error: TODO
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
    onKeyDown,
    onTab,
    onChange,
  }

  return <ManagedText {...inputProps} />
}
