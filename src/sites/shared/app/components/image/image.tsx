import React from 'react'
import Index from './components/index'
import Edit from './components/edit/edit'

interface ImageProps {
  render: {
    'image/index': boolean
    'image/edit': boolean
  }
  apiUrl: string
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
    } = this.props

    return (
      <section id='image'>
        {renderIndex && <Index />}
        {renderEdit && <Edit />}
      </section>
    )
  }
}

export default Image
