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
};

const Tracks = (props: { data: any }) => {
  const { data } = props;
  const { track } = data;
  const [state, dispatch] = useReducer(reducer, data.state);

  // console.log('track', track)

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
      return true
    }
    
    return false
  }, [])

  const app = {
    ...{
      scripts: {
        googleMaps,
        isMapInitialized: !!googleMaps,
      },
    },
    ...state.app,
  };

  const extendedState = {
    ...state,
    app,
    setApp,
    setData,
    setControl,
    setInputs,
    setErrors,
  };

  const view = views[track];

  if (!view) {
    return notFound();
  }

  return React.createElement(view, extendedState);
};

export default Tracks;
