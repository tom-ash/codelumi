import React from 'react';
import { VisitorPageIndexLink } from './components/visitor-page-index.link';
import { SignInLink } from './components/sign-in';
import { ListingNewLink } from './components/listing-new-link';
import { MyAccountControlButton } from './components/my-account.control-button';
import { useUser } from '../../../../../../src copy/sites/shared/app/functions/store/use-user';
import { UserNewLink } from './components/user-new-link';

const UserLinks = () => {
  const { authorized } = useUser();

  return (
    <>
      {authorized ? (
        <MyAccountControlButton />
      ) : (
        <>
          <UserNewLink />
          <SignInLink />
        </>
      )}
    </>
  );
};

export const Links = () => {
  return (
    <div className="links">
      <ListingNewLink />
      <UserLinks />
      <VisitorPageIndexLink />
    </div>
  );
};
