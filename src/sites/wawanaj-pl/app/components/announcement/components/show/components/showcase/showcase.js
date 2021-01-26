import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import ScalableVectorGraphic from '../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'
import { sendAnalyticsEvent } from '../../../../../../functions/google-analytics/send-analytics-event'
import styles from './styles/styles.scss'

const AnnouncementShowShowcase = ({
  announcerName,
  announcerPhone,
  scalableVectorGraphics,
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
          <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.phone} />
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
