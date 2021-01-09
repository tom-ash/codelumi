import { data } from '../../../../app/components/announcement/components/index/constants/state'
import { data } from '../../../../app/components/announcement/components/show/constants/mappers'
import { showClientServerParams } from '../../../../app/components/announcement/constants/client-server-params'

export function announcementShowInitialStateParser(routeData) {
  const showData = {}
  
  showClientServerParams.map(param => {
    showData[param.client] = routeData[param.server]
  })

  return {
    announcement: {
      show: {
        data: {
          ...data,
          ...showData
        }
      }
    },
  }
}
