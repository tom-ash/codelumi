import React from 'react'
// import { Line } from '../../../../../../support/components/line/line'

export function controlProvider(announcement, index) {
  if (!announcement) return null

  const { editPath, editTitle } = announcement

  return (
    <div className='control'>
      <div className='info'>
        <div>
          {this.langHandler({ pl: 'Data utworzenia', en: 'Crated at' })}{' '}
          <strong>{announcement.createdAt.slice(0, 10)}</strong>
        </div>
      </div>
      <div className='info'>
        <div>
          {this.langHandler({ pl: 'Liczba odwiedzin', en: 'Visitors' })} <strong>{announcement.views}</strong>
        </div>
      </div>
      <div className='info'>
        <div>
          {this.langHandler({ pl: 'Aktywne do ', en: 'Active until ' })}{' '}
          <strong>{announcement.activeUntil.slice(0, 10)}</strong>
        </div>
        {this.buttonProvider('Przedłuż', 'Extend', announcement, index, this.extend, ' extend')}
      </div>
      <div className='info'>
        {announcement.visible ? (
          <span>{this.langHandler({ pl: 'Widoczne', en: 'Visible' })}</span>
        ) : (
          <span>{this.langHandler({ pl: 'Ukryte', en: 'Hidden' })}</span>
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
            this.props.changeControl({ beingDeleted: announcement.id })
          },
          ' delete'
        )}
      </div>
    </div>
  )
}
