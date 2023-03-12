import { ANNOUNCEMENT_CREATE_LABELS } from '../../../../../../../../../shared/constants/routes/labels'
import { signOut } from '../../../../../../../user/components/auth/components/sign-out/functions/sign-out'
import { buildUrl } from '../../../../../../../../../shared/functions/builders/url'
import { changeUrl } from '../../../../../../../../../../shared/app/functions/routes/changers/route-generic'

export function myAnnouncementsManager(props) {
  const { langs, links, langHandler } = props
  const classNames = { container: 'add-announcement' }
  const link = links['announcement/index/user']
  const href = link && buildUrl({ path: link.path })
  const hrefLang = langHandler(langs)
  const title = link && link.title
  const label = title
  const onClick = () => changeUrl({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

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
      root: {
        href
      }
    }
  } = props

  return {
    classNames: { container: 'header-link de-authorize' },
    label: langHandler({ pl: 'Wyloguj', en: 'Sign Out' }),
    onClick: () => signOut({
      href,
      changeUrl,
    }),
  }
}

export function addAnnouncementManager(props) {
  const { langs, links, langHandler } = props
  const link = links['announcement/create/form']
  const href = link && buildUrl({ path: link.path })
  const hrefLang = langHandler(langs)
  const title = link && link.title
  const classNames = { container: 'header-link add-announcement' }
  const label = langHandler(ANNOUNCEMENT_CREATE_LABELS)
  const onClick = () => changeUrl({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function signUpManager(props) {
  const { langs, links, langHandler } = props
  const classNames = { container: 'header-link sign-up' }
  const link = links['user/new/form']
  const href = link && buildUrl({ path: link.path })
  const hrefLang = langHandler(langs)
  const title = link && link.title
  const label = title
  const onClick = () => changeUrl({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function signInManager(props) {
  const { links, langs, langHandler } = props
  const classNames = { container: 'header-link sign-in' }
  const link = links['user/authorize']
  const href = link && buildUrl({ path: link.path })
  const hrefLang = langHandler(langs)
  const title = link && link.title
  const label = title
  const onClick = () => changeUrl({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}

export function myAccountManager(props) {
  const { changeShowMenu, langHandler } = props
  const classNames = { container: 'header-link my-account' }
  const label = langHandler({ pl: 'Moje konto', en: 'My Account' })
  const onClick = () => changeShowMenu(true)

  return { classNames, label, onClick }
}
