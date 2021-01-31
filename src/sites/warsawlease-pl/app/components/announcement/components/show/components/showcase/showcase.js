import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import SVG from '../../../../../support/components/svg/svg'
import { sendAnalyticsEvent } from '../../../../../../functions/google-analytics/send-analytics-event'
import styles from './styles/styles.scss'

const AnnouncementShowShowcase = ({
  announcerName,
  announcerPhone,
  svgs,
  togglePhone,
  langObjHandler,
  announcementId,
  venue
}) => {
  return (
    <div id='showcase'>
      <div className='name'>
        {announcerName}
      </div>
      <div className='phone-showcase'>
        <div className='icon'>
          <SVG pathData={svgs && svgs.phone} />
        </div>
        <div className='text'>
          {` ${announcerPhone}`}
          {announcerPhone && announcerPhone.length < 9 &&
          <u
            onClick={(e) => {
              sendAnalyticsEvent({
                eventCategory: 'Announcement Show',
                eventAction: 'Phone Reveal Click',
                eventLabel: announcementId
              })
              togglePhone(e, venue)}
            }
          >
            {langObjHandler({ pl: 'Pokaż', en: 'Show' })}
          </u>}
        </div>
        <div className='float-clear' />
      </div>
  </div>
  )
}

export default withStyles(styles)(AnnouncementShowShowcase)
