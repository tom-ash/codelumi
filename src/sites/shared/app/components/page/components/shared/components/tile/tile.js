import React from 'react'
import jsonToJsxParser from './functions/json_to_jsx_parser'
import useStyles from 'isomorphic-style-loader/useStyles'
import SVG from '../../../../../support/svg/svg.js'

const PageTile = props => {
  const { device, appName, customNodeParser, customMetaParser, renderShow, renderEdit, fetching, name, body, meta, isAdmin, clientUrl, changeRoute, buildUrl, changePage, updatePage } = props

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

  const mainElementType = jsonMeta.type || 'article'
  const className = jsonMeta.className
  const mainElement = React.createElement(
    mainElementType,
    { className },
    jsonToJsxParser.call(this, { jsonBody, jsonMeta, clientUrl, changeRoute, buildUrl, device, isAdmin, customNodeParser })
  )

  return (
    <>
      {jsonBody && jsonMeta && customMetaParser && customMetaParser({ jsonBody, jsonMeta, device })}
      {isAdmin && (
      <>
        {renderShow && <button className={buttonClassName} onClick={changePage}><SVG name='edit' /></button>}
      </>
      )}
      {mainElement}
    </>
  )
}

export default PageTile
