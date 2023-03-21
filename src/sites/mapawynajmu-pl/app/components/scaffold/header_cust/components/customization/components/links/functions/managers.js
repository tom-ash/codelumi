import { signOut } from '../../../../../../../user/components/auth/components/sign-out/functions/sign-out'
import { buildUrl } from '../../../../../../../../../shared/functions/builders/url'
import { changeUrl } from '../../../../../../../../../../shared/app/functions/routes/changers/change-url'

export function accountManager(props) {
  const { langs, links, langHandler } = props
  const classNames = { container: 'add-announcement' }
  const link = links['user/edit']
  const href = link && buildUrl({ path: link.path })
  const hrefLang = langHandler(langs)
  const title = link && link.title
  const label = title
  const onClick = () => changeUrl({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function deAuthorizeManager(props) {
  const { langHandler } = props

  const {
    links: {
      root: { href },
    },
  } = props

  return {
    classNames: { container: 'header-link de-authorize' },
    label: langHandler({ pl: 'Wyloguj', en: 'Sign Out' }),
    onClick: () =>
      signOut({
        href,
        changeUrl,
      }),
  }
}

export function myAccountManager(props) {
  const { changeShowMenu, langHandler } = props
  const classNames = { container: 'header-link my-account' }
  const label = langHandler({ pl: 'Moje konto', en: 'My Account' })
  const onClick = () => changeShowMenu(true)

  return { classNames, label, onClick }
}
