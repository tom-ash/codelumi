import React, { useState } from 'react'
import { SVG } from '../svg/svg'
import { AddressInput } from '../address-input/address-input'
import { useData } from '../../../functions/store/use-data'
import { GooglePlacesAutocompleteItem } from '../../../types/google-places-autocomplete'

interface GooglePlacesAutocompleteInterface {
  (props: {
    onItemClick?(location: GooglePlacesAutocompleteItem): void
    onInputEnter?(location: GooglePlacesAutocompleteItem): void
    isError?: boolean;
  }): React.ReactElement
}

export const GooglePlacesAutocomplete: GooglePlacesAutocompleteInterface = props => {
  const data = useData()
  const items = data.items as GooglePlacesAutocompleteItem[]
  const { onItemClick, onInputEnter, isError } = props
  const [currentItemIndex, setCurrentItem] = useState(0)
  const [hideItemsOnBlur, setHideItemsOnBlur] = useState(true)

  return (
    <div className='filter location'>
      <SVG name='marker' />
      <AddressInput
        items={items}
        currentItemIndex={currentItemIndex}
        hideItemsOnBlur={hideItemsOnBlur}
        onInputEnter={onInputEnter}
        setCurrentItem={setCurrentItem}
        setHideItemsOnBlur={setHideItemsOnBlur}
        isError={isError}
      />
      {items && items.length > 0 && (
        <div
          className='autocompletes'
          onMouseOver={() => setHideItemsOnBlur(false)}
          onMouseLeave={() => setHideItemsOnBlur(true)}
        >
          <ul>
            {items.map((item, index) => {
              const { description } = item
              const className = currentItemIndex === index ? 'current' : undefined

              return (
                <li
                  onClick={() => {
                    setHideItemsOnBlur(true)
                    onItemClick && onItemClick(item)
                  }}
                  className={className}
                >
                  {description}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
