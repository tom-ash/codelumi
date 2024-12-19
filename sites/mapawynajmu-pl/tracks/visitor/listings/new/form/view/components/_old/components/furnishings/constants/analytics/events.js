import * as actions from './actions';
import { buildEvents } from '../../../../../../../../src copy/sites/mapawynajmu-pl/app/functions/google-analytics/build-events';

const CATEGORY = 'Announcement Create';
const events = buildEvents({ actions, eventCategory: CATEGORY });

export default events;
