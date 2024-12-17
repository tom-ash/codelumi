import React, {
  ChangeEvent,
  KeyboardEventHandler,
  ReactNode,
  useCallback,
} from 'react';

export enum TextInputType {
  TEXT = 'text',
  SEARCH = 'search',
  URL = 'url',
  EMAIL = 'email',
  TEL = 'tel',
  PASSWORD = 'password',
  NUMBER = 'number',
}

interface TextInputProps {
  id?: string;
  type?: TextInputType;
  label?: string | React.ReactElement;
  value?: string;
  disabled?: boolean;
  error?: string;
  children?: ReactNode;
  onChange?(newValue: string, changeEvent?: ChangeEvent): void;
  onFocus?(currentValue: string, changeEvent?: ChangeEvent): void;
  onBlur?(currentValue: string, changeEvent?: ChangeEvent): void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  disableCaret?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  match?: RegExp;
  styles?: {
    container?: string;
    label?: string;
    input?: string;
  };
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const {
      label,
      id,
      value,
      onChange: customOnChange,
      onBlur,
      onFocus,
      disabled,
      error,
      children,
      disableCaret = false,
      onKeyDown,
      placeholder,
      readOnly,
      type = TextInputType.TEXT,
      match,
      styles,
    } = props;

    const containerClassNames = [styles?.container];
    const labelClassNames = [styles?.label];
    const inputClassNames = [styles?.input];

    if (error) {
      containerClassNames.push('error');
      labelClassNames.push('error');
      inputClassNames.push('error');
    }

    const style: React.CSSProperties = {};

    if (disableCaret) {
      style['caretColor'] = 'transparent';
    }

    const onChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!match || e.target.value.match(match)) {
          customOnChange && customOnChange(e.target.value, e);
        }
      },
      [match, customOnChange],
    );

    return (
      <div className={containerClassNames.join(' ')}>
        {label && <label className={labelClassNames.join(' ')}>{label}</label>}
        <input
          ref={ref}
          id={id}
          type={type}
          readOnly={readOnly}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          style={style}
          onKeyDown={onKeyDown}
          onFocus={onFocus ? (e) => onFocus(e.target.value, e) : undefined}
          onChange={onChange}
          onBlur={onBlur ? (e) => onBlur(e.target.value, e) : undefined}
          className={inputClassNames.join(' ')}
        />
        {children}
        {error && <div className="error">{error}</div>}
      </div>
    );
  },
);
