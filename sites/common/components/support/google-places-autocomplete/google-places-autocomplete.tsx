import { useState } from 'react';
import { GooglePlacesAutocompleteResult } from '../../../types/google-places-autocomplete';
import {
  AddressInput,
  GooglePlacesAutocompleteCountry,
} from '../address-input/address-input';
import {
  SetData,
  SetErrors,
  SetInputs,
} from '../../../../../lib/types/setters';
import { Styles } from '../../../../mapawynajmu-pl/types/styles';

interface GooglePlacesAutocompleteProps {
  onItemClick?(location: GooglePlacesAutocompleteResult): void;
  onInputEnter?(location: GooglePlacesAutocompleteResult): void;
  isError?: boolean;
  country?: GooglePlacesAutocompleteCountry;
  items: GooglePlacesAutocompleteResult[];
  setData: SetData;
  setInputs: SetInputs;
  setErrors: SetErrors;
  location: string;
  placeholder: string;
  addressInputStyles: Styles;
}

export const GooglePlacesAutocomplete = (
  props: GooglePlacesAutocompleteProps,
) => {
  const {
    onItemClick,
    onInputEnter,
    isError,
    country,
    items,
    setData,
    setInputs,
    setErrors,
    location,
    placeholder,
    addressInputStyles,
  } = props;

  const [currentItemIndex, setCurrentItem] = useState(0);
  const [hideItemsOnBlur, setHideItemsOnBlur] = useState(true);

  return (
    <div className="filter location">
      <AddressInput
        items={items}
        currentItemIndex={currentItemIndex}
        hideItemsOnBlur={hideItemsOnBlur}
        onInputEnter={onInputEnter}
        setCurrentItem={setCurrentItem}
        setHideItemsOnBlur={setHideItemsOnBlur}
        isError={isError}
        country={country}
        setData={setData}
        setInputs={setInputs}
        setErrors={setErrors}
        location={location}
        placeholder={placeholder}
        styles={addressInputStyles}
      />
      {items && items.length > 0 && (
        <div
          className="autocompletes"
          onMouseOver={() => setHideItemsOnBlur(false)}
          onMouseLeave={() => setHideItemsOnBlur(true)}
        >
          <ul>
            {items.map((item, index) => {
              const { description } = item;
              const className =
                currentItemIndex === index ? 'current' : undefined;

              return (
                <li
                  key={description}
                  onClick={() => {
                    setHideItemsOnBlur(true);
                    onItemClick && onItemClick(item);
                  }}
                  className={className}
                >
                  {description}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
