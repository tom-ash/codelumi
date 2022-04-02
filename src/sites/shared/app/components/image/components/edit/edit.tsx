import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import { BodyTextarea, SaveButton } from './functions/form-elements'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'

type ImageEditProps = {
  apiUrl: string,
  imageId: number,
  body: string,
  changeData(): void
}

const ImageEdit = (props: ImageEditProps) => {
  useStyles(styles)

  const {
    apiUrl,
    imageId,
    body,
    changeData
  } = props

  const bodyElements = (() => {
    try {
      return typeof body === 'object' ? body : JSON.parse(body)
    } catch {
      return []
    }
  })()

  return (
    <div className='edit'>
      <div id='image-output' className='output'>
        {/* @ts-ignore */}
        {bodyElements.map(bodyElement => {
          if (!bodyElement.t) return null

          return (
            React.createElement(
              bodyElement.t,
              //@ts-ignore
              bodyElement.attrs || {},
              //@ts-ignore
              bodyElement.c
            )
          )
        })}
      </div>
      <BodyTextarea
          body={body}
          changeData={changeData}
        />
      <SaveButton
        imageId={imageId}
        body={body}
        apiUrl={apiUrl}
      />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageEdit)
