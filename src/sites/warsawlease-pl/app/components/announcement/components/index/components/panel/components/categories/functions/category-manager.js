import React from 'react'
import SVG from '../../../../../../../../support/components/svg/svg'
import CLIENT_URL from '../../../../../../../../../../shared/constants/urls/client.js'
import getRouteByTrackAndLang from '../../../../../../../../../../../shared/app/functions/routes/getters/route-by-track-and-lang.js'
import routes from '../../../../../../../../../../shared/constants/routes/routes.js'

function categoryManger(props) {
  const { renderCatalogue, category, lang, currentCategory, changeRoute, langHandler, amount } = props
  const active = category.value === currentCategory
  const track = category.track
  const route = getRouteByTrackAndLang({ track, routes, lang })
  const url = renderCatalogue ? route.relatedToUrl : route.url
  const href = `${CLIENT_URL}/${url}`
  const hrefLang = lang
  const available = amount !== 0
  const classNamesArr = ['category']
  if (available) classNamesArr.push('available')
  if (active) classNamesArr.push('active')
  const classNames = { container: classNamesArr.join(' ') }

  const label = (
    <>
      <div className={`icon`}>
        <SVG
          name={category.pin.svg}
          {...active ? { fill: category.pin.color } : { fill: '#909497' }}
        />
        <p>
          {langHandler(category.label)}
        </p>
      </div>
      {
      <div className='amount'>
        {available && amount}
      </div>}
    </>
  )
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, label, onClick }
}

export default categoryManger
