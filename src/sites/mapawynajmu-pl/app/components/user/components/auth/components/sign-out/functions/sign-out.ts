import { deleteCookie } from '../../../../../../../functions/cookie-handlers'
import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/change-url'

interface SignOut {
  (args: { href: string }): void
}

export const signOut: SignOut = args => {
  const { href } = args

  if (typeof window !== 'undefined') {
    // TODO: Investigate better solution.
    // @ts-ignore
    window.areListingsObsolete = true
  }

  deleteCookie('access_token')

  changeUrl({ href })
}
