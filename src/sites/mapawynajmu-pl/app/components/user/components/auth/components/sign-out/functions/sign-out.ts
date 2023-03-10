import { deleteCookie } from '../../../../../../../functions/cookie-handlers'

interface SignOut {
  (args: {
    href: string
    changeRoute: ChangeRoute
  }): void
}

export const signOut: SignOut = (args) => {
  const {
    href,
    changeRoute,
  } = args

  if (typeof window !== 'undefined') {
    // TODO: Investigate better solution.
    // @ts-ignore
    window.areListingsObsolete = true
  }

  deleteCookie('access_token')

  changeRoute({ href })
}
