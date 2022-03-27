import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
//@ts-ignore
import withStyles from 'isomorphic-style-loader/withStyles'
//@ts-ignore
import styles from './styles/styles.scss'
//@ts-ignore
import AnnouncementCreateForm from './components/form/form.tsx'
//@ts-ignore
import { Create } from './constants/types.d.ts'

class AnnouncementCreate extends React.Component<Create> {
  constructor(props: Create) {
    super(props)
  }

  render() {
    const { selectableSkills, selectedSkills, changeState } = this.props
    const skillSelectorProps = { selectableSkills, selectedSkills, changeState }

    return (
      <div id='announcement-create'>
        <AnnouncementCreateForm selectableSkills={selectableSkills} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementCreate))
