import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import { BodyTextarea, SaveButton, DownloadButton } from './functions/form-elements'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import WidthInput from './components/width-input'
import HeightInput from './components/height-input'

type ImageEditProps = {
  apiUrl: string,
  imageId: number,
  body: string,
  changeData(): void,
  width: string,
  height: string
}

const ImageEdit = (props: ImageEditProps) => {
  useStyles(styles)

  const {
    apiUrl,
    imageId,
    body,
    changeData,
    width,
    height
  } = props

  const bodyElements = (() => {
    try {
      return typeof body === 'object' ? body : JSON.parse(body)
    } catch {
      return []
    }
  })()

  const widthInputProps = { width, changeData }
  const heightInputProps = { height, changeData }
  const bodyTextareaProps = { body, changeData }
  const saveButtonProps = { imageId, body, apiUrl, width, height }

  console.log(width)
  // console.log(height)

  return (
    <div className='edit'>
      <div
        id='image-output'
        className='output'
        style={{
          width: +width,
          height: +height
        }}
      >
        {/* @ts-ignore */}
        {bodyElements.map((bodyElement, index) => {

          if (!bodyElement) return null

          if (typeof bodyElement === 'string') {
            return <div dangerouslySetInnerHTML={{ __html: bodyElement }} />
          }

          if (!bodyElement.t) return null

          if (bodyElement.t === 's') {
            const css = bodyElement.c
            const head = document.head
            const style = document.createElement('style')
            head.appendChild(style)
            style.type = 'text/css'
            style.appendChild(document.createTextNode(css))
            return
          }

          return (
            React.createElement(
              bodyElement.t,
              { ...bodyElement.attrs, key: index },
              bodyElement.c
            )
          )
        })}
      </div>

      <WidthInput {...widthInputProps} />
      <HeightInput {...heightInputProps} />
      <BodyTextarea {...bodyTextareaProps} />
      <SaveButton {...saveButtonProps} />
      <DownloadButton />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageEdit)
