import { PL, EN } from '../../../constants/langs/langs'

function buildAnnouncementEditUrl({ announcementCreateData: { announcement }, lang }) {
  if (!announcement) return null

  const { id } = announcement

  return `${{ [PL]: 'edytuj-ogloszenie', [EN]: 'edit-announcement'}[lang]}/${id}`
}

export default buildAnnouncementEditUrl
