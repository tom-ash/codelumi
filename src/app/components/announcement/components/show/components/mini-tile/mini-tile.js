import React from 'react'
import AnnouncementShowPictures from '../../../show/components/tile/components/pictures/pictures'
import { parseCategory } from '../../../../../../../shared/functions/parsers/parse-category'
import { parseDistrict } from '../../../../../../../shared/functions/parsers/parse-district'
import { AreaPresenter } from '../../../show/functions/area-presenter'
import { RentPresenter } from '../../../show/functions/rent-presenter'
import { viewAnnouncement } from '../../../../functions/view-announcement'
import { buildLink } from '../../../../functions/build-link'
import { scrollToElement } from '../../../../../../functions/scrollers/scroll-to-element'
import { sendAnalyticsEvent } from '../../../../../../functions/google-analytics/send-analytics-event'

const AnnouncementShowMiniTile = ({
  id,
  lat,
  lng,
  pictures,
  category,
  district,
  area,
  grossRentAmount,
  rentCurrency: currency,
  language,
  languageObjectHandler,
  changeData,
  isMobile,
  miniListFarthestScrollTop,
  index,
  miniListFarthestScrollLeft
}) => {

  const DESKTOP_TILE_HEIGHT = 227
  const MOBILE_TILE_WIDTH = 240

  if (
    !isMobile && miniListFarthestScrollTop + 4 * DESKTOP_TILE_HEIGHT < index * DESKTOP_TILE_HEIGHT ||
    isMobile && miniListFarthestScrollLeft + 3 * MOBILE_TILE_WIDTH < index * MOBILE_TILE_WIDTH
  ) {
    return (
      <a
        className='announcement-show-container'
        href={buildLink({
          id,
          category,
          district,
          language
        })}
      />
    )
  }

  return (
    <a
      className='announcement-show-container'
      key={id}
      href={buildLink({
        id,
        category,
        district,
        language
      })}
      onMouseOver={() => {
        const pin = document.getElementById(`googl-map-pin-${id}`)

        if (pin) pin.classList.add('focused')
      }}
      onMouseLeave={() => {
        const pin = document.getElementById(`googl-map-pin-${id}`)
        if (pin) pin.classList.remove('focused')
      }}
      onClick={e => {
        e.preventDefault()
        const map = window.googleMap
        const alteredLng = lng + (isMobile ? 0 : .037)

        sendAnalyticsEvent({
          eventCategory: 'Announcement MiniList',
          eventAction: 'Tile Click',
          eventLabel: id
        })

        const options = {
          center: {
            lat,
            lng: alteredLng
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
        language={language}
        venue={'mini-list'}
        key={id}
        id={id}
        pictures={pictures}
        category={category}
        district={district}
        area={area}
        disableSLides
      />
      <div className='category-and-location'>
        {parseCategory(category)[language]}, {parseDistrict(district)}
      </div>
      <div className='data'>
        <AreaPresenter
          area={area}
          languageObjectHandler={languageObjectHandler}
        />
        <RentPresenter
          amount={grossRentAmount}
          currency={currency}
          languageObjectHandler={languageObjectHandler}
        />
      </div>
      <div className='float-clear' />
    </a>
  )
}

export default AnnouncementShowMiniTile
