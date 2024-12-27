'use client';

import dynamic from 'next/dynamic';

const UsersNewCredentialsFormView = dynamic(
  () => import('./visitor/users/new/credentials/form/view/view'),
);
const UsersNewCredentialsVerificationView = dynamic(
  () => import('./visitor/users/new/credentials/verification/view/view'),
);
const UsersNewCredentialsConfirmationView = dynamic(
  () => import('./visitor/users/new/credentials/confirmation/view/view'),
);

const UsersAuthCredentialsView = dynamic(
  () => import('./visitor/users/auth/credentials/view/view'),
);

const ListingsNewForm = dynamic(
  () => import('./visitor/listings/new/form/view/view'),
);
const ListingsNewConfirmation = dynamic(
  () => import('./visitor/listings/new/confirmation/view/view'),
);

const VisitorListingsIndex = dynamic(
  () => import('./visitor/listings/index/view/view'),
);

const Header = dynamic(() => import('./visitor/scaffold/header/header'));
const Footer = dynamic(() => import('./visitor/scaffold/footer/footer'));
const VisitorAdministrationCookiesPolicy = dynamic(
  () => import('./visitor/administration/cookies-policy/view/view'),
);
const VisitorAdministrationContact = dynamic(
  () => import('./visitor/administration/contact/view/view'),
);
const VisitorAdministrationPrivacyPolicy = dynamic(
  () => import('./visitor/administration/privacy-policy/view/view'),
);
const AdministrationTermsOfService = dynamic(
  () => import('./visitor/administration/terms-of-service/view/view'),
);

import { reducer, StateKey } from '../../../lib/helpers/reducer/reducer';
import {
  SetApp,
  SetControl,
  SetInputs,
  SetErrors,
  SetData,
} from '../../../lib/types/setters';
import React, { useReducer, useCallback, useMemo } from 'react';
import { notFound } from 'next/navigation';

const views: { [key: string]: React.ComponentType<any> } = {
  'user/new/form': UsersNewCredentialsFormView,
  'user/create/verification': UsersNewCredentialsVerificationView,
  'user/create/confirmation': UsersNewCredentialsConfirmationView,
  'user/auth': UsersAuthCredentialsView,
  'listings/new/form': ListingsNewForm,
  'announcement/create/summary': ListingsNewConfirmation,
  'announcement/show': VisitorListingsIndex,
  root: VisitorListingsIndex,
  'visitor/cookies-policy': VisitorAdministrationCookiesPolicy,
  'visitor/contact': VisitorAdministrationContact,
  'visitor/privacy-policy': VisitorAdministrationPrivacyPolicy,
  'visitor/terms-of-service': AdministrationTermsOfService,
};

const Tracks = (props: { data: any }) => {
  const { data } = props;
  const { track } = data;
  const [state, dispatch] = useReducer(reducer, data.state);

  const setApp: SetApp = useCallback(
    (value) => dispatch({ type: StateKey.APP, value }),
    [],
  );
  const setData: SetData = useCallback(
    (value) => dispatch({ type: StateKey.DATA, value }),
    [],
  );
  const setControl: SetControl = useCallback(
    (value) => dispatch({ type: StateKey.CONTROL, value }),
    [],
  );
  const setInputs: SetInputs = useCallback(
    (value) => dispatch({ type: StateKey.INPUTS, value }),
    [],
  );
  const setErrors: SetErrors = useCallback(
    (value) => dispatch({ type: StateKey.ERRORS, value }),
    [],
  );

  const googleMaps = useMemo(() => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.googleMap) {
      return true;
    }

    return false;
  }, []);

  const isMobile = useMemo(() => {
    if (typeof window !== 'undefined') {
      return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    }
  }, []);

  const app = {
    ...{
      scripts: {
        googleMaps,
        // isMapInitialized: !!googleMaps,
        isMobile,
      },
    },
    ...state.app,
  };

  const user = {
    ...{
      authenticated: state.user.authorized,
    },
    ...state.user,
  };

  const extendedState = {
    ...state,
    app,
    user,
    setApp,
    setData,
    setControl,
    setInputs,
    setErrors,
  };

  console.log('track', track);

  const view = views[track];

  if (!view) {
    return notFound();
  }

  const rootLinkData = state.links.root;

  console.log('state', extendedState);

  return (
    <>
      <Header
        rootLinkData={rootLinkData}
        lang={state.app.lang}
        authenticated={extendedState.user.authenticated}
        currentPlLinkData={state.links['current/pl']}
        currentEnLinkData={state.links['current/en']}
        visitorListingsNewLinkData={state.links['listings/new/form']}
        visitorUsersNewLinkData={state.links['user/new/form']}
        visitorUsersAuthLinkData={state.links['user/auth']}
        setControl={setControl}
        showPCUserUsersShowDropDown={state.control.showPCUserUsersShowDropDown}
      />
      {React.createElement(view, extendedState)}
      <Footer
        facebookLinkData={state.links['facebook']}
        linkedinLinkData={state.links['linkedin']}
        contactLinkData={state.links['visitor/contact']}
        termsOfServiceLinkData={state.links['visitor/terms-of-service']}
        cookiesPolicyLinkData={state.links['visitor/cookies-policy']}
        privacyPolicyLinkData={state.links['visitor/privacy-policy']}
        privacySettingsLinkData={state.links['visitor/privacy-settings']}
      />
    </>
  );
};

export default Tracks;
