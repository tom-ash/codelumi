import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import SkillSelector from './components/skill-selector/skill-selector.js'

class AnnouncementCreate extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { selectableSkills, selectedSkill } = this.props
    const skillSelectorProps = { selectableSkills, selectedSkill }

    return (
      <div id='announcement-create'>
        <h1>
          Post a Job
        </h1>
        <SkillSelector {...skillSelectorProps} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementCreate))
