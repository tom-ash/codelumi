import React from 'react'

export function AnnouncementCreateEditorial({
  languageObjectHandler,
  showDescription,
  changeControl
}) {
  return (
    <React.Fragment>
      <div
        className='description-question'
        onClick={() => changeControl({ showDescription: !showDescription })}
      >
        {languageObjectHandler({
          pl: 'Dlaczego warto dodać ogłoszenie na warsawlease.pl?',
          en: 'Why it\'s expedient to add an announcement on warsawlease.pl?'
        })}
      </div>
      <div className={`description${showDescription ? '' : ' rolled-up'}`}>
        <p className='blog-paragraph check'>
          <span className='bull'>&bull;</span>
          {languageObjectHandler({
            pl: <span>Ogłoszenie prezentowane jest na mapie oraz w katalogu.</span>,
            en: 'The announcement is presented on the map and in the catalogue.'
          })}
        </p>
        <p className='blog-paragraph check'>
          <span className='bull'>&bull;</span>
          {languageObjectHandler({
            pl: <span>Ogłoszenie dodawane jest automatycznie w języku polskim oraz&nbsp;angielskim.</span>,
            en: 'The announcement is automatically added in Polish and English languages.'
          })}
        </p>
        <p className='blog-paragraph check'>
          <span className='bull'>&bull;</span>
          {languageObjectHandler({
            pl: <span>Ogłoszenie może być w łatwy sposób udostępnione na Facebooku za pomocą przycisku <i className="fab fa-facebook-square" /> Udostępnij.</span>,
            en: <span>The announcement can be easily shared on Facebook with the <i className="fab fa-facebook-square" /> Share button.</span>
          })}
        </p>
        <p className='blog-paragraph check'>
          <span className='bull'>&bull;</span>
          {languageObjectHandler({
            pl: <span>Ogłoszenie może być w każdym momencie edytowane lub usunięte.</span>,
            en: <span>The announcement can be edited and/or deleted at any time.</span>
          })}
        </p>
      </div>
    </React.Fragment>
  )
}
