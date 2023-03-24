import React from 'react'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'
import { sendAnalyticsEvent } from '../../../../../../../functions/google-analytics/send-analytics-event'
import styles from './styles/styles.scss'

const ListerPhone = ({ announcerPhone, togglePhone, announcementId, venue }) => {
  return (
    <div id='showcase'>
      <div className='lister-phone'>
        <div className='icon'>
          <SVG name='phone' />
        </div>
        <div className='text'>
          {` ${announcerPhone && announcerPhone.replace('+48 ', '')}`}
          {announcerPhone && announcerPhone.length < 9 && (
            <u
              onClick={e => {
                sendAnalyticsEvent({
                  eventCategory: 'Announcement Show',
                  eventAction: 'Phone Reveal Click',
                  eventLabel: announcementId,
                })
                togglePhone(e, venue)
              }}
            >
              {/* TODO: LANG! */}
              Pokaż
            </u>
          )}
        </div>
        <div className='float-clear' />
      </div>
    </div>
  )
}

export default withStyles(styles)(ListerPhone)
