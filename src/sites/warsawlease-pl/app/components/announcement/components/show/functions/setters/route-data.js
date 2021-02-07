import { showClientServerParams } from '../../../../constants/client-server-params.js'

function announcementShowRouteDataSetter(routeData) {
    const { initialState: { announcement } } = routeData


    const clientParams = {}

    showClientServerParams.map(param => ( clientParams[param.client] = announcement[param.server] ))

    // changeData(clientParams)    

//     const {
//     changeControl,
//     changeData
//   } = this.props

//   fetch(`${apiUrl}/announcements/${id}`, {
//     headers: { 'Content-Type': 'application/json' }
//   })
//   .then(response => {
//     if (response.ok) return response.json()
//   })
//   .then(json => {
//     const clientParams = {}

//     showClientServerParams.map(param => ( clientParams[param.client] = json[param.server] ))
//     changeControl({ fetched: true })
//     changeData(clientParams)    
//   })
//   .catch(e => {
//     this.changeRoute(PAGE_NOT_FOUND_TRACK)
//   })

//   const { initialState: state } = routeData
//   const { changeAnnouncementIndexData: changeData, changeAnnouncementIndexControl: changeControl } = this.props
//   const { amount } = state
//   const announcements = state.announcements.map(announcement => {
//     announcement.pictureIndex = 0
//     announcement.showLoader = true
//     return announcement
//   })
//   if (announcements && announcements[0]) announcements[0].show = true

//   changeData({ amount, announcements })
//   changeControl({ connecting: false })
}

export default announcementShowRouteDataSetter
