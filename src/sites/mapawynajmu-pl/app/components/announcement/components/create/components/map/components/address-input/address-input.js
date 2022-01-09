import React from "react"

const AddressInput = props => {
  const { autocompleteInput, autocompletes, showAutocompletes, setState, langHandler, changeInputs, changeErrors } = props

  return (
    <>
      {showAutocompletes &&
      <div
        className='autocomplete-input-cover'
        onClick={() => setState({ showAutocompletes: false })}
      />}
      <input
        className='autocomplete-input'
        onFocus={() => setState({ showAutocompletes: true })}
        value={autocompleteInput}
        placeholder={langHandler({ pl: 'Ulica i numer, miasto', en: 'Street and number, city' })}
        onKeyDown={e => {
          const key = e.key
          if (key === 'Enter') {
            if (autocompletes.length < 1) return

            const autocomplete = autocompletes[0]
            const placeId = autocomplete.place_id

            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ placeId }).then(result => {
              if (window.marker) window.marker.setMap(null)
              const map = window.googleMap
              const position = result.results[0].geometry.location

              window.marker = new google.maps.Marker({ position , map })

              const options = { center: position, zoom: 17 }
              map.setOptions(options)

              changeInputs({ latitude: position.lat(), longitude: position.lng() } )
              changeErrors({ map: { pl: '', en: '' }})
            })

            setState({ showAutocompletes: false, autocompleteInput: autocomplete.description })

            e.target.blur()
          } else if (key === 'Tab') {
            setState({ showAutocompletes: false })
          }
        }}
        onChange={e => {
          const input = e.target.value
          setState({ autocompleteInput: input })

          if (!input) return setState({ autocompletes: [] })

          const sessionToken = window.sessionToken
          const autocompleteService = new google.maps.places.AutocompleteService()

          autocompleteService.getPlacePredictions({ input, componentRestrictions: { country: 'pl' }, sessionToken },
          autocompletes => {
            if (!autocompletes) return setState({ autocompletes: [] })

            setState({ autocompletes })
          })
        }}
      />
    </>
  )
}

export default AddressInput
