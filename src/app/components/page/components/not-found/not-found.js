import React from 'react'
import { langObjHandler } from '../../../../functions/lang-handler'

class PageNotFound extends React.Component {
  constructor(props) {
    super(props)
    this.langObjHandler = langObjHandler.bind(this)
  }

  render() {
    return (
      <div id='not-found'>
        <div className='inner'>
          <div className='number'>
            404
          </div>
          <div className='text'>
            {this.langObjHandler({
              pl: 'Strona nie została odnaleziona.',
              en: 'Page not found.'
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default PageNotFound
