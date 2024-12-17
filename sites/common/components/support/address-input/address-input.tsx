import {
  SetData,
  SetErrors,
  SetInputs,
} from '../../../../../lib/types/setters';
import { Styles } from '../../../../mapawynajmu-pl/types/styles';
import { GooglePlacesAutocompleteResult } from '../../../types/google-places-autocomplete';
import ManagedText from '../../managed-inputs/text/text';

export type GooglePlacesAutocompleteCountry = string | string[];

interface AddressInputProps {
  items: GooglePlacesAutocompleteResult[];
  currentItemIndex: number;
  hideItemsOnBlur: boolean;
  onInputEnter?(location: GooglePlacesAutocompleteResult): void;
  setCurrentItem(autocompleteItem: number): void;
  setHideItemsOnBlur(hideItemsOnBlur: boolean): void;
  isError?: boolean;
  country?: GooglePlacesAutocompleteCountry;
  placeholder: string;
  location: string;
  setData: SetData;
  setInputs: SetInputs;
  setErrors: SetErrors;
  styles: Styles;
}

export const AddressInput = (props: AddressInputProps) => {
  const {
    currentItemIndex,
    hideItemsOnBlur,
    onInputEnter,
    setCurrentItem,
    setHideItemsOnBlur,
    isError,
    country,
    placeholder,
    location,
    items,
    setData,
    setInputs,
    setErrors,
    styles,
  } = props;
  const containerClassNames = 'address-input';
  const value = location || '';
  const onKeyDown = (_value: any, e: React.KeyboardEvent) => {
    const key = e.key;

    if (key === 'ArrowDown') {
      const newCurrentAutocompleteItem =
        currentItemIndex === items.length - 1 ? 0 : currentItemIndex + 1;

      setCurrentItem(newCurrentAutocompleteItem);
    } else if (key === 'ArrowUp') {
      const newCurrentAutocompleteItem =
        currentItemIndex === 0 ? items.length - 1 : currentItemIndex - 1;

      setCurrentItem(newCurrentAutocompleteItem);
    }
  };
  const onEnter = async (e: KeyboardEvent) => {
    e.preventDefault();

    setHideItemsOnBlur(true);

    if (items.length === 0) return;

    onInputEnter && onInputEnter(items[currentItemIndex]);

    // setErrors({ isLocationError: false })

    // @ts-expect-error: https://stackoverflow.com/questions/60504810/react-synteticevent-provides-no-blur-method-for-keyboardeventhtmlinputelement
    e.target.blur();
  };
  const onTab = () => setHideItemsOnBlur(true);
  const onChange = (input: any) => {
    setInputs({ location: input });

    setCurrentItem(0);

    if (!input) return setData({ locationAutocompleteResults: [] });

    // @ts-expect-error: TODO
    const sessionToken = window.sessionToken;
    // @ts-ignore
    const autocompleteService = new google.maps.places.AutocompleteService();

    autocompleteService.getPlacePredictions(
      {
        input,
        sessionToken,
        ...(country && { componentRestrictions: { country } }),
      },
      (locationAutocompleteResults: GooglePlacesAutocompleteResult[]) => {
        if (!locationAutocompleteResults)
          return setData({ locationAutocompleteResults: [] });

        setData({ locationAutocompleteResults });
      },
    );

    setErrors({ isLocationError: false });
  };

  const inputProps = {
    classNames: {
      container: styles.container,
      label: styles.label,
      input: styles.input,
      error: styles.error,
    },
    placeholder,
    value,
    onEnter,
    onKeyDown,
    error: isError,
    onTab,
    onChange,
    // onBlur: () => {
    //   if (hideItemsOnBlur) {
    //     setData({ locationAutocompleteResults: [] });
    //   }
    // },
  };

  return <ManagedText {...inputProps} />;
};
