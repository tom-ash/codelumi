import React from 'react'
import Edit from './components/edit/edit'

class Image extends React.Component {
  //@ts-ignore
  constructor(props) {
    super(props)
  }

  render() {
    //@ts-ignore
    const { render: { 'image/edit': renderEdit } } = this.props

    return (
      <section id='image'>
        {renderEdit && <Edit />}
      </section>
    )
  }
}

export default Image
