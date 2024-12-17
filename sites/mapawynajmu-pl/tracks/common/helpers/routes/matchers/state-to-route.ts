import { matchStateToRouteGeneric } from '../../../../../../../_sites/shared/app/functions/routes/matchers/state-to-route-generic';
import clientUrl from '../../../../../../../_sites/mapawynajmu-pl/shared/constants/urls/client';
import apiUrl from '../../../../../../../_sites/mapawynajmu-pl/shared/constants/urls/api';
import { Dispatch } from 'redux';

interface MatchStateToRoute {
  (args: { isSSR: boolean; dispatch: Dispatch }): void;
}

export const matchStateToRoute: MatchStateToRoute = (args) => {
  const { isSSR, dispatch } = args;

  const customHeaders = {
    'Is-Listings-Obsolete': `${!!window.areListingsObsolete}`,
  };

  window.areListingsObsolete = false;

  matchStateToRouteGeneric({
    clientUrl,
    apiUrl,
    isSSR,
    customHeaders,
    dispatch,
  });
};
