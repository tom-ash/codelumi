import React from 'react'
// import { Line } from '../../../../../../support/components/line/line'

export function controlProvider(announcement, index) {
  if (!announcement) return null

  const { editPath, editTitle } = announcement

  return (
    <div className='control'>
      <div className='info'>
        <div>
          {{ pl: 'Data utworzenia', en: 'Crated at' }['pl']}{' '}
          <strong>{announcement.createdAt.slice(0, 10)}</strong>
        </div>
      </div>
      <div className='info'>
        <div>
          {{ pl: 'Liczba odwiedzin', en: 'Visitors' }['pl']} <strong>{announcement.views}</strong>
        </div>
      </div>
      <div className='info'>
        <div>
          {{ pl: 'Aktywne do ', en: 'Active until ' }['pl']}{' '}
          <strong>{announcement.activeUntil.slice(0, 10)}</strong>
        </div>
        {this.buttonProvider('Przedłuż', 'Extend', announcement, index, this.extend, ' extend')}
      </div>
      <div className='info'>
        {announcement.visible ? (
          <span>{{ pl: 'Widoczne', en: 'Visible' }['pl']}</span>
        ) : (
          <span>{{ pl: 'Ukryte', en: 'Hidden' }['pl']}</span>
        )}
        {announcement.visible
          ? this.buttonProvider('Ukryj', 'Hide', announcement, index, this.triggerVisible, ' hide-show')
          : this.buttonProvider('Pokaż', 'Show', announcement, index, this.triggerVisible, ' hide-show')}
      </div>
      <div className='edit-delete'>
        {this.buttonProvider('Edytuj', 'Edit', announcement, index, () => this.edit({ editPath, editTitle }), ' edit')}
        {this.buttonProvider(
          'Usuń',
          'Delete',
          announcement,
          index,
          () => {
            this.props.setControl({ beingDeleted: announcement.id })
          },
          ' delete'
        )}
      </div>
    </div>
  )
}
