import * as actions from './actions'
import { buildEvents } from '../../../../../../../../functions/google-analytics/build-events'

const CATEGORY = 'Announcement Create'
const events = buildEvents({ actions, eventCategory: CATEGORY })

export default events
