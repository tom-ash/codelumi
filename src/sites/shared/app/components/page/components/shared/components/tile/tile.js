import React from 'react'
import SVG from '../../../../../support/svg/svg.js'
import Section from './components/node-parser/components/section/section'

const PageTile = props => {
  const {
    device, appName, renderShow, renderEdit, fetching, name, body, meta, isAdmin,
    clientUrl, changeRoute, buildUrl, changePage, updatePage, lang, langHandler, publishedOn, modifiedOn
  } = props

  const buttonClasses = ['edit']
  if (fetching) buttonClasses.push('fetching')
  const buttonClassName = buttonClasses.join(' ')

  const jsonBody = (() => {
    try {
      return typeof body === 'object' ? body : JSON.parse(body)
    } catch {
      return []
    }
  })()

  const jsonMeta = (() => {
    try {
      return typeof meta === 'object' ? meta : JSON.parse(meta)
    } catch {
      return {}
    }
  })()

  const nodeProps = {
    appName, jsonBody, jsonMeta, clientUrl, changeRoute, buildUrl, device, isAdmin, lang,
    langHandler, publishedOn, modifiedOn
  }

  return (
    <>
      {isAdmin && (
      <>
        {renderShow && <button className={buttonClassName} onClick={changePage}><SVG name='edit' /></button>}
      </>
      )}
      {<Section {...nodeProps} />}
    </>
  )
}

export default PageTile
