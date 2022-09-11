export const mapStateToProps = store => {
  const {
    app,
    links
  } = store

  const {
    announcementId,
    device,
    isMobile,
    lang,
    scripts
  } = app

  const { 
    loadMap,
    mapLoading,
    mapLoaded,
    loadMarker,
    markerLoaded,
    showFixedPhone,
    fetch
  } = store.announcement.show.control

  const { 
    latitude: latitude,
    longitude: longitude,
    id,
    category,
    rentCurrency,
    netRentAmount,
    netRentAmountPerSqm,
    grossRentAmount,
    grossRentAmountPerSqm,
    area,
    rooms,
    floor,
    totalFloors,
    availabilityDate,
    pictures,
    pictureIndex,
    features,
    furnishings,
    polishDescription,
    englishDescription,
    name,
    link,
    locality,
    sublocality,
    title,
    phone,
  } = store.announcement.show.data

  return {
    announcementId,
    lang,
    id,
    category,
    rentCurrency,
    netRentAmount,
    netRentAmountPerSqm,
    grossRentAmount,
    grossRentAmountPerSqm,
    area,
    rooms,
    floor,
    totalFloors,
    availabilityDate,
    pictures,
    pictureIndex,
    features,
    furnishings,
    polishDescription,
    englishDescription,
    venue: 'show',
    name,
    showFixedPhone,
    device,
    isMobile,
    lang,
    scripts,
    loadMap,
    mapLoaded,
    loadMarker,
    latitude,
    longitude,
    markerLoaded,
    mapLoading,
    fetch,
    links,
    locality,
    sublocality,
    title,
    link,
    phone,
  }
}
    
export const mapDispatchToProps = dispatch => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeControl: value => dispatch({ type: 'announcement/show/control', value }),
    changeData: value => dispatch({ type: 'announcement/show/data', value }),
    resetControl: value => dispatch({ type: 'announcement/show/control/reset', value }),
    resetData: value => dispatch({ type: 'announcement/show/data/reset', value }),
  }
}
    