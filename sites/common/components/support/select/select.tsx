import { ReactNode, useMemo } from 'react';
import {
  SelectOption,
  Select as SemanticSelect,
  SelectOptionValue,
} from '../../../../common/components/semanticize/select/select';
import { SetInputs } from '../../../../../lib/types/setters';

export interface SelectStyles {
  container: string;
  label: string;
  input: string;
  options: string;
}

interface SelectProps {
  inputProp: string;
  label: string | React.ReactElement;
  placeholder: string;
  options: SelectOption[];
  value: SelectOptionValue;
  styles: SelectStyles;
  id?: string;
  searchable?: boolean;
  children?: ReactNode;
  onChangeCallback?(): void;
  disabled?: boolean;
  required?: boolean;
  optional?: boolean;
  setInputs: SetInputs;
}

export const Select = (props: SelectProps) => {
  const {
    inputProp,
    onChangeCallback,
    options,
    value,
    label,
    placeholder,
    setInputs,
    styles,
  } = props;

  const onSelect = (value: string) => {
    setInputs({ [inputProp]: value });
    onChangeCallback && onChangeCallback();
  };

  const parsedOptions = useMemo(() => {
    return options.map((option: any) => {
      return {
        ...option,
        ...(option.icon && {
          jsx: (
            <>
              <span className="icon">
                TODO
                {/* <SVG name={option.icon} /> */}
              </span>
              <span className="text">{option.text}</span>
            </>
          ),
        }),
      };
    });
  }, [options]);

  return (
    <SemanticSelect
      label={
        <>
          {label}
          {/* {required && <SVG name="dot" className="required" />} */}
          {/* {optional && <SVG name="emptyDot" className="optional" />} */}
        </>
      }
      options={parsedOptions}
      value={value}
      onSelect={onSelect}
      styles={styles}
      placeholder={placeholder}
    />
  );
};
