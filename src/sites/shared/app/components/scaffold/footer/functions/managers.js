import { changeUrl } from "../../../../functions/routes/changers/change-url"

const link_tracks = [
  { name: 'contactManager', track: 'visitor/contact' },
  { name: 'termsOfServiceManager', track: 'visitor/terms-of-service' },
  { name: 'cookiesPolicyManager', track: 'visitor/cookies-policy' },
  { name: 'privacySettingsManager', track: 'visitor/privacy-settings' },
  { name: 'privacyPolicyManager', track: 'visitor/privacy-policy' },
  { name: 'addPageManager', track: 'page/create' },
]

const managers = {}

link_tracks.map(({ name, track }) => {
  managers[name] = props => {
    const { links, langs, langHandler, buildUrl } = props
    const link = links[track]
    const href = link && buildUrl({ path: link.path })
    const hrefLang = langHandler(langs)
    const title = link && link.title
    const label = title
    const classNames = { container: 'link' }
    const onClick = () => changeUrl({ href })

    return { classNames, href, hrefLang, title, label, onClick }
  }
})

export default managers
