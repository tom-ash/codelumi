import React from 'react'

export default function Picture(props) {
  const {
    announcementId,
    getPicture,
    changePicture,
    changeRoute,
    phoneSwitchProvider,
    parseAvailabilityDate,
    venue,
    availabilityDate
  } = props

  return (
    <div
      style={{ backgroundImage: getPicture() }}
      onClick={() => changeRoute({ showAnnouncementShow: true, announcementId })}
      className={`picture ${venue}`}
    >
      {phoneSwitchProvider()}
      <div
        className='arrow left'
        onClick={(e) => changePicture(e, 'previous')}
      >
        <div className='cover'>
          <i className='fas fa-chevron-left' />
        </div>
      </div>
      <div
        className='arrow right'
        onClick={(e) => changePicture(e, 'next')}
      >
        <div className='cover'>
          <i className='fas fa-chevron-right' />
        </div>
      </div>
      <div className='calendar'>
        <i className='fas fa-calendar-alt'/>
        {parseAvailabilityDate(availabilityDate)}
      </div>
    </div>
  )
}