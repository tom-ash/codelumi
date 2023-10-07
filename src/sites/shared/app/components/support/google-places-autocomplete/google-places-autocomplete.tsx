import React, { useState } from 'react'
import { SVG } from '../svg/svg'
import { AddressInput } from '../address-input/address-input'
import { useData } from '../../../functions/store/use-data'
import { GooglePlacesAutocompleteItem } from '../../../types/google-places-autocomplete'

interface GooglePlacesAutocompleteInterface {
  (props: {
    onItemClick?(location: GooglePlacesAutocompleteItem): void
    onInputEnter?(location: GooglePlacesAutocompleteItem): void
  }): React.ReactElement
}

export const GooglePlacesAutocomplete: GooglePlacesAutocompleteInterface = props => {
  const data = useData()
  const items = data.items as GooglePlacesAutocompleteItem[]
  const { onItemClick, onInputEnter } = props
  const [currentItemIndex, setCurrentItem] = useState(0)

  return (
    <div className='filter location'>
      <SVG name='marker' />
      <AddressInput
        items={items}
        currentItemIndex={currentItemIndex}
        onInputEnter={onInputEnter}
        setCurrentItem={setCurrentItem}
      />
      {items && items.length > 0 && (
        <div className='autocompletes'>
          {items.map((item, index) => {
            const { description } = item
            const className = currentItemIndex === index ? 'current' : undefined

            return (
              <div
                onClick={() => onItemClick && onItemClick(item)}
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
