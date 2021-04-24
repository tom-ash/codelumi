import React from 'react'
import jsonToJsxParser from './functions/json_to_jsx_parser'
import useStyles from 'isomorphic-style-loader/useStyles'

const PageTile = props => {
  const { customNodeParser, renderShow, renderEdit, fetching, name, body, styles, isAdmin, changePage, updatePage } = props

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
          {jsonToJsxParser.call(this, { body, customNodeParser })}
        </div>
      </div>
    </>
  )
}

export default PageTile
