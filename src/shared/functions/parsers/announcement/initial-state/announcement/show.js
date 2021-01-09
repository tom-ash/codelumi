import { showClientServerParams } from '../../../../../../app/components/announcement/constants/client-server-params'
import { data } from '../../../../../../app/components/announcement/components/show/constants/state'

export function announcementShowInitialStateParser({ announcement }) {
  const showData = {}
  
  showClientServerParams.map(param => {
    showData[param.client] = announcement[param.server]
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
