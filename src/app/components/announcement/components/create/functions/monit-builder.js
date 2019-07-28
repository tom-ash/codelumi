import React from 'react'

export function monitBuilder() {
  if (this.props.authorized) return
  return (
    <div className='monit'>
      {this.languageObjectHandler({
        polish: (
          <span>
            Dodanie ogłoszenia wymaga rejestracji konta. Mozesz to zrobić <u onClick={this.redirectToUserCreate}>teraz</u> lub podczas publikacji ogłoszenia.
          </span>
        ),
        english: (
          <span>
            Adding an announcement requires account registration. You can do it <u onClick={this.redirectToUserCreate}>now</u> or during announcement publishing.
          </span>
        )
      })}
  </div>
  )
}