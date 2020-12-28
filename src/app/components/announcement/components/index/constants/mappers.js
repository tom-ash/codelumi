export const mapStateToProps = (store) => {
  const {
    language,
    path,
    device,
    scalableVectorGraphics
  } = store.app

  const {
    fetch,
    type
  } = store.announcement.index.control

  const {
    welcome: welcomePostData
  } = store.post.index.data

  const {
    name: welcomePostCreateName,
    body: welcomePostCreateBody
  } = store.post.create.inputs

  const {
    admin
  } = store.user.authorize.data

  const {
    category,
    district,
    areaMin,
    areaMax,
    rent,
    rentCurrency,
    rentMin,
    rentMax,
    roomsMin,
    roomsMax,
    totalFloorsMin,
    totalFloorsMax,
    floorMin,
    floorMax,
    availabilityDate,
    offset,
    switches,
    sort,
    page
  } = store.announcement.index.inputs

  const {
    announcements,
    amount
  } = store.announcement.index.data

  return {
    language,
    path,
    device,
    fetch,
    type,
    category,
    district,
    areaMin,
    areaMax,
    rent,
    rentCurrency,
    rentMin,
    rentMax,
    roomsMin,
    roomsMax,
    totalFloorsMin,
    totalFloorsMax,
    floorMin,
    floorMax,
    availabilityDate,
    switches,
    sort,
    page,
    offset,
    announcements,
    amount,
    welcomePostData,
    welcomePostCreateName,
    welcomePostCreateBody,
    scalableVectorGraphics,
    admin
  }
}
    
export const mapDispatchToProps = (dispatch) => {
  return {
    changeApp: value => dispatch({ type: 'app', value: value}),
    changeControl: value => dispatch({ type: 'announcement/index/control', value }),
    changeInputs: value => dispatch({ type: 'announcement/index/inputs', value }),
    changeData: value => dispatch({ type: 'announcement/index/data', value }),
    changeAnnouncements: value => dispatch({ type: 'announcement/index/data/announcements', value }),
    resetControl: value => dispatch({ type: 'announcement/index/control/reset', value }),
    resetInputs: value => dispatch({ type: 'announcement/index/inputs/reset', value }),
    resetData: value => dispatch({ type: 'announcement/index/data/reset', value }),
    changePostIndexData: value => dispatch({ type: 'post/index/data', value }),
    changePostCreateInputs: value => dispatch({ type: 'post/create/inputs', value })
  }
}
    