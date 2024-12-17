import { ReactNode } from 'react';
import {
  TextInput as SemanticTextInput,
  TextInputType,
} from '../../semanticize/text-input/text-input';
import { SetErrors, SetInputs } from '../../../../../lib/types/setters';

export interface TextInputStyles {
  container: string;
  label: string;
  input: string;
}

export interface TextInputValidator {
  (params: { value: string; error: string; setErrors: SetErrors }): void;
}

interface TextInputInterface {
  (props: {
    inputProp: string;
    value: string;
    placeholder: string;
    label: string;
    setInputs: SetInputs;
    setErrors?: SetErrors;
    styles: {
      container: string;
      label: string;
      input: string;
    };

    onChange?(value?: string): void;
    onBlur?(value?: string): void;
    children?: ReactNode;
    disabled?: boolean;
    required?: boolean;
    optional?: boolean;
    type?: TextInputType;
    match?: RegExp;
    error?: string;
    isError?: string;
    id?: string;
    validator?: TextInputValidator;
    // onClick?(): void
    // onFocus?(): void
    // onEnter?(): void
  }): React.ReactElement;
}

export const TextInput: TextInputInterface = (props) => {
  const {
    id,
    inputProp,
    onChange: onChangeCallback,
    onBlur: onBlurCallback,
    children,
    disabled,
    required = false,
    optional = false,
    type,
    match,
    setInputs,
    setErrors,
    value,
    // match,
    // onClick: onClickCallback,
    // onEnter: onEnterCallback,
    // disabled,
    error,
    isError,
    placeholder,
    label,
    validator,
    styles,
  } = props;

  const onChange = (value: string) => {
    setInputs({ [inputProp]: value });
    onChangeCallback && onChangeCallback();
  };
  const onBlur = (value: string) => {
    onBlurCallback && onBlurCallback(value);
    validator &&
      error &&
      setErrors &&
      validator({
        value,
        error,
        setErrors,
      });
  };
  const onFocus = () => {
    setErrors && setErrors({ [inputProp]: null });
  };

  return (
    <SemanticTextInput
      id={id}
      type={type}
      value={value}
      label={
        <>
          {label}
          {/* {required && <SVG name="dot" className="required" />} */}
          {/* {optional && <SVG name="emptyDot" className="optional" />} */}
        </>
      }
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
      error={error && error}
      placeholder={placeholder}
      disabled={disabled}
      match={match}
      styles={styles}
    >
      {children}
    </SemanticTextInput>
  );
};
