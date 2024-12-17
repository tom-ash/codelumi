import { matchStateToRoute } from './routes/matchers/state-to-route';
import { useStateToRouteMatcherFactory } from '../../../../../_sites/shared/app/functions/use-state-to-route-matcher-factory';

export const useStateToRouteMatcher =
  useStateToRouteMatcherFactory(matchStateToRoute);
