import React from 'react'
import loadable from '@loadable/component'
import { ManagedCheckbox } from 'managed-inputs'
const Calendar = loadable(() => import('../../../../../support/components/calendar/calendar'), { ssr: false })
import * as managers from './functions/managers'
import langHandler from '../../../../../../functions/lang-handler'
import { parseDate } from '../../../../../../functions/date-parsers'
import { sendGaEvent } from '../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from './constants/analytics/events'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

const { AVAILABILITY_DATE_SELECTED_EVENT } = analyticEvents

class AnnouncementCreateAvailabilityDate extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.showAvailabilityDateManager = managers.showAvailabilityDateManager.bind(this)
  }
  
  render() {
    const { lang, availabilityDate, showAvilabilityDate, changeControl, changeInputs } = this.props

    return (
      <div id='announcement-create-availability-date' className='section'>
        <ManagedCheckbox {...this.showAvailabilityDateManager({ showAvilabilityDate, changeControl })}/>
        {showAvilabilityDate &&
          <div className='calendar'>
            <div>
              <Calendar 
                onChange = {date => {
                  changeInputs({ availabilityDate: parseDate(date) })
                  sendGaEvent(AVAILABILITY_DATE_SELECTED_EVENT)
                }}
                value={availabilityDate ? new Date(availabilityDate) : null}
                locale={lang == 'pl' ? 'pl' : 'en'}
              />
            </div>
          </div>
        }
      </div>
    )
  }
}

export default withStyles(styles)(AnnouncementCreateAvailabilityDate)
