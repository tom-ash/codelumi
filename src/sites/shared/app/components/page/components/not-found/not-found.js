import React from 'react'

class PageNotFound extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { langHandler } = this.props

    return (
      <div id='not-found'>
        <div className='inner'>
          <div className='number'>404</div>
          <div className='text'>
            Strona nie została odnaleziona.
          </div>
        </div>
      </div>
    )
  }
}

export default PageNotFound
