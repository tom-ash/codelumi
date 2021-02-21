import React from 'react'
import { ManagedText } from 'managed-inputs'
import * as managers from './functions/managers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class PageIndexManage extends React.Component {
  constructor(props) {
    super(props)
    this.nameManager = managers.nameManager.bind(this)
  }

  render() {
    const { pages, inputtedName } = this.props

    if (!pages) return null

    return (
      <div id='page-index-manage'>
        <ManagedText {...this.nameManager()} />
        <div className='list'>
          {Object.keys(pages).map(pageName => {
            if (!pageName.match(inputtedName)) return null

            return (
              <div key={pageName} className='name'>
                {pageName}
                <div className='url'>
                  PL: {pages[pageName].pl}
                </div>
                <div className='url'>
                  EN: {pages[pageName].en}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PageIndexManage)
