import React from 'react';
import { ManagedButton } from 'managed-inputs';

interface DeleteButtonInterface {
  (props: {
    label: string;
    connecting: boolean;
    onClick: any; // TODO: TS!
  }): JSX.Element;
}

export const UpdateButton: DeleteButtonInterface = (props) => {
  const { label, connecting: disabled, onClick } = props;
  const classNames = { container: 'update-button' };

  const buttonProps = {
    disabled,
    classNames,
    label,
    onClick,
  };

  return <ManagedButton {...buttonProps} />;
};
