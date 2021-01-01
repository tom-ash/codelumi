import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import * as lifecycle from './functions/lifecycle'
import PageTile from '../shared/components/tile/tile'
import { languageObjectHandler } from '../../../../functions/language-handler'
import ScalableVectorGraphic from '../../../support/components/scalable-vector-graphic/scalable-vector-graphic'

class PageShow extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.languageObjectHandler = languageObjectHandler
  }

  render() {
    const {
      postData,
      isAdmin,
      beingEdited,
      changeRender,
      scalableVectorGraphics,
      standalone
    } = this.props

    const localizedPostData = this.languageObjectHandler(postData)
    if (localizedPostData === null) return null

    const {
      body
    } = localizedPostData
    if (body === undefined) return null

    return (
      <div id='post-show' className={standalone ? 'standalone' : 'attached'}>
        {isAdmin &&
        <button onClick={() => changeRender({ create: true })}>
          <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.pen} />
        </ button >
        }
        {!beingEdited &&
        <PageTile
          name='welcome'
          body={body}
        />
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageShow))
