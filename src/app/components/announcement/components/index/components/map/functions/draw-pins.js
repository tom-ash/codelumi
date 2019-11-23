import { categories } from '../../../../../constants/categories'

export function drawPins() {
  setUpPinCreator()
  removeOldPins.call(this)
  addNewPins.call(this)
}

function setUpPinCreator() {
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
  if (!this.props.pins) return
  this.props.pins.map(pin => pin.setMap(null))
}

function addNewPins() {
  let pins = []
  this.props.announcements.map(announcement => {
    pins.push(new window.pinCreator(
      { latitude: announcement.latitude / 1000000, longitude: announcement.longitude / 1000000, },
      {
        pinId: `${announcement.id}`, htmlContent: categories[announcement.category].stringIcon,
        className: `pin ${categories[announcement.category].pinClassName}`,
        onClick: () => {
          if (this.props.tile.id === announcement.id) return
          this.props.changeData({ tile: { id: announcement.id }})
        }
      }
    )
  )})
  this.props.changeData({ pins: pins })
}

