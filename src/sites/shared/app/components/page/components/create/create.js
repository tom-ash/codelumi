import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText, ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'
import { save } from './functions/save'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class PageCreate extends React.Component {
  constructor(props) {
    super(props)
    this.nameManager = managers.nameManager.bind(this)
    this.saveManager = managers.saveManager.bind(this)
    this.save = save.bind(this)
  }

  render() {
    const { names, inputtedName } = this.props
    
    if (!names) return null

    return (
      <div id='page-create'>
        AAA
        <form>
          <ManagedText {...this.nameManager()} />
          <div className='names'>
            {names.map(name => {
              const newNameRegex = `^${inputtedName || ''}`
              if (name.match(newNameRegex)) {
                return (
                  <div key={name}>
                    {name}
                  </div>
                )
              }

              return null
            })}
          </div>
          <ManagedButton {...this.saveManager()} />
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageCreate))
