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

  return (
    <div id='page-container'>
      {jsonBody && customMetaParser && customMetaParser({ meta, jsonBody })}
      <div className={`tile ${name}`}>
        {isAdmin &&
        <>
          {renderShow && <button className={buttonClassName} onClick={changePage}>Edit</button>}
          {renderEdit && <button className={buttonClassName} onClick={updatePage.bind({ withRouteChange: false })}>Save</button>}
        </>}
        
        <div className='body'>
          {jsonBody && jsonToJsxParser.call(this, { jsonBody, clientUrl, changeRoute, customNodeParser })}
        </div>
      </div>
    </div>
  )
}

export default PageTile
