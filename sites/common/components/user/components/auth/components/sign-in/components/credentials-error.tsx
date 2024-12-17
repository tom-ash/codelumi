import React from 'react';
import { Styles } from '../../../../../../../../mapawynajmu-pl/types/styles';

interface CredentialsErrorProps {
  error: string;
  isError: boolean;
  className: string;
}

export const CredentialsError = (props: CredentialsErrorProps) => {
  const { error: errorMessage, isError, className } = props;

  const error = isError && errorMessage;

  if (!error) return null;

  return <div className={className}>{error}</div>;
};
