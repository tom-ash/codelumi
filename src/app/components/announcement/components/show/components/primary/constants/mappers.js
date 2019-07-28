export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    rentCurrency: store.announcement.show.data.rentCurrency,
    rentAmount: store.announcement.show.data.rentAmount,
    additionalFees: store.announcement.show.data.additionalFees,
    area: store.announcement.show.data.area,
    rooms: store.announcement.show.data.rooms,
    floor: store.announcement.show.data.floor,
    totalFloors: store.announcement.show.data.totalFloors,
    availabilityDate: store.announcement.show.data.availabilityDate
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {}
}
    