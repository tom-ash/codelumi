import { PL, EN } from '../../../constants/langs/langs'

function buildAnnouncementEditUrl(urlComposites) {
  if (!urlComposites) return null

  const { announcementEditData, lang } = urlComposites
  if (!announcementEditData) return null

  const { announcement } = announcementEditData
  if (!announcement) return

  const { id } = announcement

  return `${{ [PL]: 'edytuj-ogloszenie', [EN]: 'edit-announcement'}[lang]}/${id}`
}

export default buildAnnouncementEditUrl
