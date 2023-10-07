import React, { KeyboardEvent } from 'react'
import { ManagedText } from 'managed-inputs'
import { useInputs } from '../../../functions/store/use-inputs'
import { useData } from '../../../functions/store/use-data'
import { useDispatch } from 'react-redux'
import { GooglePlacesAutocompleteItem } from '../../../types/google-places-autocomplete'

interface AddressInputInterface {
  (props: {
    items: GooglePlacesAutocompleteItem[]
    currentItemIndex: number
    onInputEnter?(location: GooglePlacesAutocompleteItem): void
    setCurrentItem(autocompleteItem: number): void
  }): React.ReactElement
}

export const AddressInput: AddressInputInterface = props => {
  const { currentItemIndex, onInputEnter, setCurrentItem } = props
  const { location } = useInputs()
  const { items } = useData()
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
      const newCurrentAutocompleteItem = currentItemIndex === items.length - 1 ? 0 : currentItemIndex + 1

      setCurrentItem(newCurrentAutocompleteItem)
    } else if (key === 'ArrowUp') {
      const newCurrentAutocompleteItem = currentItemIndex === 0 ? items.length - 1 : currentItemIndex - 1

      setCurrentItem(newCurrentAutocompleteItem)
    }
  }
  const onEnter = async (e: KeyboardEvent) => {
    e.preventDefault()

    setCurrentItem(0)

    if (items.length === 0) return

    onInputEnter && onInputEnter(items[currentItemIndex])

    // @ts-expect-error: https://stackoverflow.com/questions/60504810/react-synteticevent-provides-no-blur-method-for-keyboardeventhtmlinputelement
    e.target.blur()
  }
  const onTab = () => {
    setControl({ showAutocompletes: false })
  }
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
        componentRestrictions: { country: 'pl' },
        sessionToken,
      },
      items => {
        if (!items) return setData({ items: [] })

        setData({ items })
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
