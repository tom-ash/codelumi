import React from 'react'

const activeMonit = {
  pl: 'Aktywne do ',
  en: 'Active until '
}

export function activeProvider(announcement, index) {
  return (
    <div className='active'>
      {this.languageObjectHandler(activeMonit)}
      <span className='date'>
        {announcement.activeUntil}
      </span>

      {this.buttonProvider('Przedłuż', 'Extend', announcement, index, this.extend)}
    </div>
  )
}

