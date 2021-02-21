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
    const { names: pageNames, name: inputtedPageNam } = this.props

    console.log(this.props)
    if (!pageNames) return null

    return (
      <div id='page-index-manage'>
        <ManagedText {...this.nameManager()} />
        <div className='list'>
          {Object.keys(pageNames).map(pageName => {
            return (
              <div>
                {pageName}
                <div>
                  {pageNames[pageName][0]}
                </div>
                <div>
                </div>
              </div>
            )
          })

          }
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PageIndexManage)
