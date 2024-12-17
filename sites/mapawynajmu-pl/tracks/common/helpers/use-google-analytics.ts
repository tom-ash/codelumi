import { useGoogleAnalyticsFactory } from '../../../../../_sites/shared/app/functions/use-google-analytics-factory';
import { getGoogleAnalyticsMeasurementId } from './analytics/google/getters/measurement-id';

export const useGoogleAnalytics = useGoogleAnalyticsFactory(
  getGoogleAnalyticsMeasurementId(),
);
