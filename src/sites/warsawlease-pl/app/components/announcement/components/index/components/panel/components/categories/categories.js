import React from 'react'
import SVG from '../../../../../../../support/components/svg/svg'
import { categories } from '../../../../../../constants/categories'
import changeRouteWithHref from '../../../../../../../../functions/routes/changers/route-with-href.js'

const AnnouncementIndexPanelCategories = ({
  langHandler,
  currentCategory,
  changeRoute,
  lang
}) => {
  return (
    <div className='categories'>
      {categories.map(category => {
        const active = category.value === currentCategory || currentCategory === ''
        return (
          <React.Fragment key={category.url.en}>
            <div
              className={`category${active ? ' active' : ''}`}
              onClick={() => {
                const track = category.track
                changeRouteWithHref({ lang, track, changeRoute })
              }}
            >
              <SVG
                name={category.pin.svg}
                {...active ? { fill: category.pin.color } : { fill: '#909497' }}
              />
              <p>
                {langHandler(category.label)}
              </p>
            </div>
          </React.Fragment>
        )
      })}
      <div className='float-clear' />
    </div>
  )
}

export default AnnouncementIndexPanelCategories
