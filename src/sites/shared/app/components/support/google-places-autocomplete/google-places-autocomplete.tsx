import React from 'react'
import { SVG } from '../svg/svg'
import { AddressInput } from '../address-input/address-input'
import { useData } from '../../../functions/store/use-data'
import { GooglePlacesAutocompleteItem } from '../../../types/google-places-autocomplete'

interface GooglePlacesAutocompleteInterface {
  (props: {
    onItemClick?(location: GooglePlacesAutocompleteItem): void;
    onInputEnter?(location: GooglePlacesAutocompleteItem): void;
  }): React.ReactElement
}

export const GooglePlacesAutocomplete: GooglePlacesAutocompleteInterface = (props) => {
  const data = useData()
  const autocompletes = data.autocompletes as GooglePlacesAutocompleteItem[]
  const { onItemClick, onInputEnter } = props

  return (
    <div className='filter location'>
      <SVG name='marker' />
      <AddressInput onInputEnter={onInputEnter} />
      {autocompletes && autocompletes.length > 0 && (
        <div className='autocompletes'>
          {autocompletes.map(autocomplete => {
            const { description } = autocomplete

            return (
              <div onClick={() => onItemClick && onItemClick(autocomplete)}>
                {description}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
