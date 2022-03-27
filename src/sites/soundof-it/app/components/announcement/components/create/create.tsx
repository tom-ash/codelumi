import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
//@ts-ignore
import withStyles from 'isomorphic-style-loader/withStyles'
//@ts-ignore
import styles from './styles/styles.scss'
const AnnouncementCreateForm = loadable(() => import('./components/form/form'))
import { Create } from './constants/types.d'

class AnnouncementCreate extends React.Component<Create> {
  constructor(props: Create) {
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
