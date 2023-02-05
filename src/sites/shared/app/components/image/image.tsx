import React from 'react'
import Index from './components/index'
import Edit from './components/edit/edit'

interface ImageProps {
  render: {
    'image/index': boolean
    'image/edit': boolean
  }
  apiUrl: string
  changeRoute(props: object): void
  buildUrl(props: { path: string }): string
  langHandler: LangHandler
  clientUrl: string
  device: string
  lang: string
  appName: string
}

class Image extends React.Component<ImageProps> {
  constructor(props: ImageProps) {
    super(props)
  }

  render() {
    const {
      render: { 'image/index': renderIndex, 'image/edit': renderEdit },
      apiUrl,
      changeRoute,
      buildUrl,
      langHandler,
      clientUrl,
      device,
      lang,
      appName,
    } = this.props

    const editProps = {
      apiUrl,
      changeRoute,
      langHandler,
      clientUrl,
      device,
      lang,
      appName,
    }

    const indexProps = {
      apiUrl,
      changeRoute,
      buildUrl,
    }

    const classNames = []

    if (renderIndex) classNames.push('index')
    if (renderEdit) classNames.push('edit')

    return (
      <section
        id='image'
        className={classNames.join(' ')}
      >
        {renderIndex && <Index {...indexProps} />}
        {renderEdit && <Edit {...editProps} />}
      </section>
    )
  }
}

export default Image
