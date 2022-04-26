import React from 'react'
import Index from './components/index'
import Edit from './components/edit/edit'

class Image extends React.Component {
  //@ts-ignore
  constructor(props) {
    super(props)
  }

  render() {
    //@ts-ignore
    const { render: { 'image/index': renderIndex, 'image/edit': renderEdit }, apiUrl, changeRoute, buildUrl } = this.props
    const editProps = { apiUrl, changeRoute }
    const indexProps = { apiUrl, changeRoute, buildUrl }
    const classNames = []

    if (renderIndex) classNames.push('index')
    if (renderEdit) classNames.push('edit')

    return (
      <section id='image' className={classNames.join(' ')}>
        {renderIndex && <Index {...indexProps} />}
        {renderEdit && <Edit {...editProps} />}
      </section>
    )
  }
}

export default Image
