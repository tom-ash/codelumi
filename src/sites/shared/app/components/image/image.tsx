import React from 'react'
import Create from './components/create/create'
import Edit from './components/edit/edit'

class Image extends React.Component {
  //@ts-ignore
  constructor(props) {
    super(props)
  }

  render() {
    //@ts-ignore
    const { render: { 'image/index': renderCreate, 'image/edit': renderEdit }, apiUrl, changeRoute, buildUrl } = this.props
    const editProps = { apiUrl, changeRoute }
    const createProps = { apiUrl, changeRoute, buildUrl }
    const classNames = []

    if (renderCreate) classNames.push('create')
    if (renderEdit) classNames.push('edit')

    return (
      <section id='image' className={classNames.join(' ')}>
        {renderCreate && <Create {...createProps} />}
        {renderEdit && <Edit {...editProps} />}
      </section>
    )
  }
}

export default Image
