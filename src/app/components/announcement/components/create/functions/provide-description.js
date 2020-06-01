import React from 'react'

export function provideDescription(language) {
  return (
    <div className='description'>
      <p className='blog-paragraph'>
        {this.languageObjectHandler({
          pl: <span>Tutaj w łatwy i&nbsp;szybki sposób możesz dodać darmowe ogłoszenie wynajmu mieszkania, lokalu użytkowego lub&nbsp;biura w&nbsp;Warszawie.</span>,
          en: <span>Here you can easily and quickly add a free announcement of lease of&nbsp;an&nbsp;apartment, usable premises or an office in Warsaw.</span>
        })}
      </p>
      <p className='blog-paragraph check'>
        <i className="fas fa-check" />
        {this.languageObjectHandler({
          pl: <span>Dodane ogłoszenie prezentowane jest na mapie oraz w katalogu przez 60&nbsp;dni.</span>,
          en: 'Your announcement shall be presented on the map and in the catalogue for 60 days.'
        })}
      </p>
      <p className='blog-paragraph check'>
        <i className="fas fa-check" />
        {this.languageObjectHandler({
          pl: <span>Ogłoszenie dodawane jest automatycznie w języku polskim oraz&nbsp;angielskim.</span>,
          en: 'The announcement is automatically added in Polish and English languages.'
        })}
      </p>
      <p className='blog-paragraph check'>
        <i className="fas fa-check" />
        {this.languageObjectHandler({
          pl: <span>Dodane ogłoszenie możesz w łatwy sposób udostępnić na Facebooku korzystając z przycisku <i className="fab fa-facebook-square" /> Udostępnij.</span>,
          en: <span>The added announcement you can easily share on Facebook using the <i className="fab fa-facebook-square" /> Share button.</span>
        })}
      </p>
      <p className='blog-paragraph check'>
        <i className="fas fa-check" />
        {this.languageObjectHandler({
          pl: <span>Dodane ogłoszenie możesz w każdym momencie edytować lub usunąć.</span>,
          en: <span>You can edit and/or delete the added announcement at any time.</span>
        })}
      </p>
    </div>
  )
}
