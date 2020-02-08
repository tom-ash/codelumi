import React from 'react'

export default function Picture(props) {
  const {
    announcementId, getPicture, changePicture, changeRoute, phoneSwitchProvider, venue,
  } = props

  return (
    <div
      style={{ backgroundImage: getPicture() }}
      className={`picture ${venue}`}
    >
      <a 
        className='link'
        href={`${CLIENT_URL}/${announcementId}`}
        onClick={e => {
          e.preventDefault()
          changeRoute({ showAnnouncementShow: true, announcementId })
        }}
      >

      </a>
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


    </div>
  )
}
