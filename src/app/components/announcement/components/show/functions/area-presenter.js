import React from 'react'

export const AreaPresenter = ({
  area,
  languageObjectHandler
}) => (
  <div className='area'>
    <div className='amount'>
      {area}
    </div>
    {languageObjectHandler({
      pl: (
        <React.Fragment>
          <div className='m'>
            m
          </div>
          <div className='sq'>
            2
          </div>
        </React.Fragment>
      ),
      en: (
        <div className='m'>
          sqm
        </div>
      )
    })}
    <div className='float-clear' />
  </div>
)