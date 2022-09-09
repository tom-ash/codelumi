import React from 'react'
import AnnouncementShowPictures from '../../../../../common/tile/components/pictures/pictures.js'
import { parseCategory } from '../../../../../../../../../shared/functions/parsers/parse-category'
import { AreaPresenter } from '../../../../../show/functions/area-presenter'
import { RentPresenter } from '../../../../../show/functions/rent-presenter'
import { viewAnnouncement } from '../../../../../../functions/view-announcement'
import scrollToElement from '../../../../../../../../../../shared/app/functions/screen/scrollers/to-element.js'
import { sendAnalyticsEvent } from '../../../../../../../../functions/google-analytics/send-analytics-event'
import localitiesPresenter from '../../../../../../functions/localities-presenter.js'

const AnnouncementShowMiniTile = (props) => {
  const {
    id,
    lat,
    lng,
    pictures,
    category,
    area,
    grossRentAmount,
    rentCurrency: currency,
    lang,
    langHandler,
    changeData,
    isMobile,
    miniListFarthestScrollTop,
    index,
    miniListFarthestScrollLeft,
    path,
    title,
    locality,
    sublocality,
    name,
    link,
    currentTileId
  } = props

  const DESKTOP_TILE_HEIGHT = 227
  const MOBILE_TILE_WIDTH = 240
  const localities = localitiesPresenter({ locality, sublocality })
  let pinUnfocusTimeout = null
  
  if (
    !isMobile && miniListFarthestScrollTop + 4 * DESKTOP_TILE_HEIGHT < index * DESKTOP_TILE_HEIGHT ||
    isMobile && miniListFarthestScrollLeft + 3 * MOBILE_TILE_WIDTH < index * MOBILE_TILE_WIDTH
  ) {
    return (
      <a
        className='announcement-list-tile'
        href={path}
        title={title}
      />
    )
  }

  return (
    <a
      className='announcement-list-tile'
      key={id}
      href={path}
      title={title}
      onMouseOver={() => {
        const pin = document.getElementById(`googl-map-pin-${id}`)

        if (pin) pin.classList.add('focused')
      }}
      onMouseLeave={() => {
        if (currentTileId) return

        // TODO: Underpin on state instead!
        pinUnfocusTimeout = setTimeout(() => {
          const pin = document.getElementById(`googl-map-pin-${id}`)
          if (pin) pin.classList.remove('focused')
        }, 0)
      }}
      onClick={e => {
        e.preventDefault()
        const map = window.googleMap

        if (pinUnfocusTimeout) {
          clearTimeout(pinUnfocusTimeout)
        }

        sendAnalyticsEvent({
          eventCategory: 'Announcement MiniList',
          eventAction: 'Tile Click',
          eventLabel: id
        })

        const options = {
          center: {
            lat,
            lng
          },
          zoom: 12.4
        }

        map.setOptions(options)
        viewAnnouncement(id)

        if (!isMobile) return changeData({ tileId: id })

        scrollToElement(document.getElementById('google-map'), 5, -64)
      }}
    >
      <AnnouncementShowPictures
        lang={lang}
        venue={'mini-list'}
        key={id}
        id={id}
        pictures={pictures}
        category={category}
        area={area}
        title={title}
        disableSLides
      />
      <div className='category-and-location'>
        {name && link && (
          <a
            className='name'
            href={link}
            onClick={e => e.stopPropagation()}
            target='_blank'
            title={name}
          >
            {name}
          </a>
        )}
        <div className='category'>
          {parseCategory({ categoryNumber: category, lang })}
        </div>
        <div className='location'>
          {localities && `${localities}`}
        </div>
      </div>
      {(area || grossRentAmount) && <div className='data'>
        {area && <AreaPresenter
          area={area}
          langHandler={langHandler}
        />}
        {grossRentAmount && <RentPresenter
          amount={grossRentAmount}
          currency={currency}
          langHandler={langHandler}
        />}
      </div>}
      <div className='float-clear' />
    </a>
  )
}

export default AnnouncementShowMiniTile
