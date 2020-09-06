export const mapStateToProps = (store) => {
  const {
    announcementId
  } = store.app

  return {
    announcementId,
    language: store.app.language,
    phone: store.announcement.show.data.phone,
    id: store.announcement.show.data.id,
    category: store.announcement.show.data.category,
    district: store.announcement.show.data.district,
    rentCurrency: store.announcement.show.data.rentCurrency,
    netRentAmount: store.announcement.show.data.netRentAmount,
    netRentAmountPerSqm: store.announcement.show.data.netRentAmountPerSqm,
    grossRentAmount: store.announcement.show.data.grossRentAmount,
    grossRentAmountPerSqm: store.announcement.show.data.grossRentAmountPerSqm,
    area: store.announcement.show.data.area,
    rooms: store.announcement.show.data.rooms,
    floor: store.announcement.show.data.floor,
    totalFloors: store.announcement.show.data.totalFloors,
    availabilityDate: store.announcement.show.data.availabilityDate,
    pictures: store.announcement.show.data.pictures,
    pictureIndex: store.announcement.show.data.pictureIndex,
    features: store.announcement.show.data.features,
    furnishings: store.announcement.show.data.furnishings,
    descriptionPolish: store.announcement.show.data.descriptionPolish,
    descriptionEnglish: store.announcement.show.data.descriptionEnglish,
    mapLatitude: store.announcement.show.data.mapLatitude,
    mapLongitude: store.announcement.show.data.mapLongitude,
    venue: 'show',
    name: store.announcement.show.data.name,
    isMobile: store.app.isMobile,
    showFixedPhone: store.announcement.show.control.showFixedPhone
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: (value) => dispatch({ type: 'app', value: value}),
    changeData: (value) => dispatch({ type: 'announcement/show/data', value }),
    changeControl: (value) => dispatch({ type: 'announcement/show/control', value })
  }
}
    