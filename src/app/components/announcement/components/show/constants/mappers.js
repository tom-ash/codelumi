export const mapStateToProps = (store) => {
  const {
    announcementId,
    scalableVectorGraphics,
    device,
    isMobile,
    language,
    scripts
  } = store.app

  const { 
    loadMap,
    mapLoading,
    mapLoaded,
    loadMarker,
    markerLoaded,
    showFixedPhone
  } = store.announcement.show.control

  const { 
    mapLatitude: latitude,
    mapLongitude: longitude,
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
    descriptionPolish,
    descriptionEnglish,
    name
  } = store.announcement.show.data

  return {
    announcementId,
    language,
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
    descriptionPolish,
    descriptionEnglish,
    venue: 'show',
    name,
    showFixedPhone,
    scalableVectorGraphics,
    device,
    isMobile,
    language,
    scripts,
    loadMap,
    mapLoaded,
    loadMarker,
    latitude,
    longitude,
    markerLoaded,
    mapLoading
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value: value}),
    changeControl: value => dispatch({ type: 'announcement/show/control', value }),
    resetControl: value => dispatch({ type: 'announcement/show/control/reset', value }),
    changeData: value => dispatch({ type: 'announcement/show/data', value }),
    resetData: value => dispatch({ type: 'announcement/show/data/reset', value }),
  }
}
    