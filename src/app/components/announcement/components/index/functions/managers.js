import React from 'react'

const origin = `${CLIENT_URL}/`

export function addAnnouncementManager() {
  return {
    classNames: { container: 'add-announcement-link' },
    href: this.languageObjectHandler({ pl: `${origin}dodaj-ogloszenie`, en: `${origin}add-announcement` }),
    hrefLang: this.languageObjectHandler({ pl: 'pl', en: 'en' }),
    title: this.languageObjectHandler({ pl: 'Dodaj bezpłatne ogłoszenie', en: 'Add Free Announcement' }),
    label: <strong>{this.labelProvider('fas fa-plus', 'Dodaj bezpłatne ogłoszenie', 'Add Free Announcement')}</strong>,
    onClick: () => this.changePath({ showAnnouncementCreate: true })
  }
}