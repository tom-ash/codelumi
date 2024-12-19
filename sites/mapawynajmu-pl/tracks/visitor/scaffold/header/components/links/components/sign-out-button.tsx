import React from 'react';
import { ManagedButton } from 'managed-inputs';
import { signOut } from '../../../../../users/auth/components/sign-out/functions/sign-out';
import { useTexts } from '../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { useLinks } from '../../../../../../../src copy/sites/shared/app/functions/store/use-links';

export const SignOutButton = () => {
  const { signOutButtonLabel: label } = useTexts();
  const links = useLinks();
  const href = links.root.href;
  const classNames = { container: 'header-link de-authorize' };
  const onClick = () => signOut({ href });

  const buttonProps = {
    classNames,
    label,
    onClick,
  };

  return <ManagedButton {...buttonProps} />;
};
