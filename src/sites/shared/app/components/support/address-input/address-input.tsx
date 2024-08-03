import React, { KeyboardEvent } from 'react'
import { useDispatch } from 'react-redux'
import { useTexts } from '../../../functions/store/use-texts'
import { useData } from '../../../functions/store/use-data'
import { useInputs } from '../../../functions/store/use-inputs'
import { ManagedText } from 'managed-inputs'
import { GooglePlacesAutocompleteItem } from '../../../types/google-places-autocomplete'

export type GooglePlacesAutocompleteCountry = string | string[]

interface AddressInputInterface {
  (props: {
    items: GooglePlacesAutocompleteItem[]
    currentItemIndex: number
    hideItemsOnBlur: boolean
    onInputEnter?(location: GooglePlacesAutocompleteItem): void
    setCurrentItem(autocompleteItem: number): void
    setHideItemsOnBlur(hideItemsOnBlur: boolean): void
    isError?: boolean
    country?: GooglePlacesAutocompleteCountry
  }): React.ReactElement
}

export const AddressInput: AddressInputInterface = props => {
  const { currentItemIndex, hideItemsOnBlur, onInputEnter, setCurrentItem, setHideItemsOnBlur, isError, country } = props
  const { placesAutocompleteInputPlaceholder: placeholder } = useTexts()
  const { location } = useInputs()
  const { items } = useData()
  const containerClassNames = 'address-input'
  const value = location || ''
  const dispatch = useDispatch()
  const setInputs = (value: any) => dispatch({ type: 'inputs', value })
  const setData = (value: any) => dispatch({ type: 'data', value })
  const setErrors = (value: any) => dispatch({ type: 'errors', value })
  const onKeyDown = (_value: any, e: React.KeyboardEvent) => {
    const key = e.key

    if (key === 'ArrowDown') {
      const newCurrentAutocompleteItem = currentItemIndex === items.length - 1 ? 0 : currentItemIndex + 1

      setCurrentItem(newCurrentAutocompleteItem)
    } else if (key === 'ArrowUp') {
      const newCurrentAutocompleteItem = currentItemIndex === 0 ? items.length - 1 : currentItemIndex - 1

      setCurrentItem(newCurrentAutocompleteItem)
    }
  }
  const onEnter = async (e: KeyboardEvent) => {
    e.preventDefault()

    setHideItemsOnBlur(true)

    if (items.length === 0) return

    onInputEnter && onInputEnter(items[currentItemIndex])

    // setErrors({ isLocationError: false })

    // @ts-expect-error: https://stackoverflow.com/questions/60504810/react-synteticevent-provides-no-blur-method-for-keyboardeventhtmlinputelement
    e.target.blur()
  }
  const onTab = () => setHideItemsOnBlur(true)
  const onChange = (input: any) => {
    setInputs({ location: input })

    setCurrentItem(0)

    if (!input) return setData({ items: [] })

    // @ts-expect-error: TODO
    const sessionToken = window.sessionToken
    const autocompleteService = new google.maps.places.AutocompleteService()

    autocompleteService.getPlacePredictions(
      {
        input,
        sessionToken,
        ...country && { componentRestrictions: { country } },
      },
      items => {
        if (!items) return setData({ items: [] })

        setData({ items })
      }
    )

    setErrors({ isLocationError: false })
  }

  const inputProps = {
    classNames: { container: containerClassNames },
    placeholder,
    value,
    onEnter,
    onKeyDown,
    error: isError,
    onTab,
    onChange,
    onBlur: () => {
      if (hideItemsOnBlur) {
        setData({ items: [] })
      }
    },
  }

  return <ManagedText {...inputProps} />
}
