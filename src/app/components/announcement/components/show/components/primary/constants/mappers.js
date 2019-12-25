export const mapStateToProps = (store) => {
  return {
    language: store.app.language,
    area: store.announcement.show.data.area,
    rentCurrency: store.announcement.show.data.rentCurrency,
    netRentAmount: store.announcement.show.data.netRentAmount,
    netRentAmountPerSqm: store.announcement.show.data.netRentAmountPerSqm,
    grossRentAmount: store.announcement.show.data.grossRentAmount,
    grossRentAmountPerSqm: store.announcement.show.data.grossRentAmountPerSqm,
    rooms: store.announcement.show.data.rooms,
    floor: store.announcement.show.data.floor,
    totalFloors: store.announcement.show.data.totalFloors,
    availabilityDate: store.announcement.show.data.availabilityDate
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {}
}
    