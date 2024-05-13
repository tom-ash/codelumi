interface SetUpPinCreatorProps {
  // TODO
}

function setUpPinCreator(props: SetUpPinCreatorProps) {
  const map = window.googleMap
  // @ts-ignore
  const pinCreator = (window.pinCreator = function (location, options, onClick) {
    // @ts-ignore
    this.latlng = new google.maps.LatLng(location.latitude, location.longitude)
    // @ts-ignore
    this.args = options
    // @ts-ignore
    this.setMap(map)
  })

  // @ts-ignore
  pinCreator.prototype = new google.maps.OverlayView()

  pinCreator.prototype.draw = function () {
    const self = this
    let div = this.div

    if (!div) {
      div = this.div = document.createElement('div')
      div.className = this.args.className || 'pin icon'
      div.style.position = 'absolute'
      div.innerHTML = this.args.htmlContent
      if (typeof self.args.pinId !== 'undefined') {
        div.id = `google-map-pin-${self.args.pinId}`
        div.setAttribute('data-id', self.args.pinId)
      }
      const panes = this.getPanes()
      panes.overlayImage.appendChild(div)
      div.addEventListener('click', self.args.onClick)
    }

    const point = this.getProjection().fromLatLngToDivPixel(this.latlng)

    if (point) {
      div.style.left = point.x + 'px'
      div.style.top = point.y + 'px'
    }
  }

  pinCreator.prototype.remove = function () {
    if (this.div) {
      this.div.parentNode.removeChild(this.div)
      this.div = null
    }
  }
}

export default setUpPinCreator
