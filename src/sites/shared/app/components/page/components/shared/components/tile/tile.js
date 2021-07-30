import React from 'react'
import jsonToJsxParser from './functions/json_to_jsx_parser'
import useStyles from 'isomorphic-style-loader/useStyles'

const PageTile = props => {
  const { appName, customNodeParser, customMetaParser, renderShow, renderEdit, fetching, name, body, meta, isAdmin, clientUrl, changeRoute, changePage, updatePage } = props
  const styles = require(`../../../../../../../../${appName}/app/components/page/show/styles/styles.scss`)

  useStyles(styles)

  const buttonClasses = []
  if (fetching) buttonClasses.push('fetching')
  const buttonClassName = buttonClasses.join(' ')

  const jsonBody = (function() {
    try {
      return typeof body === 'object' ? body : JSON.parse(body)
    } catch {
      return null
    }
  })()

  const jsonMeta = (function() {
    try {
      return typeof meta === 'object' ? meta : JSON.parse(meta)
    } catch {
      return null
    }
  })()

  const tileClassNames = ['tile', name]

  if (jsonMeta && jsonMeta.className) {
    tileClassNames.push(jsonMeta.className)
  }

  return (
    <div id='page-container'>
      {jsonBody && jsonMeta && customMetaParser && customMetaParser({ jsonBody, jsonMeta })}
      <div className={tileClassNames.join(' ')}>
        {isAdmin &&
        <>
          {renderShow && <button className={buttonClassName} onClick={changePage}>Edit</button>}
          {renderEdit && <button className={buttonClassName} onClick={updatePage.bind({ withRouteChange: false })}>Save</button>}
        </>}
        
        <div className='body'>
          {jsonBody && jsonToJsxParser.call(this, { jsonBody, jsonMeta, clientUrl, changeRoute, customNodeParser })}
        </div>
      </div>
    </div>
  )
}

export default PageTile
