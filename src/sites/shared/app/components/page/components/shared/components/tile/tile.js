import React from 'react'
import jsonToJsxParser from './functions/json_to_jsx_parser'
import useStyles from 'isomorphic-style-loader/useStyles'

const PageTile = props => {
  const { appName, customNodeParser, renderShow, renderEdit, fetching, name, body, isAdmin, clientUrl, changeRoute, changePage, updatePage } = props
  const styles = require(`../../../../../../../../${appName}/app/components/page/show/styles/styles.scss`)

  useStyles(styles)

  const buttonClasses = []
  if (fetching) buttonClasses.push('fetching')
  const buttonClassName = buttonClasses.join(' ')

  return (
    <>
      <div className={`tile ${name}`}>
        {isAdmin &&
        <>
          {renderShow && <button className={buttonClassName} onClick={changePage}>Edit</button>}
          {renderEdit && <button className={buttonClassName} onClick={updatePage.bind({ withRouteChange: false })}>Save</button>}
        </>}
        
        <div className='body'>
          {jsonToJsxParser.call(this, { body, clientUrl, changeRoute, customNodeParser })}
        </div>
      </div>
    </>
  )
}

export default PageTile
