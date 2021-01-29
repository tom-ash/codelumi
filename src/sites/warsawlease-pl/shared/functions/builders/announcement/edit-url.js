import { PL, EN } from '../../../constants/langs/langs'

export function buildAnnouncementEditUrl(lang) {
  const { announcementCreateData: { id } } = this.props

  if (!id) return ''
  return `${{ [PL]: 'edytuj-ogloszenie', [EN]: 'edit-announcement'}[lang]}/${id}`
}
