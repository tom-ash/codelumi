import { categories } from '../../../constants/categories'
import { viewAnnouncement } from '../../view-announcement'
import { sendAnalyticsEvent } from '../../../../../functions/google-analytics/send-analytics-event'

export function drawPins(currentListingId) {
  // setUpPinCreator()
  removeOldPins.call(this)
  addNewPins.call(this, currentListingId)
}

export function removeOldPins() {
  const { pins } = this.props

  if (!pins) return

  pins.length && pins.map(pin => pin.setMap(null))
}

function addNewPins(currentListingId) {
  if (typeof window === 'undefined') return
  
  const {
    changeData,
    announcements,
    svgs,
    changeControl,
  } = this.props

  let pins = []
  announcements.map(announcement => {
    const { changeRoute } = this.context
    const {
      category: categoryNumber,
      path,
      title,
      latitude,
      longitude,
    } = announcement
    const category = categories.find(category => category.number === categoryNumber)
    const pin = category.pin
    const svg = svgs[pin.svg]

    const classNames = ['pin', 'icon']
    if (+currentListingId === +announcement.id) classNames.push('current')

    const htmlContent = (
      `<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="${svg && svg.viewBox}"
        >
          <path
            style="fill:#4D5656;"
            d="${svg && svg.pathData}"
          />
        </svg>`
    )

    pins.push(new window.pinCreator(
      {
        latitude: announcement.latitude, 
        longitude: announcement.longitude
      },
      {
        pinId: `${announcement.id}`,
        htmlContent,
        className: classNames.join(' '),
        onClick: e => {
          e.preventDefault()
          const { id } = announcement
          const { tileId } = this.props

          if (tileId === id) return

          sendAnalyticsEvent({
            eventCategory: 'Announcement Map',
            eventAction: 'Pin Click',
            eventLabel: id
          })

          changeControl({
            mapOptions: {
              center: {
                lat: latitude,
                lng: longitude
              },
              zoom: 12.4
            }
          })

          changeData({ tile: null, tileId: null })
          changeRoute({ href: path, withoutScroll: true })
        }
      }
    )
  )})
  changeData({ pins })
}
