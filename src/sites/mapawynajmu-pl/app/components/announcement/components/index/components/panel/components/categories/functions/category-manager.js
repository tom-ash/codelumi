import React from 'react'
import SVG from '../../../../../../../../support/components/svg/svg'
import buildUrl from '../../../../../../../../../../shared/functions/builders/url'

function categoryManger(props) {
  const { category, lang, currentCategory, changeRoute, langHandler, amount, links } = props
  const { linkTrack } = category
  const active = category.value === currentCategory
  const hrefLang = lang
  const available = amount !== 0
  const classNamesArr = ['category']
  if (available) classNamesArr.push('available')
  if (active) classNamesArr.push('active')
  const classNames = { container: classNamesArr.join(' ') }
  const link = links[linkTrack]
  const href = link && buildUrl({ path: link.path })

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
    </>
  )
  const onClick = () => changeRoute({ href, retainQueryParams: true })

  return { classNames, href, hrefLang, label, onClick }
}

export default categoryManger
