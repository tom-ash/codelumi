export function addMarker(map, latitude, longitude) {
  return new google.maps.Marker({ position: { lat: latitude, lng: longitude }, map: map })
}

