import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import * as lifecycle from './functions/lifecycle'
import PostTile from '../shared/components/tile/tile'
import { languageObjectHandler } from '../../../../functions/language-handler'
import ScalableVectorGraphic from '../../../support/components/scalable-vector-graphic/scalable-vector-graphic'

class PostShow extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.languageObjectHandler = languageObjectHandler
  }

  render() {
    const {
      name,
      body,
      isAdmin,
      beingEdited,
      changeRender,
      scalableVectorGraphics
    } = this.props

    if  (name === null || body === null) return null

    if (beingEdited) return null

    return (
      <div id='post-show'>
        {isAdmin &&
        <button onClick={() => changeRender({ create: true })}>
          <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.pen} />
        </ button >
        }
        {!beingEdited &&
        <PostTile
          name='welcome'
          body={this.languageObjectHandler(body)}
        />
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PostShow))
