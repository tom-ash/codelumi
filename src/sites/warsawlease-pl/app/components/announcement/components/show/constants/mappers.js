export const mapStateToProps = (store) => {
  const {
    announcementId,
    svgs,
    device,
    isMobile,
    lang,
    scripts
  } = store.app

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
    phone,
    id,
    category,
    district,
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
    name
  } = store.announcement.show.data

  return {
    announcementId,
    lang,
    phone,
    id,
    category,
    district,
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
    svgs,
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
    fetch
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value }),
    changeRender: value => dispatch({ type: 'render', value }),
    changeControl: value => dispatch({ type: 'announcement/show/control', value }),
    changeData: value => dispatch({ type: 'announcement/show/data', value }),
    resetControl: value => dispatch({ type: 'announcement/show/control/reset', value }),
    resetData: value => dispatch({ type: 'announcement/show/data/reset', value }),
  }
}
    