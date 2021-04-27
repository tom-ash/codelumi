import React from 'react'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import { SHOW_MENU } from '../../constants/tracks'
import { USER_TRACK, USER_SHOW_TRACK } from '../../../../../../../shared/constants/tracks/tracks.js'

class MenuButton extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { authorized, smallMobile, changeControl, changeRender } = this.props

    return (
      <div className='menu-button' onClick={() => {
        if (authorized && smallMobile) return changeRender({ [USER_TRACK] : true, [USER_SHOW_TRACK]: true })

        changeControl({ [SHOW_MENU]: true })
      }}>
        <div/>
        <div/>
        <div/>
      </div>
    )
  }
}

export default withStyles(styles)(MenuButton)
