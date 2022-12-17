import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
const AnnouncementCreateForm = loadable(() => import('./components/form/form'))
import { Create } from './constants/types.d'

class AnnouncementCreate extends React.Component<Create> {
  constructor(props: Create) {
    super(props)
  }

  render() {
    const {
      selectableSkills,
      selectedSkills,
      setStore,
      remote,
      hybrid,
      office,
      b2b,
      b2bMax,
      b2bMin,
      employment,
      employmentMax,
      employmentMin,
      civilContract,
      civilContractMax,
      civilContractMin,
    } = this.props

    const skillSelectorProps = {
      selectableSkills,
      selectedSkills,
      setStore,
      remote,
      hybrid,
      office,
      b2b,
      b2bMax,
      b2bMin,
      employment,
      employmentMax,
      employmentMin,
      civilContract,
      civilContractMax,
      civilContractMin,
    }

    return (
      <div id='listing-create'>
        <AnnouncementCreateForm {...skillSelectorProps} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementCreate))
