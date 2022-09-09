import { categories } from '../../../../../constants/categories'
import { viewAnnouncement } from '../../../../../functions/view-announcement'
import { sendAnalyticsEvent } from '../../../../../../../functions/google-analytics/send-analytics-event'

export function drawPins() {
  setUpPinCreator()
  removeOldPins.call(this)
  addNewPins.call(this)
}

function setUpPinCreator() {
  if (typeof window === 'undefined') return

  const map = window.googleMap
  const pinCreator = window.pinCreator = function(location, options, onClick) {
    this.latlng = new google.maps.LatLng(location.latitude, location.longitude)
    this.args = options
    this.setMap(map)	
  }
  pinCreator.prototype = new google.maps.OverlayView()
  pinCreator.prototype.draw = function() {
    const self = this
    let div = this.div
    if (!div) {
      div = this.div = document.createElement('div')
      div.className = this.args.className || 'pin'
      div.style.position = 'absolute'
      div.innerHTML = this.args.htmlContent
      if (typeof(self.args.pinId) !== 'undefined') {
        div.id = `googl-map-pin-${self.args.pinId}`
      }
      const panes = this.getPanes()
      panes.overlayImage.appendChild(div)
      div.addEventListener('click', self.args.onClick)
    }
    const point = this.getProjection().fromLatLngToDivPixel(this.latlng)
    if (point) {
      div.style.left = (point.x) + 'px'
      div.style.top = (point.y) + 'px'
    }
  }
  pinCreator.prototype.remove = function() {
    if (this.div) {
      this.div.parentNode.removeChild(this.div)
      this.div = null
    }	
  }
  pinCreator.prototype.getPosition = function() {
    return this.latlng	
  }
}

export function removeOldPins() {
  const { pins } = this.props

  if (!pins) return

  pins.length && pins.map(pin => pin.setMap(null))
}

function addNewPins() {
  if (typeof window === 'undefined') return
  
  const {
    changeData,
    announcements,
    svgs
  } = this.props

  let pins = []
  announcements.map(announcement => {
    const {
      category: categoryNumber,
      url,
      title
    } = announcement
    const category = categories.find(category => category.number === categoryNumber)
    const pin = category.pin
    const svg = svgs[pin.svg]

    const htmlContent = (
      `<a href="${url}" title="${title}">
        <div class='icon ${pin.class}'>
          <SVG
            xmlns="http://www.w3.org/2000/svg"
            viewBox="${svg && svg.viewBox}"
          >
            <path
              style="fill:#4D5656;"
              d="${svg && svg.pathData}"
            />
          </svg>
        </div>
      </a>`
    )

    pins.push(new window.pinCreator(
      {
        latitude: announcement.latitude, 
        longitude: announcement.longitude
      },
      {
        pinId: `${announcement.id}`,
        htmlContent,
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

          const focusedPin = document.getElementsByClassName('pin focused')[0]
          if (focusedPin) {
            focusedPin.classList.remove('focused')
          }

          const pin = document.getElementById(`googl-map-pin-${id}`)
          if (pin) pin.classList.add('focused')

          viewAnnouncement(id)
          changeData({ tileId: id })
        }
      }
    )
  )})
  changeData({ pins })
}
