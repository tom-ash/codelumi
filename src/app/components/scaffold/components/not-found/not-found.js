import React from 'react'
import { languageObjectHandler } from '../../../../functions/language-handler'

class NotFound extends React.Component {
  constructor(props) {
    super(props)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }

  render() {
    return (
      <div id='not-found'>
        <div className='inner'>
          <div className='number'>
            404
          </div>
          <div className='text'>
            {this.languageObjectHandler({
              pl: 'Strona nie została odnaleziona.',
              en: 'Page not found.'
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound
