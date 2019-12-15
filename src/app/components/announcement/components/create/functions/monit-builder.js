import React from 'react'

export function monitBuilder() {
  if (this.props.authorized) return
  return (
    <div className='monit'>
      {this.languageObjectHandler({
        pl: (
          <span>
            Dodanie ogłoszenia wymaga rejestracji konta. Mozesz to zrobić <span className='link' onClick={this.redirectToUserCreate}>teraz</span> lub podczas publikacji ogłoszenia.
          </span>
        ),
        en: (
          <span>
            Adding an announcement requires account registration. You can do it <span className='link' onClick={this.redirectToUserCreate}>now</span> or during announcement publishing.
          </span>
        )
      })}
  </div>
  )
}