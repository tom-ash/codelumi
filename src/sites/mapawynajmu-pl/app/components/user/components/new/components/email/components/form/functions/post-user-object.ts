import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import setVerificationToken from '../../../../../../../../../../../shared/app/functions/cookies/setters/confirmation-token'
import { buildUrl } from '../../../../../../../../../../shared/functions/builders/url'
import { UserObject } from '../form.types'
import { changeUrl } from '../../../../../../../../../../../shared/app/functions/routes/changers/change-url'

interface PostUserObject {
  (args: {
    userObject: UserObject
    lang: Lang
  }): void
}

export const postUserObject: PostUserObject = (args) => {
  const { userObject, lang } = args

  fetch(API_URL + '/user/create/email-and-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Lang: lang },
    body: JSON.stringify(userObject),
  })
  .then(
    response => {
      if (response.status == 201) return response.json()

      throw new Error('Something went wrong.')
    },
    networkError => console.dir(networkError.message)
  )
  .then(jsonResponse => {
    const { verificationToken, path } = jsonResponse

    setVerificationToken(verificationToken)
    changeUrl({ href: buildUrl({ path }) })
  })
  .catch(e => console.dir(e))
}
