export const mapStateToProps = (store) => {
  const {
    announcementId,
    // language
  } = store.app

  return {
    announcementId,
    language: store.app.language,
    phone: store.announcement.show.data.phone,
    id: store.announcement.show.data.id,
    category: store.announcement.show.data.category,
    district: store.announcement.show.data.district,
    rentCurrency: store.announcement.show.data.rentCurrency,
    additionalFees: store.announcement.show.data.additionalFees,
    netRentAmount: store.announcement.show.data.netRentAmount,
    area: store.announcement.show.data.area,
    rooms: store.announcement.show.data.rooms,
    floor: store.announcement.show.data.floor,
    totalFloors: store.announcement.show.data.totalFloors,
    availabilityDate: store.announcement.show.data.availabilityDate,
    pictures: store.announcement.show.data.pictures,
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
    changeData: (value) => dispatch({ type: 'announcement/show/data', value: value }),
    changeControl: (value) => dispatch({ type: 'announcement/show/control', value: value })
  }
}
    