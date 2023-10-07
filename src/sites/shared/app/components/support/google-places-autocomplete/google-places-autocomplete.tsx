import React, { useState } from 'react'
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
  const [currentAutocompleteItemIndex, setCurrentAutocompleteItem] = useState(0)

  return (
    <div className='filter location'>
      <SVG name='marker' />
      <AddressInput
        onInputEnter={onInputEnter}
        autocompletes={autocompletes}
        currentAutocompleteItemIndex={currentAutocompleteItemIndex}
        setCurrentAutocompleteItem={setCurrentAutocompleteItem}
      />
      {autocompletes && autocompletes.length > 0 && (
        <div className='autocompletes'>
          {autocompletes.map((autocomplete, index) => {
            const { description } = autocomplete
            const className = currentAutocompleteItemIndex === index ? 'current' : undefined

            return (
              <div
                onClick={() => onItemClick && onItemClick(autocomplete)}
                className={className}
              >
                {description}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
