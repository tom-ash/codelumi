import { PL, EN } from '../../../constants/langs/langs'

function buildAnnouncementEditUrl({ announcementCreateData: { id }, lang }) {
  if (!id) return null
  
  return `${{ [PL]: 'edytuj-ogloszenie', [EN]: 'edit-announcement'}[lang]}/${id}`
}

export default buildAnnouncementEditUrl
