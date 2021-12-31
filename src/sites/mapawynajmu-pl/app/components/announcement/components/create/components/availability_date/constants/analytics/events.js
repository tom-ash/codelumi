import * as actions from './actions'
import { buildEvents } from '../../../../../../../../functions/google-analytics/build-events.js'

const eventCategory = 'Announcement Create'
const events = buildEvents({ actions, eventCategory })

export default events
