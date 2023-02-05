import React from 'react'
import { ManagedText, ManagedLink } from 'managed-inputs'
import { nameManager, plVerManager, enVerManager } from './functions/managers'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'

class PageIndexManage extends React.Component {
  constructor(props) {
    super(props)
    this.nameManager = nameManager.bind(this)
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
              <div
                key={pageName}
                className='name'
              >
                {pageName}
                <div className='url'>
                  PL: <ManagedLink {...plVerManager({ path: pages[pageName].pl, lang: 'PL', ...this.props })} />
                </div>
                <div className='url'>
                  EN: <ManagedLink {...enVerManager({ path: pages[pageName].en, lang: 'EN', ...this.props })} />
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
