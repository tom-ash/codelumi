import React from 'react';
import { ManagedButton } from 'managed-inputs';

interface DeleteButtonInterface {
  (props: {
    label: string;
    connecting: boolean;
    onClick: any; // TODO: TS!
  }): JSX.Element;
}

export const DeleteButton: DeleteButtonInterface = (props) => {
  const { label, connecting: disabled, onClick } = props;
  const classNames = { container: 'delete-button' };

  const buttonProps = {
    disabled,
    classNames,
    label,
    onClick,
  };

  return <ManagedButton {...buttonProps} />;
};
