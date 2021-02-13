import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import PageTile from '../shared/components/tile/tile'
import { langObjHandler } from '../../../../functions/lang-handler'
import SVG from '../../../support/components/svg/svg'

class PageShow extends React.Component {
  constructor(props) {
    super(props)
    this.langObjHandler = langObjHandler
  }

  render() {
    const {
      postData,
      isAdmin,
      beingEdited,
      changeRender,
      svgs,
      standalone
    } = this.props

    const localizedPostData = this.langObjHandler(postData)
    if (localizedPostData === null) return null

    const {
      body
    } = localizedPostData
    if (body === undefined) return null

    return (
      <div id='post-show' className={standalone ? 'standalone' : 'attached'}>
        {isAdmin &&
        <button onClick={() => changeRender({ create: true })}>
          <SVG pathData={svgs && svgs.pen} />
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
