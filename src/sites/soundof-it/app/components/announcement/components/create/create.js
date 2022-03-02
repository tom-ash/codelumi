import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import AnnouncementCreateForm from './components/form/form.js'

class AnnouncementCreate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { selectableSkills, selectedSkills, changeState } = this.props
    const skillSelectorProps = { selectableSkills, selectedSkills, changeState }

    return (
      <div id='announcement-create'>
        <AnnouncementCreateForm {...skillSelectorProps} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementCreate))
