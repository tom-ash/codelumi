import API_URL from '../../../../../../../../../../shared/constants/urls/api.js'
import { CREATE_API_ROUTE } from '../constants/api-routes.js'
import { USER_CREATE_VERIFICATION_TRACK } from '../../../../../../../../../../shared/constants/tracks/tracks.js'
import getHrefByTrackAndLang from '../../../../../../../../../functions/routes/getters/href-by-track-and-lang.js'

function createUser(userObject) {
  const { lang, changeControl } = this.props

  fetch(API_URL + CREATE_API_ROUTE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Lang': lang },
    body: JSON.stringify(userObject)
  })
  .then(response => {
    if (response.status == 201) {
      const { changeRoute } = this.context
      const track = USER_CREATE_VERIFICATION_TRACK
      const href = `${getHrefByTrackAndLang({ track, lang })}?e=${userObject.email}`
  
      changeRoute({ href })
      return changeControl({ connecting: false })
    }

    throw new Error('Something went wrong.')
  },
  networkError => console.dir(networkError.message))
  .catch(e => console.dir(e))
}

export default createUser
