import React from 'react';
import ManagedButton from '../../managed-inputs/button/button';

interface ActionButtonProps {
  label: React.ReactElement | string;
  action(): void;
  disabled?: boolean;
  styles: {
    container: string;
  };
}

export const ActionButton = (props: ActionButtonProps) => {
  const { label, action, disabled, styles } = props;

  return (
    <ManagedButton
      label={label}
      onClick={action}
      disabled={disabled}
      classNames={{
        container: styles.container,
      }}
    />
  );
};
