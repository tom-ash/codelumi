import React from 'react'
import { componentDidMount } from './functions/lifecycle'
import PostCreate from '../../../post/components/create/create'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import { initializeCreate } from './functions/initialize_create'
import { jsonToJsxParser } from './functions/json_to_jsx_parser'
import ScalableVectorGraphic from '../../../support/components/scalable-vector-graphic/scalable-vector-graphic'

class PostShow extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = componentDidMount
    this.jsonToJsxParser = jsonToJsxParser.bind(this)
  }

  render() {
    const {
      className,
      data,
      languageHandler,
      changePostCreateInputs,
      beingEdited,
      scalableVectorGraphics,
      admin
    } = this.props

    if (!data) return null

    return (
      <>
        <div className={`post-container${className ? ` ${className}` : ''}`}>
          {admin &&
          <button
            onClick={() => initializeCreate({ data, changePostCreateInputs, languageHandler })}
            disabled={beingEdited}
          >
            <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.pen} />
          </ button >
          }
          <div className='body'>
            {this.jsonToJsxParser(languageHandler(data.body))}
          </div>
        </div>
        {beingEdited && <PostCreate />}
      </>
    )
  }
}

export default withStyles(styles)(PostShow)
